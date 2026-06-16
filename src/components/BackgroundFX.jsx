export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="blob w-96 h-96 bg-brand-purple/40 -top-20 -left-20" />
      <div className="blob w-[500px] h-[500px] bg-brand-purple-dark/30 top-1/3 -right-40" style={{ animationDelay: '5s' }} />
      <div className="blob w-80 h-80 bg-brand-purple-light/30 bottom-20 left-1/3" style={{ animationDelay: '10s' }} />
    </div>
  )
}
