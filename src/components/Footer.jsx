import { FaDownload } from "react-icons/fa";

const Footer = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Kashif_Khan_CV.pdf";
    link.click();
  };

  return (
    <footer className="py-6 bg-white dark:bg-black text-slate-900 dark:text-white text-center border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <p>
        © 2026 Kashif Khan |
        <button onClick={downloadCV} className="ml-2 hover:text-blue-400">
          <FaDownload className="inline mr-1" /> Download CV
        </button>
      </p>
    </footer>
  );
};

export default Footer;



