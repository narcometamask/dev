import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-flex items-center gap-1 mb-4">
              <span className="text-amber-500 font-heading font-bold text-xl tracking-tight">A2Z</span>
              <span className="text-white font-heading font-medium text-xl tracking-tight">BuildCare</span>
              <span className="text-grey-400 font-heading text-[10px] font-medium ml-0.5 self-start mt-1">LTD</span>
            </Link>
            <p className="text-grey-400 text-sm leading-relaxed mb-4">
              Building Dreams with Precision Since 2015. London's trusted residential construction specialists.
            </p>
            <div className="flex gap-4">
              /* {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))} */
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading font-semibold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Projects', path: '/projects' },
                { label: 'Process', path: '/process' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-grey-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-heading font-semibold text-lg mb-4">Our Services</h5>
            <ul className="space-y-3">
              {[
                { label: 'Residential Construction', path: '/services' },
                { label: 'Renovation & Remodeling', path: '/services' },
                { label: 'Interior Finishing', path: '/services' },
                { label: 'Turnkey Projects', path: '/services' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-grey-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading font-semibold text-lg mb-4">Get In Touch</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <a href="tel:+447775375757" className="text-grey-400 hover:text-white text-sm transition-colors">
                  +44 7775 375757
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <a href="mailto:labheshjapanchal@gmail.com" className="text-grey-400 hover:text-white text-sm transition-colors">
                  labheshjapanchal@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-grey-400 text-sm">
                  173 Shakespeare Crescent,<br />London, E12 6NA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-grey-400 text-xs">
            &copy; 2025 A2Z BuildCare LTD. All rights reserved.
          </p>
          <p className="text-grey-400 text-xs">Registered in England &amp; Wales</p>
          <div className="flex gap-4 text-grey-400 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
