import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function Projects() {
  const projectCards = [1, 2, 3];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg max-w-2xl mx-auto"
        >
          Recent work and practical applications
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectCards.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
            className="relative h-[400px] rounded-2xl border border-white/10 overflow-hidden group perspective-[1000px] glow-hover"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-dot-grid opacity-20"></div>
            
            {/* Glass Blur Overlay */}
            <div className="absolute inset-0 bg-background/40 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center z-10 transition-all duration-300 group-hover:bg-background/20 group-hover:backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-accent">
                <Lock className="w-8 h-8" />
              </div>
              <div className="text-xs font-bold tracking-widest text-accent mb-3">
                PORTFOLIO UPDATE
              </div>
              <h3 className="text-2xl font-bold mb-3">Coming Soon</h3>
              <p className="text-muted text-sm">
                Projects will be added after completion.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
