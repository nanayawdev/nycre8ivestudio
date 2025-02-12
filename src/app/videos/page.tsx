import { VideoGrid } from "../../../components/sections/video-grid"
import Link from "next/link"

export default function VideosPage() {
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
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm bg-[#222] border border-[#333]">
            My Content
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mt-4">
            <span className="text-gray-500">Featured</span>{" "}
            <span className="text-white">Videos</span>
          </h1>
        </div>

        <VideoGrid />
      </div>
    </main>
  )
} 