import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import {prismaClient} from "@/app/lib/db";

const CreateStreamSchema = z.object({
    createrId: z.string(),
    url: z.string().url().refine((val) =>
        val.includes("spotify") || val.includes("youtube"),
        { message: "URL must be a Spotify or YouTube link" }
    ),
})

export async function POST(req: NextRequest){
    try{
        const data = CreateStreamSchema.parse(await req.json());
        

    }catch(error){
        return NextResponse.json({
            message:"Error while adding a stream"
        }, {
            status: 411
        })
    }
    

}