"use client"

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-pink-200">
      <div className="absolute top-1/3 flex flex-col items-center">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <a href="/">Return Home</a>
      </div>
    </main>
  )
}