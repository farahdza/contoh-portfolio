import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'bberyysss@gmail.com',
    href: 'mailto:bberyysss@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 823-8376-3743',
    href: 'tel:+6282383763743',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Semua field harus diisi!');
      return;
    }

    const mailtoLink = `mailto:bberyysss@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Kontak</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hubungi Saya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Mari Berkolaborasi!
              </h3>
              <p className="text-muted-foreground">
                Punya project menarik? Yuk ngobrol! Saya terbuka untuk kolaborasi,
                ide kreatif, atau project baru.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:shadow-xl transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-3 rounded-lg bg-primary/10"
                  >
                    <info.icon className="h-5 w-5 text-primary" />
                  </motion.div>

                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 p-6 glass rounded-2xl shadow-lg"
            >

              <Input
                name="name"
                placeholder="Nama Anda"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                name="email"
                type="email"
                placeholder="Email Anda"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                name="subject"
                placeholder="Subjek"
                value={formData.subject}
                onChange={handleChange}
              />

              <Textarea
                name="message"
                placeholder="Tulis pesan..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />

              <motion.div whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness:300 }}>
                <Button type="submit" className="w-full rounded-full bg-pink-500 hover:bg-pink-600 text-white shadow-md hover:shadow-x1 transition-all duration-300">
                  <Send className="h-4 w-4 mr-2" />
                  Kirim Pesan
                </Button>
              </motion.div>

            </motion.form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}