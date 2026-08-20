// import { FaDownload } from "react-icons/fa";

// const Footer = () => {
//   const downloadCV = () => {
//     const link = document.createElement("a");
//     link.href = "/CV.pdf";
//     link.download = "Kashif_Khan_CV.pdf";
//     link.click();
//   };

//   return (
//     <footer className="py-6 bg-white dark:bg-black text-slate-900 dark:text-white text-center border-t border-black/5 dark:border-white/5 transition-colors duration-300">
//       <p>
//         © 2026 Kashif Khan |
//         <button onClick={downloadCV} className="ml-2 hover:text-blue-400">
//           <FaDownload className="inline mr-1" /> Download CV
//         </button>
//       </p>
//     </footer>
//   );
// };

// export default Footer;















import React from "react";
import { FaDownload, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Kashif_Khan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 bg-white dark:bg-black text-slate-900 dark:text-white border-t border-black/5 dark:border-white/5 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* About */}
          <div>
            <h2 className="text-lg font-bold mb-3">
              Kashif Khan
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              MERN Stack Developer specializing in React.js, Node.js,
              Express.js, MongoDB, JavaScript, and modern responsive
              web application development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h2>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col gap-2 text-sm"
            >
              <a
                href="/"
                className="text-slate-500 dark:text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Home
              </a>

              <a
                href="/about"
                className="text-slate-500 dark:text-slate-400 hover:text-emerald-400 transition-colors"
              >
                About
              </a>

              <a
                href="/contact"
                className="text-slate-500 dark:text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Contact
              </a>

              <a
                href="/privacy-policy"
                className="text-slate-500 dark:text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </a>

              <button
                onClick={downloadCV}
                className="text-left text-slate-500 dark:text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <FaDownload className="inline mr-2" />
                Download CV
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h2>

            <div className="flex flex-col gap-3 text-sm">

              <a
                href="mailto:kashifkhn6464ak@gmail.com"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="Email Kashif Khan"
              >
                <FaEnvelope />
                <span>kashifkhn6464ak@gmail.com</span>
              </a>

              {/* Replace this with your real phone number */}
              <a
                href="tel:+923XXXXXXXXX"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="Call Kashif Khan"
              >
                <FaPhone />
                <span>+92 XXX XXXXXXX</span>
              </a>

              {/* Replace these URLs with your real profiles */}
              <div className="flex items-center gap-4 pt-2">

                <a
                  href="https://github.com/engrkashifkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kashif Khan on GitHub"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="YOUR_LINKEDIN_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kashif Khan on LinkedIn"
                  className="text-slate-500 hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-black/5 dark:border-white/5 text-center">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Kashif Khan. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-slate-400 dark:text-slate-600">
            MERN Stack Developer · React.js · Node.js · MongoDB
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;