import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import {prismaClient} from "@/app/lib/db";
import youtubesearchapi from "youtube-search-api";

const ytRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;


const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string().url().refine((val) =>
        val.includes("spotify") || val.includes("youtube"),
        { message: "URL must be a Spotify or YouTube link" }
    )
})

export async function POST(req: NextRequest){
    try{
        const data = CreateStreamSchema.parse(await req.json());
        const isYt = ytRegex.test(data.url);
        if(!isYt){
            return NextResponse.json({
                message:"Wrong url format"
            }, {
                status: 411
            })
        }

        const extractedId = data.url.split("?v=")[1];

        const getVideoDetails = await youtubesearchapi.GetVideoDetails(extractedId);

        const thumbnails = getVideoDetails.thumbnail.thumbnails
        thumbnails.sort((a: {width: number}, b: {width: number}) => a.width < b.width ? -1 : 1);

        const stream = await prismaClient.stream.create({
            data:{
                userId: data.creatorId,
                url: data.url,
                extractedId: extractedId,
                type: "Youtube",
                title: getVideoDetails.title ?? "Can't find title",
                bigImg: thumbnails[thumbnails.length - 1].url ?? "https://img.freepik.com/premium-vector/colorful-musical-note-art-with-vibrant-splashes-musical-note-black-surrounded_53876-651215.jpg?semt=ais_hybrid&w=740&q=80",
                smallImg: thumbnails.length > 1 ? thumbnails[thumbnails.length - 2].url : thumbnails[thumbnails.length -1].url ?? 
                    "https://img.freepik.com/premium-vector/colorful-musical-note-art-with-vibrant-splashes-musical-note-black-surrounded_53876-651215.jpg?semt=ais_hybrid&w=740&q=80",
            }
        })

        return NextResponse.json(
            { 
                message: "Stream added successfully ",
                streamId: stream.id
            },
            { status: 200 }
        );

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Error while adding a stream"
        }, {
            status: 411
        })
    }
    

}



export async function GET(req: NextRequest) {
    const creatorId = req.nextUrl.searchParams.get("creatorId");
    const streams = await prismaClient.stream.findMany({
        where:{
            userId: creatorId ?? ""
        }
    })

    return NextResponse.json({
        streams
    })

}
