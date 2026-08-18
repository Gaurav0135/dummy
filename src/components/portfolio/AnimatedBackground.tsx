export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-blue-400/40 to-indigo-500/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-purple-500/30 to-pink-400/25 blur-3xl animate-blob [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-cyan-400/25 to-blue-500/25 blur-3xl animate-blob [animation-delay:-8s]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,oklch(0.6_0.2_275/0.08)_1px,transparent_0)] [background-size:32px_32px]" />
    </div>
  );
}
