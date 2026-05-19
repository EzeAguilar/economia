"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"

export default function ContactCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-emerald-950/50 to-slate-900/80 border border-emerald-500/20 rounded-3xl p-10 sm:p-16 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/12 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mx-auto mb-7 shadow-xl shadow-emerald-500/30">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="text-slate-400 text-lg mb-9 max-w-xl mx-auto leading-relaxed">
              Contanos cómo trabaja tu negocio y te decimos cuál es la mejor
              solución. Sin compromiso, sin costo.
            </p>

            <a
              href="#en-desarrollo"
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all hover:shadow-2xl hover:shadow-emerald-500/30 group text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Escribinos por WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-slate-600 text-sm mt-5">
              Respondemos en menos de 24 horas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
