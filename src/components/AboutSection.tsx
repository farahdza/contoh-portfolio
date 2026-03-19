import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [open, setOpen] = useState<string | null>(null);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
    { icon: Rocket, value: '5+', label: 'Tahun Pengalaman' },
  ];

  const sections = [
    {
      title: 'Tentang Saya',
      content:
        'Hi, my name is Farah Dzakirah Fahri, but you can call me Farah. I am a beginner web developer who is passionate about technology and web development. I enjoy learning new things and building simple web applications.',
    },
    {
      title: 'Karakter & Sikap',
      content:
        'Saya adalah pribadi yang disiplin, bertanggung jawab, dan selalu ingin berkembang. Saya suka belajar hal baru, mudah beradaptasi, dan memiliki semangat tinggi dalam menyelesaikan pekerjaan.',
    },
    {
      title: 'Tujuan & Visi',
      content:
        'Tujuan saya adalah menjadi seorang web developer profesional yang mampu menciptakan website yang bermanfaat dan user-friendly. Saya ingin terus berkembang dan berkontribusi dalam dunia teknologi.',
    },
  ];

  const toggle = (title: string) => {
    setOpen(open === title ? null : title);
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Tentang Saya
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="aspect-square rounded-2xl overflow-hidden glass shadow-card"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <span className="text-8xl">👩‍💻</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT + ACCORDION */}
          <div className="space-y-4">

            {sections.map((sec, index) => (
              <div key={index} className="border rounded-xl overflow-hidden">

                {/* HEADER */}
                <button
                  onClick={() => toggle(sec.title)}
                  className="w-full flex justify-between items-center p-4 bg-white/50 hover:bg-white/70 transition"
                >
                  <span className="font-semibold">{sec.title}</span>

                  <motion.div
                    animate={{ rotate: open === sec.title ? 180 : 0 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                {/* CONTENT */}
                <AnimatePresence>
                  {open === sec.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden px-4 pb-4"
                    >
                      <p className="text-muted-foreground">
                        {sec.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 glass rounded-xl text-center"
                >
                  <stat.icon className="mx-auto mb-2 text-primary" />
                  <p className="font-bold text-xl">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}