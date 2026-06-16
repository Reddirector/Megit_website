export default function Logo({ size = 36, withText = true }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/megit-logo.png"
        alt="Megit logo"
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: 'contain' }}
        className="drop-shadow-lg"
      />
      {withText && (
        <span className="font-display font-bold text-xl tracking-tight">
          MEGIT
        </span>
      )}
    </div>
  )
}
