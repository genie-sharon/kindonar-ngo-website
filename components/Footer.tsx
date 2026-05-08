import React from "react";
import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-warm-rose-mist/30 border-t border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-elegant-rose" fill="currentColor" />
              <span className="clamp-text-xl font-bold text-rich-cocoa">Kindonar</span>
            </div>
            <p className="text-soft-mauve-gray text-sm">Premium humanitarian organization using immersive storytelling to drive global change.</p>
          </div>

          <div>
            <h3 className="font-bold text-rich-cocoa mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[{ href: "/", label: "Home" }, { href: "/programs", label: "Programs" }, { href: "/about", label: "Impact" }, { href: "/donate", label: "Donate" }].map((link) => (
                <li key={link.href}><Link href={link.href} className="text-soft-mauve-gray hover:text-elegant-rose text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-rich-cocoa mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-soft-mauve-gray">
              <li className="flex items-center gap-2"><Mail size={16} /><span>hello@kindonar.org</span></li>
              <li className="flex items-center gap-2"><Phone size={16} /><span>+1 (555) 123-4567</span></li>
              <li className="flex items-center gap-2"><MapPin size={16} /><span>123 Compassion Way, Geneva</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-rich-cocoa mb-4">Newsletter</h3>
            <p className="text-soft-mauve-gray text-sm mb-4">Join our community of changemakers</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-full bg-white/70 border border-white/30 focus:outline-none focus:border-elegant-rose text-sm" />
              <button className="magnetic-button text-sm px-6 py-3">Join</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
