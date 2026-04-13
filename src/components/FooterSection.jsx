const defaultProps = {
  tagline: `We are committed to environmental
               conservation and climate-resilient
                  economic development`,
  navLinks: [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Faq's", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  businessLines: [
    { label: "Integrated Solid Waste Management", href: "#" },
    { label: "Biomass Fuel & Green Energy", href: "#" },
    { label: "Bio Gas – CBG Fuel", href: "#" },
  ],
  officeAddress: {
    lines: [
      "Juhu Tara Rd, Uditi Tarang Housing Colony,",
      "Juhu Tara, Juhu,",
      "Mumbai, Maharashtra 400049, India",
    ],
    email: "Example@gmail.com",
    phone: "+91 8554865952",
  },
  plantAddress: {
    lines: [
      "Sahar Airport Road, Andheri - Kurla Rd, near Mumbai International Airport,",
      "Andheri East, Mumbai, Maharashtra 400059, India",
    ],
    email: "Example@gmail.com",
    phone: "+91 8554865952 / 8554865952",
  },
  whatsappHref: "#",
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
  year: 2025,
};

export default function FooterSection(props) {
  const {
    tagline,
    navLinks,
    businessLines,
    officeAddress,
    plantAddress,
    whatsappHref,
    year,
  } = { ...defaultProps, ...props };

  return (
    <footer
      className="max-w-6xl m-auto bg-[#f3f3f3] text-[#1a1a1a] rounded-t-4xl"
      style={{ fontFamily: "Helvetica Neue, sans-serif" }}
    >
      {/* Top CTA strip */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 sm:py-14 flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-16 ">
        {/* Heading + Email */}
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight mb-6 max-w-xs">
            Key Takeaways and
            <br />
            Next Steps
          </h2>
          <form
            className="flex items-center gap-0 max-w-sm"
            aria-label="Subscribe to newsletter"
          >
            <div className="flex flex-1 items-center bg-white rounded-full border border-gray-200 overflow-hidden shadow-sm pr-1">
              <label htmlFor="footer-email" className="sr-only">
                Email Address
              </label>
              <div className="flex flex-col flex-1 px-4 py-1.5">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="name@example.com"
                  className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
                  aria-required="true"
                />
              </div>
              <button
                type="submit"
                className="bg-[#2d7a3a] hover:bg-[#236130] transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-full flex-shrink-0"
                aria-label="Send email"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Tagline */}
        <p
          className="sm:max-w-xs text-sm sm:text-base text-gray-600 lg:text-justify
        ` md:text-center leading-relaxed sm:pt-16 "
          style={{ fontFamily: "Helvetica Neue, sans-serif" }}
        >
          {tagline}
        </p>
      </div>
      <hr className="border-gray-300 mx-6 sm:mx-10" />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {/* Navigate */}
        <nav aria-label="Footer navigation">
          <p className="text-xs text-gray-400 font-medium mb-4 tracking-wide">
            Navigate to
          </p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm sm:text-base font-medium text-gray-800 hover:text-[#2d7a3a] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Business Lines */}
        <nav aria-label="Business lines">
          <p className="text-xs text-gray-400 font-medium mb-4 tracking-wide">
            Our Business Lines
          </p>
          <ul className="space-y-3">
            {businessLines.map((line) => (
              <li key={line.label}>
                <a
                  href={line.href}
                  className="text-sm sm:text-base font-bold text-gray-900 hover:text-[#2d7a3a] transition-colors leading-snug block"
                >
                  {line.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Office Address */}
        <address className="not-italic">
          <p className="text-xs text-gray-400 font-medium mb-4 tracking-wide">
            Office Address
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {officeAddress.lines.join(" ")}
          </p>
          <a
            href={`mailto:${officeAddress.email}`}
            className="text-sm text-gray-700 hover:text-[#2d7a3a] transition-colors block mb-1"
          >
            {officeAddress.email}
          </a>
          <a
            href={`tel:${officeAddress.phone.replace(/\s/g, "")}`}
            className="text-sm text-gray-700 hover:text-[#2d7a3a] transition-colors block"
          >
            {officeAddress.phone}
          </a>
        </address>

        {/* Plant Address */}
        <div className="relative">
          <p className="text-xs text-gray-400 font-medium mb-4 tracking-wide">
            Plant Address
          </p>

          {/* WhatsApp + Scroll-to-top icons */}
          <div className="absolute top-0 right-0 flex flex-col gap-2 items-end">
            <a
              href={whatsappHref}
              aria-label="Contact via WhatsApp"
              className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow hover:scale-105 transition-transform"
            >
              {/* WhatsApp SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <button
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-[#3a3a3a] flex items-center justify-center shadow hover:bg-[#2d7a3a] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>

          <address className="not-italic">
            <p className="text-sm font-semibold text-gray-900 leading-relaxed mb-3 pr-12">
              {plantAddress.lines.join(" ")}
            </p>
            <a
              href={`mailto:${plantAddress.email}`}
              className="text-sm text-gray-700 hover:text-[#2d7a3a] transition-colors block mb-1"
            >
              {plantAddress.email}
            </a>
            <a
              href={`tel:${plantAddress.phone.split(" / ")[0].replace(/\s/g, "")}`}
              className="text-sm text-gray-700 hover:text-[#2d7a3a] transition-colors block"
            >
              {plantAddress.phone}
            </a>
          </address>
        </div>
      </div>

      <hr className="border-gray-300 mx-6 sm:mx-10" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-800 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Privacy Policy
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Social icons */}
          <div
            className="flex items-center gap-3"
            aria-label="Social media links"
          >
            <a
              aria-label="Facebook"
              className="w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              aria-label="Instagram"
              className="w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              aria-label="X / Twitter"
              className="w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#2d7a3a] hover:text-[#2d7a3a] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <span>© {year}. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
