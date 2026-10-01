"use client"

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number }
}

export default function AnimatedBackground({ mousePosition }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"></div>
      <div
        className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "all 0.3s ease-out",
        }}
      ></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </div>
  )
}
