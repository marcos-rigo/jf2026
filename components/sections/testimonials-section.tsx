"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, Users } from "lucide-react"

const testimonials = [
  {
    image: "/img/comunidad/2.png",
    name: "Alejandro Nató",
    role: "Abogado y Procurador",
    quote: "Participa en intervenciones desde el inicio de la pandemia, demostrando un compromiso constante con la innovación ciudadana y la participación democrática.",
  },
  {
    image: "/img/comunidad/3.png",
    name: "Margarita Heinz",
    role: "Consejera de la Dirección de Adultos Mayores",
    quote: "Su trabajo en la promoción de la ciudadanía digital ha sido transformador, especialmente en la inclusión de adultos mayores en el entorno tecnológico.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-light-blue to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/10 text-brand-pink text-sm font-medium rounded-full mb-4">
            <Users className="w-4 h-4" />
            Comunidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Testimonios
          </h2>
          <p className="text-lg text-brand-navy/60 max-w-2xl mx-auto">
            Voces de la comunidad que acompañan este camino
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-brand-navy/5 border border-brand-blue/10 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-300 hover:-translate-y-1">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-brand-pink/30 mb-4" />
                
                {/* Quote Text */}
                <p className="text-brand-navy/80 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-blue/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">{testimonial.name}</h4>
                    <p className="text-brand-navy/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Decorative Gradient Line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-brand-pink to-brand-blue opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
