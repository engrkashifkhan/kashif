import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h3 className="text-4xl font-bold text-center mb-12 text-white">
          Education
        </motion.h3>

        <motion.div className="bg-black text-white p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto">
          <h4 className="text-3xl font-semibold mb-4">BS Software Engineering</h4>
          <p className="text-gray-400 text-xl">
            Islamia College Peshawar | 2020 – 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
