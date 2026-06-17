export default function Logo({ size = 48, withText = true }) {
  const basePath = import.meta.env.BASE_URL;
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={`${basePath}logo.png`}
        alt="Megit logo"
        width={size}
        height={size}
        style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain' }}
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
