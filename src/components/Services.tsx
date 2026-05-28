"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { PACKAGES } from "@/lib/constants"

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Elegí el plan{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              que te corresponde
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cada negocio es diferente. Tenemos una solución para cada etapa de
            tu desarrollo tecnológico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl border p-7 flex flex-col transition-all ${
                pkg.highlight
                  ? "bg-emerald-950/30 border-emerald-500/40 shadow-2xl shadow-emerald-500/10"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  Más elegido
                </div>
              )}

              <div className="mb-7">
                <h3 className="text-white font-bold text-2xl mb-1">
                  {pkg.name}
                </h3>
                <p className="text-emerald-400 text-sm font-medium mb-4">
                  {pkg.tagline}
                </p>

                <div className={`rounded-xl p-4 mb-4 ${pkg.highlight ? "bg-emerald-950/40 border border-emerald-500/20" : "bg-slate-800/40 border border-slate-700/50"}`}>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-slate-400 text-xs">ARS</span>
                    <span className="text-white font-bold text-3xl">
                      {pkg.initialPrice.toLocaleString("es-AR")}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs mb-3">costo inicial</p>
                  <div className="border-t border-slate-700/50 pt-3 flex items-baseline gap-1">
                    <span className="text-slate-400 text-xs">ARS</span>
                    <span className="text-slate-300 font-semibold text-lg">
                      {pkg.monthlyPrice.toLocaleString("es-AR")}
                    </span>
                    <span className="text-slate-500 text-xs">/mes mantenimiento</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#en-desarrollo"
                className={`block text-center font-semibold px-6 py-3 rounded-xl transition-all text-sm ${
                  pkg.highlight
                    ? "bg-emerald-500 hover:bg-emerald-400 text-white hover:shadow-lg hover:shadow-emerald-500/25"
                    : "border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {pkg.cta} →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          ¿No sabés cuál elegir? Escribinos y te asesoramos sin costo.
        </motion.p>
      </div>
    </section>
  )
}
