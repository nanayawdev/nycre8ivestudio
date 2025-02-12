import { VideoEmbed } from "../../../../components/sections/video-embed"
import Link from "next/link"

export default function EmbedPage() {
  return (
    <main className="bg-[#111111] min-h-screen text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="text-white font-bold text-xl tracking-tight"
          >
            NY<span className="font-light">CRE8IVE</span>
          </Link>
          <Link
            href="/videos"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Back to Videos
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-medium text-white mb-4">Add New Video</h1>
          <p className="text-gray-400">Share your video content by adding the URL below.</p>
        </div>

        <VideoEmbed />
      </div>
    </main>
  )
} 