import { motion } from 'framer-motion'

export default function PhoneMockup({ src, isVideo = false, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`phone-frame mx-auto ${className}`}
      style={{ maxWidth: 280 }}
    >
      <div className="phone-screen relative">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-20" />
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={src}
            alt="Megit app screen"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </motion.div>
  )
}
