"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, PhoneMissed, TrendingDown } from "lucide-react"

const PAIN_POINTS = [
  {
    icon: Clock,
    title: "Consultas a toda hora",
    description:
      "Tus clientes preguntan por disponibilidad a las 23hs, los fines de semana, en feriados. Y esperan respuesta.",
  },
  {
    icon: PhoneMissed,
    title: "No podés responder siempre",
    description:
      "El WhatsApp del negocio se llena de mensajes sin leer. Cada consulta sin respuesta es un cliente que se va.",
  },
  {
    icon: TrendingDown,
    title: "Ventas perdidas",
    description:
      "Sin info, el cliente compra en otro lado. Una respuesta a tiempo es la diferencia entre vender o no.",
  },
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            El problema que{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              todos conocen
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Gestionar consultas manualmente es lento, agotador y costoso. El
            tiempo que pasás respondiendo mensajes podría estar en otra cosa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all hover:bg-slate-900/60"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                <point.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {point.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
