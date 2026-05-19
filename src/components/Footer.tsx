import Image from "next/image"

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logoEconomiaRecortado.png" alt="NexoBot" width={72} height={43} className="rounded-lg flex-shrink-0" style={{ display: "block" }} />
          <span className="text-white font-bold text-lg">NexoBot</span>
        </a>

        <p className="text-slate-500 text-sm text-center">
          Automatización de consultas para negocios argentinos.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500 text-sm">
          <a
            href="#como-funciona"
            className="hover:text-slate-300 transition-colors"
          >
            Cómo funciona
          </a>
          <a
            href="#servicios"
            className="hover:text-slate-300 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#en-desarrollo"
            className="hover:text-slate-300 transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-800/40 text-center text-slate-700 text-xs">
        © {YEAR} NexoBot. Todos los derechos reservados.
      </div>
    </footer>
  )
}
