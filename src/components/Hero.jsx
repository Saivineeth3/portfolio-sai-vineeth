import { motion } from 'framer-motion';

const skills = ['Python', 'SQL', 'Excel', 'Power BI', 'Pandas', 'NumPy', 'Data Visualization', 'AI Tools'];

// You can replace this URL with your own profile image path later
const profileImagePath = "/profile.jpg";
export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-16">
        
        {/* LEFT COLUMN: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[40%] relative flex justify-center"
        >
          {/* Soft background glow */}
          <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full z-0 pointer-events-none"></div>
          
          {/* Premium rounded card with yellow glowing border */}
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[450px] rounded-[2rem] border-2 border-accent/60 shadow-[0_0_40px_rgba(255,223,0,0.3)] overflow-hidden glass-card glow-hover">
            <img 
              src={profileImagePath} 
              alt="Sai Vineeth" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Text and Skills */}
        <div className="w-full lg:w-[60%] text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8"
          >
            Sai Vineeth<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted leading-relaxed mb-12 max-w-2xl"
          >
            I’m a detail-oriented <span className="text-white font-medium">Data Analyst</span> aspirant and B.Tech CSE-AI student at KIET. 
            I specialize in data cleaning, visualization, and business intelligence — transforming datasets into clear, actionable stories using Python, SQL, Excel, and Power BI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05, borderColor: '#ffdf00', color: '#ffdf00' }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-muted transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
