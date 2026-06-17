import { motion } from 'framer-motion'
import { Mic2, Palette, Music, Wifi, BarChart3, Headphones, Shield, Zap, Heart, Layers, Volume2, Sparkles } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import BackgroundFX from '../components/BackgroundFX.jsx'
import PhoneMockup from '../components/PhoneMockup.jsx'

const detail = [
  {
    icon: Mic2,
    title: 'Real-time Synchronized Lyrics',
    text: 'Watch lyrics light up line-by-line as the song plays. A soft purple glow highlights the active line — perfect for singing along.',
    img: '/Megit_website/screenshots/lyrics-glow.jpg',
    reverse: false
  },
  {
    icon: Palette,
    title: 'Fully Customizable Accent Colors',
    text: 'Pick any hue with the color picker — saturation and brightness sliders give you precise control. The entire UI updates instantly: sliders, icons, highlights, everything.',
    img: '/Megit_website/screenshots/accent-red.jpg',
    reverse: true
  },
  {
    icon: BarChart3,
    title: 'Detailed Listening Dashboard',
    text: 'Track your listening time by week, month, or year. See daily averages and discover your habits — wrapped in a sleek profile view.',
    img: '/Megit_website/screenshots/dashboard.jpg',
    reverse: false
  },
  {
    icon: Headphones,
    title: 'Hi-Fi Streaming & Crossfade',
    text: 'Choose from Low, Normal, High, or Automatic streaming quality. The crossfade slider gives you gapless transitions between tracks.',
    img: '/Megit_website/screenshots/settings.jpg',
    reverse: true
  }
]

const grid = [
  { icon: Music, title: 'YouTube Music', desc: 'Vast catalog of millions of tracks' },
  { icon: Wifi, title: 'Offline Downloads', desc: 'Listen without an internet connection' },
  { icon: Volume2, title: 'Background Playback', desc: 'Keep listening while you do anything' },
  { icon: Layers, title: 'Queue Management', desc: 'Up Next drawer for full queue control' },
  { icon: Heart, title: 'Favorites', desc: 'One-tap heart icon to save tracks' },
  { icon: Zap, title: 'Data Saver', desc: 'Stream lighter on cellular networks' },
  { icon: Shield, title: 'Open Source', desc: 'MIT licensed. Inspect every line.' },
  { icon: Sparkles, title: 'Glassmorphic UI', desc: 'Modern, minimal, beautifully smooth' }
]

export default function Features() {
  return (
    <PageWrapper>
      <BackgroundFX />

      <section className="section-padding">
        <div className="container-max text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-brand-purple font-semibold inline-block"
          >Features</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold"
          >
            Designed for <span className="gradient-text">how you listen.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Every Megit feature is built to disappear into the music — no clutter, just flow.
          </motion.p>
        </div>

        <div className="container-max space-y-24">
          {detail.map((d, i) => (
            <div
              key={d.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${d.reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <motion.div
                initial={{ opacity: 0, x: d.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                  <d.icon className="w-4 h-4 text-brand-purple" />
                  <span className="text-sm font-semibold">{`0${i + 1}`.slice(-2)}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">{d.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{d.text}</p>
              </motion.div>
              <PhoneMockup src={d.img} delay={0.1} />
            </div>
          ))}
        </div>
      </section>

      {/* Feature grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">And so much more</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {grid.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card text-center hover:scale-105"
              >
                <div className="inline-grid place-items-center w-12 h-12 rounded-xl gradient-bg-purple mb-3 mx-auto">
                  <g.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold mb-1.5 text-sm sm:text-base">{g.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
