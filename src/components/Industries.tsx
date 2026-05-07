"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Pill,
  Wrench,
  Package,
  ShoppingBag,
  Utensils,
  Stethoscope,
  BookOpen,
  Monitor,
} from "lucide-react"

const INDUSTRIES = [
  {
    name: "Farmacias",
    icon: Pill,
    desc: "Stock de medicamentos en tiempo real",
  },
  {
    name: "Ferreterías",
    icon: Wrench,
    desc: "Disponibilidad de materiales y herramientas",
  },
  {
    name: "Distribuidoras",
    icon: Package,
    desc: "Pedidos y consultas de catálogo",
  },
  {
    name: "Tiendas de ropa",
    icon: ShoppingBag,
    desc: "Talles, colores y disponibilidad",
  },
  {
    name: "Restaurantes",
    icon: Utensils,
    desc: "Menú del día y disponibilidad de platos",
  },
  {
    name: "Veterinarias",
    icon: Stethoscope,
    desc: "Medicamentos y disponibilidad de turnos",
  },
  {
    name: "Librerías",
    icon: BookOpen,
    desc: "Títulos, ediciones y materiales escolares",
  },
  {
    name: "Electrónica",
    icon: Monitor,
    desc: "Modelos, garantías y stock de equipos",
  },
]

export default function Industries() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="industrias"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Para cualquier{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              tipo de negocio
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            NexoBot arrancó pensado para farmacias, pero hoy sirve para cualquier
            negocio que gestione stock y consultas de clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 text-center transition-all hover:bg-slate-900/80 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 flex items-center justify-center mx-auto mb-3 transition-colors">
                <industry.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-white font-medium text-sm mb-1">
                {industry.name}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
