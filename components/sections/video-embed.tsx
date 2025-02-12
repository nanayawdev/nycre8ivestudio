"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export function VideoEmbed() {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Extract video ID and create embed URL based on platform
      const embedUrl = getEmbedUrl(url)
      const thumbnailUrl = await getThumbnail(url)

      const { error } = await supabase
        .from('videos')
        .insert([
          {
            title,
            description,
            embed_url: embedUrl,
            thumbnail_url: thumbnailUrl,
            original_url: url
          }
        ])

      if (error) throw error

      // Clear form
      setUrl("")
      setTitle("")
      setDescription("")
      alert("Video added successfully!")
    } catch (error) {
      console.error('Error adding video:', error)
      alert("Failed to add video. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="url" className="block text-sm text-gray-400 mb-2">
          Video URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-white/20 focus:outline-none"
          required
        />
      </div>

      <div>
        <label htmlFor="title" className="block text-sm text-gray-400 mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-white/20 focus:outline-none"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm text-gray-400 mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-white/20 focus:outline-none"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3 rounded-xl bg-orange-600 text-white hover:bg-orange-700 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Adding Video..." : "Add Video"}
      </button>
    </form>
  )
}

// Helper functions to handle different video platforms
function getEmbedUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    
    // YouTube
    if (urlObj.hostname.includes('youtube.com') || urlObj.hostname.includes('youtu.be')) {
      const videoId = urlObj.hostname.includes('youtu.be') 
        ? urlObj.pathname.slice(1)
        : urlObj.searchParams.get('v')
      return `https://www.youtube.com/embed/${videoId}`
    }
    
    // Facebook
    if (urlObj.hostname.includes('facebook.com')) {
      // Handle both video and post URLs
      const videoId = url.includes('/videos/') 
        ? url.split('/videos/')[1].split('/')[0]
        : url.split('/posts/')[1].split('/')[0]
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&t=0`
    }
    
    // TikTok
    if (urlObj.hostname.includes('tiktok.com')) {
      const videoId = urlObj.pathname.split('/').pop()
      return `https://www.tiktok.com/embed/${videoId}`
    }

    // Instagram
    if (urlObj.hostname.includes('instagram.com')) {
      return `https://www.instagram.com/p/${url.split('/').pop()}/embed`
    }

    return url
  } catch (error) {
    console.error('Error parsing URL:', error)
    return url
  }
}

async function getThumbnail(url: string): Promise<string> {
  try {
    const urlObj = new URL(url)
    
    // YouTube
    if (urlObj.hostname.includes('youtube.com') || urlObj.hostname.includes('youtu.be')) {
      const videoId = urlObj.hostname.includes('youtu.be') 
        ? urlObj.pathname.slice(1)
        : urlObj.searchParams.get('v')
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    }
    
    // For Facebook, TikTok, and Instagram, we'll use a placeholder
    // as getting thumbnails requires API access
    return '/video-placeholder.jpg'
  } catch (error) {
    console.error('Error getting thumbnail:', error)
    return '/video-placeholder.jpg'
  }
} 