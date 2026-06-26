import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Trophy } from 'lucide-react';

export default function Education() {
  const cards = [
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      label: 'DEGREE',
      title: 'B.Tech in Computer Science & Engineering (AI)',
      details: 'Kakinada Institute of Engineering and Technology (KIET)',
      meta: 'Aug 2023 – Aug 2027',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      label: 'FOCUS AREAS',
      title: 'Data Analytics & AI',
      details: 'Specializing in data analysis, business intelligence, machine learning fundamentals, and AI-driven problem solving.',
      meta: '',
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      label: 'HIGHLIGHTS',
      title: 'Key Achievements',
      details: 'Practiced SQL queries, Python, Excel reporting, and dashboard development. Participated in AI and Data Analytics learning programs.',
      meta: 'Building skills in Power BI, Pandas, NumPy, and statistics.',
    },
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg max-w-2xl mx-auto"
        >
          Building a strong foundation in technology and data science
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card glow-hover p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              {card.icon}
            </div>
            <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 border border-white/10">
              {card.icon}
            </div>
            <div className="text-xs font-bold tracking-widest text-accent mb-2">
              {card.label}
            </div>
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {card.details}
            </p>
            {card.meta && (
              <p className="text-xs text-white/50 font-medium">
                {card.meta}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
