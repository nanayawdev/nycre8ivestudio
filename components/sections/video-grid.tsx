"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { VideoCard } from "../ui/video-card"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

interface Video {
  id: string
  title: string
  description: string
  embed_url: string
  thumbnail_url: string
  created_at: string
}

export function VideoGrid() {
  const [videos, setVideos] = useState<Video[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVideos() {
      if (!supabase) {
        setError('Configuration error')
        setIsLoading(false)
        return
      }

      try {
        const { data, error: supabaseError } = await supabase
          .from('videos')
          .select('*')
          .order('created_at', { ascending: false })

        if (supabaseError) throw supabaseError
        setVideos(data || [])
      } catch (error) {
        console.error('Error fetching videos:', error)
        setError('Failed to load videos')
      } finally {
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (isLoading) {
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="aspect-video bg-white/5 rounded-2xl animate-pulse" />
      ))}
    </div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
} 