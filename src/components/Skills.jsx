import { motion } from 'framer-motion';

const skills = [
  'Python', 'SQL', 'Excel', 'Power BI', 'Pandas', 'NumPy', 
  'Data Cleaning', 'EDA', 'Statistics', 'Matplotlib', 'Seaborn', 
  'MySQL', 'Databases', 'Git', 'Jupyter', 'CSV', 'JSON', 'APIs', 
  'Visualization', 'Reporting', 'Analytics', 'Dashboards', 
  'Machine Learning', 'Deep Learning', 'Business Intelligence', 
  'Kaggle', 'Portfolio'
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Technologies I Work With
        </motion.h2>
      </div>

      <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center">
        {/* Center Profile Placeholder */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, duration: 1 }}
          className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-accent shadow-[0_0_50px_rgba(255,223,0,0.3)] bg-white/5 backdrop-blur-md flex items-center justify-center overflow-hidden"
        >
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tighter text-white">
              Sai<span className="text-accent">.</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted mt-2">Data Analyst</div>
          </div>
        </motion.div>

        {/* Orbit Rings */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/5 border-dashed rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full border border-white/5 border-dashed rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/5 border-dashed rounded-full hidden md:block"></div>
        </div>

        {/* Floating Skills */}
        <div className="absolute inset-0 z-10">
          {skills.map((skill, index) => {
            // Distribute items roughly in concentric circles
            const ring = index < 8 ? 1 : index < 18 ? 2 : 3;
            const radius = ring === 1 ? (window.innerWidth < 768 ? 150 : 200) : 
                           ring === 2 ? (window.innerWidth < 768 ? 225 : 300) : 400;
            const itemsInRing = ring === 1 ? 8 : ring === 2 ? 10 : 9;
            const angle = (index % itemsInRing) * (Math.PI * 2 / itemsInRing) + (ring * 0.5);
            
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            // Randomize animation delay and duration for organic feel
            const animDuration = 4 + Math.random() * 4;
            const animDelay = Math.random() * 2;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                whileInView={{ opacity: 1, x, y, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05, type: 'spring' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: animDuration, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: animDelay,
                    ease: "easeInOut"
                  }}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-background/80 backdrop-blur-sm text-xs md:text-sm whitespace-nowrap ${
                    ring === 1 ? 'text-white font-medium border-white/20' : 
                    ring === 2 ? 'text-white/80' : 'text-white/60 hidden md:block'
                  } hover:border-accent hover:text-accent hover:scale-110 transition-all cursor-default shadow-lg`}
                >
                  {skill}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
