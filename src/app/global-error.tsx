'use client'

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  if(error) return <p>Error</p>
  return (
    <html>
      <body>
        {/* <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button> */}
        <main className="relative min-h-screen flex flex-col items-center bg-pink-200">
          <div className="absolute top-1/3 flex flex-col items-center">
            <h2>Internal Server Error</h2>
            <p>Could not complete request</p>
            <a href="/">Return Home</a>
          </div>
        </main>
      </body>
    </html>
  )
}