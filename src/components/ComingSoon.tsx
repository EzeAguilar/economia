"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock } from "lucide-react"

export default function ComingSoon() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="en-desarrollo" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/8 rounded-full blur-3xl" />
          </div>

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-full px-4 py-1.5 mb-8">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-medium tracking-wide uppercase">
              En construcción
            </span>
          </div>

          {/* Main card */}
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-slate-700/50 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-emerald-500/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-emerald-500/20 rounded-br-3xl" />

            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-8"
            >
              <span className="text-4xl">🤖</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-3"
            >
              NexoBot{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                todavía está en desarrollo
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            >
              Estamos trabajando para lanzar el producto. Si querés ser de los primeros en probarlo o tenés alguna consulta, escribinos directamente.
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-10"
            >
              <div className="flex justify-between text-xs text-slate-500 mb-2">
                <span>Progreso del desarrollo</span>
                <span className="text-emerald-400 font-medium">En curso</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "60%" } : {}}
                  transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
