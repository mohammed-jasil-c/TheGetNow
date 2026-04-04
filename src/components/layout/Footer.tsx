import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#06080F] border-t border-[#1E2A3A] pt-0">
      
      {/* Top Strip - Newsletter */}
      <div className="bg-[#0A0D16] border-b border-[#1E2A3A]">
        <div className="max-w-[1400px] mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Curve</h3>
            <p className="text-[#6B7A99]">Get our weekly insights on AI, Web3, and mobile dev. 12K+ subscribers.</p>
          </div>
          <form className="flex w-full md:w-auto overflow-hidden rounded-full">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="bg-[#0D1117] border border-[#1E2A3A] border-r-0 text-white px-6 py-[14px] w-full md:w-80 outline-none focus:border-[#0057FF]/50 rounded-l-full placeholder:text-[#4A5568]"
              required
            />
            <button type="submit" className="bg-gradient-to-r from-[#0057FF] to-[#7B2FFF] text-white font-semibold px-7 py-[14px] rounded-r-full hover:brightness-110 transition-all shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12">
        
        {/* Column 1 - Brand */}
        <div>
          <div className="flex flex-col items-start mb-6">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="url(#footer-logo-grad)"/>
                <defs><linearGradient id="footer-logo-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#0057FF" /><stop offset="1" stopColor="#7B2FFF" /></linearGradient></defs>
              </svg>
              <span className="font-heading font-bold text-xl text-white tracking-tight">TheGetNow</span>
            </div>
          </div>
          
          <p className="text-[#6B7A99] font-medium text-sm mb-4">Engineering Digital Excellence Since 2012</p>
          <p className="text-[#6B7A99] text-sm leading-relaxed mb-6">
            We build world-class mobile apps, web platforms, and emerging tech solutions for startups and enterprises globally.
          </p>
          
          <div className="flex gap-3 mb-8">
            {['linkedin', 'twitter', 'instagram', 'github', 'youtube', 'dribbble'].map(social => (
              <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full border border-[#1E2A3A] flex items-center justify-center text-[#6B7A99] hover:border-[#0057FF] hover:bg-[#0057FF]/10 hover:text-white transition-all group">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </a>
            ))}
          </div>
          
          <div className="space-y-2 text-[#4A5568] text-xs">
            <p className="flex items-center gap-2"><span>📍</span> Mohali, India (HQ)</p>
            <p className="flex items-center gap-2"><span>📍</span> New York, USA</p>
            <p className="flex items-center gap-2"><span>📍</span> Dubai, UAE</p>
            <p className="flex items-center gap-2"><span>📍</span> Toronto, Canada</p>
            <p className="flex items-center gap-2 mt-4 text-white"><span>📞</span> (+1) 628 432 4305</p>
            <p className="flex items-center gap-2 text-white"><span>✉️</span> contact@thegetnow.com</p>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h4 className="text-[#6B7A99] text-xs uppercase tracking-widest font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            {['Mobile App Development', 'Web Development', 'AI & ML Development', 'Blockchain Development', 'IoT Development', 'Game Development', 'UI/UX Design', 'Cloud Solutions'].map(link => (
              <li key={link}><Link href="#" className="text-[#A0AEC0] text-sm hover:text-white hover:translate-x-1 transition-all inline-block">{link}</Link></li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Industries */}
        <div>
          <h4 className="text-[#6B7A99] text-xs uppercase tracking-widest font-bold mb-6">Industries</h4>
          <ul className="space-y-4">
            {['Healthcare', 'FinTech', 'EdTech', 'E-Commerce', 'Logistics', 'Real Estate', 'Food & Delivery', 'Travel & Tourism'].map(link => (
              <li key={link}><Link href="#" className="text-[#A0AEC0] text-sm hover:text-white hover:translate-x-1 transition-all inline-block">{link}</Link></li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Company */}
        <div>
          <h4 className="text-[#6B7A99] text-xs uppercase tracking-widest font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            {['About Us', 'Our Team', 'Portfolio', 'Case Studies', 'Awards', 'Blog', 'Press & Media'].map(link => (
              <li key={link}><Link href="#" className="text-[#A0AEC0] text-sm hover:text-white hover:translate-x-1 transition-all inline-block">{link}</Link></li>
            ))}
            <li>
              <Link href="#" className="text-[#A0AEC0] text-sm hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                Careers <span className="bg-[#0D1117] border border-[#1E2A3A] px-2 py-0.5 rounded text-[10px] text-[#00D4FF]">We're Hiring!</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5 - Resources */}
        <div>
          <h4 className="text-[#6B7A99] text-xs uppercase tracking-widest font-bold mb-6">Resources</h4>
          <ul className="space-y-4">
            {['Documentation', 'Whitepapers', 'Free Consultation', 'Cost Calculator', 'Tech Blog', 'Newsletter', 'Partner Program', 'Status Page'].map(link => (
              <li key={link}><Link href="#" className="text-[#A0AEC0] text-sm hover:text-white hover:translate-x-1 transition-all inline-block">{link}</Link></li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E2A3A]">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#4A5568] text-[13px]">© 2025 TheGetNow. All rights reserved.</p>
          <p className="text-[#4A5568] text-xs">🇮🇳 Made with ❤️ in India, Built for the World</p>
          <div className="flex items-center text-[#4A5568] text-[13px]">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <span className="mx-2">·</span>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <span className="mx-2">·</span>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
