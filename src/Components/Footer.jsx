import XIcon from "../assets/X-icon.png";
import FacebookIcon from "../assets/Facebook.png";
import LinkedinIcon from "../assets/Linkdin.png";
import EmailIcon from "../assets/Mail.png";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      {/* Main content */}
      <div className="footer px-4 py-10 max-w-7xl mx-auto footer-vertical lg:footer-horizontal gap-8 lg:gap-12">
        
        {/* Column 1 - Brand / Description */}
        <aside className="lg:w-80">
          <h2 className="footer-title text-xl lg:text-2xl mb-3">
            CS — Ticket System
          </h2>
          <p className="max-w-xs text-neutral-content/80 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </aside>

        {/* Column 2 - Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover link-neutral cursor-pointer">
            About Us
          </a>
          <a className="link link-hover link-neutral cursor-pointer">
            Our Mission
          </a>
          <a className="link link-hover link-neutral cursor-pointer">
            Contact Sales
          </a>
          <a className="link link-hover link-neutral cursor-pointer">
            Join Us
          </a>
        </nav>

        {/* Column 3 - Services */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover link-neutral cursor-pointer">
            Products & Services
          </a>
          <a className="link link-hover link-neutral cursor-pointer">
            Customer Stories
          </a>
          <a className="link link-hover link-neutral cursor-pointer">
            Download Apps
          </a>
        </nav>

        {/* Column 4 - Info + Social */}
        <div>
          <nav className="mb-6">
            <h6 className="footer-title">Information</h6>
            <a className="link link-hover link-neutral cursor-pointer">
              Privacy Policy
            </a>
            <a className="link link-hover link-neutral cursor-pointer">
              Terms & Conditions
            </a>
          </nav>

          <div>
            <h6 className="footer-title">Social Links</h6>

            <div className="flex gap-6 mt-4">
              <a
                href="#"
                aria-label="X (Twitter)"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={XIcon}
                  alt="X (Twitter)"
                  className="w-6 h-6"
                />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={LinkedinIcon}
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>

              <a
                href="mailto:support@cst.com"
                aria-label="Email support"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={EmailIcon}
                  alt="Email"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 bg-neutral-focus py-5 border-t border-gray-500  text-center text-sm text-neutral-content/60">
        <div className="max-w-7xl mx-auto px-6">
          © 2025 CS — Ticket System. All rights reserved.
          <span className="hidden md:inline mx-4">|</span>
          <span>support@cst.com</span>
        </div>
      </div>
    </footer>
  );
}