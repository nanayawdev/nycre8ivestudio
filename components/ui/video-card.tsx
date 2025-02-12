"use client"

import { useState } from "react"

interface VideoCardProps {
  video: {
    id: string
    title: string
    description: string
    embed_url: string
    thumbnail_url: string
    created_at: string
  }
}

export function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="group bg-[#161616] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] transition-colors">
      <div className="aspect-video relative">
        {isPlaying ? (
          <iframe
            src={video.embed_url}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img 
              src={video.thumbnail_url} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
              </div>
            </button>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl text-white mb-2">{video.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{video.description}</p>
      </div>
    </div>
  )
} 