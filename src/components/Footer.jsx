import { FaDownload } from "react-icons/fa";

const Footer = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Kashif_Khan_CV.pdf";
    link.click();
  };

  return (
    <footer className="py-6 bg-black text-white text-center">
      <p>
        © 2023 Kashif Khan |
        <button onClick={downloadCV} className="ml-2 hover:text-blue-400">
          <FaDownload className="inline mr-1" /> Download CV
        </button>
      </p>
    </footer>
  );
};

export default Footer;
