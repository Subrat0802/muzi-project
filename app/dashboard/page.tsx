/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from "react";

export default function Page() {

  const [links, setLinks] = useState([
    { id: 1, title: "Barbadd", url: "4FOZ9V35KTw", upvote: 0 },
    { id: 2, title: "Ae Dil Hai Mushkil - Full Song | Arijit Singh", url: "6FURuLYrR_Q", upvote: 0 },
    { id: 3, title: "Kesariya - Brahmastra | Arijit Singh", url: "BddP6PYo2gs", upvote: 0 },
    { id: 4, title: "Chaleya - Jawan | Arijit Singh & Shilpa Rao", url: "6CHs4x2uqcQ", upvote: 0 },
    { id: 5, title: "Chaleya - Jawan | Arijit Singh & Shilpa Rao", url: "6CHs4x2uqcQ", upvote: 0 }
  ]);

  const handleLikeClick = (id: number) => {
    setLinks(prev =>
      prev.map(item =>
        item.id === id ? { ...item, upvote: item.upvote + 1 } : item
      )
    );
  };

  const handleDislikeClick = (id: number) => {
    setLinks(prev =>
      prev.map(item =>
        item.id === id ? { ...item, upvote: item.upvote - 1 } : item
      )
    );
  };

  return (
    <div className="w-full min-h-dvh px-10 overflow-x-hidden">

      <div className="flex gap-3">
        
        {/* LEFT SECTION */}
        <div className="w-[70%] min-h-[90dvh] border p-4">
          <div className="flex flex-col gap-6">
            {[...links].sort((a, b) => b.upvote - a.upvote).map((el) => {
              const thumbnail = `https://img.youtube.com/vi/${el.url}/maxresdefault.jpg`;

              return (
                <div
                  key={el.id}
                  className="flex gap-3 border rounded-2xl items-start"
                >
                  <img
                    src={thumbnail}
                    alt={el.title}
                    className="w-44 object-cover rounded-l-2xl"
                  />

                  <div>
                    <p className="mt-2 text-sm font-medium">{el.title}</p>
                    <div className="flex gap-4 text-xs">
                      <p className="cursor-pointer" onClick={() => handleLikeClick(el.id)}>like</p>
                      <p className="cursor-pointer" onClick={() => handleDislikeClick(el.id)}>dislike</p>
                    </div>

                    <p className="text-xs mt-1">Upvotes: {el.upvote}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-[30%] border min-h-[90dvh] p-4">
          {[...links].sort((a, b) => b.upvote - a.upvote).slice(0, 1).map((el) => (
            <div key={el.id}>
              <p>{el.title}</p>
              <iframe
                className="w-full h-[40vh]"
                src={`https://www.youtube.com/embed/${el.url}`}
                title="YouTube video player"
              ></iframe>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
