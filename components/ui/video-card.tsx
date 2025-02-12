"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

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
            <div className="relative w-full h-full">
              <Image 
                src={video.thumbnail_url} 
                alt={video.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-orange-600/90 flex items-center justify-center shadow-lg group-hover:bg-orange-600 transition-colors">
                <Play className="w-8 h-8 text-white fill-white" />
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