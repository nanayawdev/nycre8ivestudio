'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-medium mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 