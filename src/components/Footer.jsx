import { Link } from 'react-router-dom'
import { Mail, Github, Instagram, Twitter, MapPin, Heart } from 'lucide-react'
import Logo from './Logo.jsx'
import { SOCIAL } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-brand-purple/15 bg-gradient-to-b from-transparent to-brand-purple/5 dark:to-brand-purple/10">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo size={40} />
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Premium sound. Effortless flow. A beautifully crafted music player built with Flutter.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <MapPin className="w-3.5 h-3.5" />
              Made in India 🇮🇳
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/features" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple transition-colors">Features</Link></li>
              <li><Link to="/download" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple transition-colors">Download APK</Link></li>
              <li><a href="https://github.com/Reddirector/Megit" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple transition-colors">Source Code</a></li>
              <li><a href="https://github.com/Reddirector/Megit/releases" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple transition-colors">Releases</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple transition-colors">Terms of Service</Link></li>
              <li><Link to="/google-disclosure" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple transition-colors">Google API Disclosure</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-brand-purple transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex flex-wrap gap-2">
              <a href={`mailto:${SOCIAL.email}`} aria-label="Email" className="p-2.5 rounded-full glass hover:scale-110 hover:bg-brand-purple/20 transition-all" title="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-full glass hover:scale-110 hover:bg-brand-purple/20 transition-all" title="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 rounded-full glass hover:scale-110 hover:bg-brand-purple/20 transition-all" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="p-2.5 rounded-full glass hover:scale-110 hover:bg-brand-purple/20 transition-all" title="X / Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <a href={`mailto:${SOCIAL.email}`} className="block mt-4 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-purple transition-colors break-all">
              {SOCIAL.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-purple/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Megit. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 fill-brand-purple text-brand-purple" /> in India
          </p>
        </div>
      </div>
    </footer>
  )
}
