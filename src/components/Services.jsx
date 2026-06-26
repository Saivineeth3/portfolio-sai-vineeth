import { motion } from 'framer-motion';
import { LayoutDashboard, BarChart3, FileSearch } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <LayoutDashboard className="w-10 h-10 text-accent" />,
      title: 'Dashboard Development',
      bullets: [
        'Interactive Slicers & Filters',
        'KPI Tracking',
        'Real-time Data Connection',
        'Custom Visualizations',
        'Export & Sharing',
      ],
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-accent" />,
      title: 'Data Visualization',
      bullets: [
        'Charts & Graphs',
        'Dashboard Layouts',
        'Business Reports',
        'Power BI Visuals',
        'Insights Presentation',
      ],
    },
    {
      icon: <FileSearch className="w-10 h-10 text-accent" />,
      title: 'Data Analysis Reports',
      bullets: [
        'Exploratory Data Analysis',
        'Trend & Pattern Recognition',
        'Statistical Summaries',
        'Business Recommendations',
        'Automated Reporting',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg max-w-2xl mx-auto"
        >
          Delivering data-driven solutions and actionable insights
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ rotateX: 5, rotateY: 5, scale: 1.03 }}
            className="glass-card p-8 border border-white/10 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(255,223,0,0.15)] transition-all duration-300 perspective-[1000px] flex flex-col h-full"
          >
            <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
            
            <ul className="space-y-4 flex-grow">
              {service.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start text-muted text-sm">
                  <span className="text-accent mr-3 mt-0.5">✦</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
