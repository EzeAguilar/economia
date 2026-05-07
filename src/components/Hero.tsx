"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/constants"

const CHAT_MESSAGES = [
  { from: "user", text: "Tienen ibuprofeno 400mg?" },
  {
    from: "bot",
    text: "¡Hola! 👋 Sí, tenemos Ibuprofeno 400mg disponible.\n¿Cuántas cajas necesitás?",
  },
  { from: "user", text: "¿Cuánto sale?" },
  {
    from: "bot",
    text: "Ibuprofeno 400mg x 20 comp. → $1.250 💊\n¿Querés que te reserve?",
  },
  { from: "user", text: "Sí, reserve 2 por favor" },
  {
    from: "bot",
    text: "✅ Reserva registrada.\nPodés pasar a retirar cuando quieras.",
  },
]

export default function Hero() {
  const [visibleMessages, setVisibleMessages] = useState(0)

  useEffect(() => {
    if (visibleMessages >= CHAT_MESSAGES.length) return
    const delay = visibleMessages === 0 ? 800 : 1300
    const timer = setTimeout(() => setVisibleMessages((v) => v + 1), delay)
    return () => clearTimeout(timer)
  }, [visibleMessages])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-teal-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center py-20">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-3 py-1 mb-7">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">
                Automatización inteligente para negocios
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tu negocio{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                siempre disponible
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-9 max-w-lg">
              Automatizá las consultas de WhatsApp e Instagram sobre stock,
              precios y disponibilidad. Tu bot responde 24/7 mientras vos te
              enfocás en tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-emerald-500/25 group"
              >
                <MessageCircle className="w-5 h-5" />
                Quiero mi bot
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-6 py-3.5 rounded-xl transition-all"
              >
                Ver cómo funciona
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-slate-500 text-sm">
              <div className="flex -space-x-2">
                {["F", "D", "M"].map((initial) => (
                  <div
                    key={initial}
                    className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-slate-300 text-xs font-semibold"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span>Negocios que ya automatizaron sus consultas</span>
            </div>
          </motion.div>

          {/* Right: WhatsApp mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px]">
              <div className="bg-slate-900 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
                {/* Chat header */}
                <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-3 border-b border-slate-700/50">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img src="/logoEconomiaRecortado.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">
                      Bot de Farmacia Central
                    </p>
                    <p className="text-emerald-400 text-xs flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      En línea
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div
                  className="p-4 space-y-3 min-h-[340px]"
                  style={{ background: "#0b1014" }}
                >
                  {CHAT_MESSAGES.slice(0, visibleMessages).map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex ${
                        msg.from === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-snug whitespace-pre-line ${
                          msg.from === "user"
                            ? "bg-emerald-600 text-white rounded-tr-sm"
                            : "bg-slate-700 text-slate-100 rounded-tl-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {visibleMessages < CHAT_MESSAGES.length &&
                    CHAT_MESSAGES[visibleMessages]?.from === "bot" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                          {[0, 1, 2].map((i) => (
                            <span
                              key={i}
                              className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce inline-block"
                              style={{ animationDelay: `${i * 120}ms` }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                </div>

                {/* Input bar */}
                <div className="bg-slate-800/80 border-t border-slate-700/50 px-4 py-3 flex items-center gap-2">
                  <div className="flex-1 bg-slate-700/60 rounded-full px-4 py-2 text-slate-500 text-sm">
                    Escribí un mensaje...
                  </div>
                  <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* 24/7 badge */}
              <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-emerald-500/30">
                24/7
              </div>

              {/* Subtle glow under phone */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-emerald-500/15 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
