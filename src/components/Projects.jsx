import { motion } from "framer-motion";

const projects = [
  {
    img: "tripsy.PNG",
    title: "Tripsy Website",
    tech: "React.js, Tailwind CSS, Zustand",
    desc: "Practice-based travel website built during EncoderBytes training.",
    link: "https://tripsiy.vercel.app/", // example
  },
  {
    img: "ecommerce.PNG",
    title: "E-commerce Website",
    tech: "React.js, Tailwind, Framer Motion",
    desc: "Search, filtering, cart, wishlist & animations.",
    link: "https://ecommerce-web-design-weld.vercel.app/",
  },
  {
    img: "portfolio.PNG",
    title: "Portfolio Website",
    tech: "React.js, Tailwind CSS",
    desc: "Personal portfolio to showcase frontend skills.",
    link: "https://intern-intelligence-portfolio-delta.vercel.app/",
  },
  {
    img: "Encoder.PNG",
    title: "EncoderBytes Website",
    tech: "Next.js, Tailwind CSS",
    desc: "Homepage developed during training.",
    link: "https://encoder-byte-q6rj.vercel.app/",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-black text-white">
    <div className="container mx-auto px-6">
      <h3 className="text-4xl font-bold text-center mb-12">Projects</h3>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open(p.link, "_blank")}
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-48 w-full object-cover rounded mb-4"
            />
            <h4 className="text-2xl font-semibold text-blue-400">
              {p.title}
            </h4>
            <p className="text-gray-400 mb-2">{p.tech}</p>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

