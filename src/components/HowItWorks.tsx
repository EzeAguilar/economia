"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Bot, Share2 } from "lucide-react"

const STEPS = [
  {
    icon: Search,
    title: "Analizamos tu negocio",
    description:
      "Entendemos cómo trabajás hoy: qué sistema usás, qué preguntan tus clientes, y cuál es el plan más adecuado para vos.",
  },
  {
    icon: Bot,
    title: "Configuramos tu bot",
    description:
      "Diseñamos y programamos el bot con tu catálogo, tus respuestas y tu identidad de marca. Lo conectamos a tu base de datos si es necesario.",
  },
  {
    icon: Share2,
    title: "Lo integramos a tus redes",
    description:
      "Conectamos el bot a tu WhatsApp Business e Instagram. Desde ese momento, responde automáticamente las 24 horas.",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cómo{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              funciona
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tres pasos simples para que tu negocio empiece a responder solo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Decorative connecting line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0" />
          </div>

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-7">
                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-emerald-500/40 transition-colors">
                  <step.icon className="w-9 h-9 text-emerald-400" />
                </div>
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/30">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
