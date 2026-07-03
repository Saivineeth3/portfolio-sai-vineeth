import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-scroll";

export default function Contact() {
  return (
    <footer id="contact" className="relative pt-24 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-2">
              Sai Vineeth Gandrothula
            </h2>

            <p className="text-muted mb-6">
              Data Analyst | B.Tech AI & ML
            </p>

            <div className="flex gap-4">

              <a
                href="https://www.linkedin.com/in/sai-vineeth-gandrothula-9b93862a3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-accent"
              >
                LinkedIn
              </a>

              <a
                href="mailto:saivinithgandrothula2005@gmail.com"
                className="p-2 rounded-full bg-white/5 hover:bg-accent"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/Saivineeth3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-accent"
              >
                GitHub
              </a>

            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">
              Navigation
            </h3>

            <ul className="space-y-3">
              {["about", "projects", "skills", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-accent"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:saivinithgandrothula2005@gmail.com">
                  saivinithgandrothula2005@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Kakinada, Andhra Pradesh</span>
              </div>

            </div>
          </motion.div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm">
          © 2025 Sai Vineeth Gandrothula. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}