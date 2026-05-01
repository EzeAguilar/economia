export const WHATSAPP_NUMBER = "542914252047"
export const WHATSAPP_MESSAGE = "Hola, me interesa Nexo para mi negocio."
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Para arrancar rápido",
    description:
      "Ideal para negocios que quieren automatizar consultas sin complicaciones.",
    features: [
      "Chatbot 24/7 en WhatsApp e Instagram",
      "Respuestas sobre stock y disponibilidad",
      "Catálogo de productos configurable",
      "Mensajes personalizados con tu marca",
      "Soporte por correo",
    ],
    highlight: false,
    cta: "Consultar",
  },
  {
    id: "business",
    name: "Business",
    tagline: "Conectado a tu negocio",
    description:
      "Para negocios que ya tienen sistema de gestión y quieren sincronizarlo con el bot.",
    features: [
      "Todo lo del plan Starter",
      "Conexión a tu base de datos existente",
      "Stock en tiempo real",
      "Sincronización automática de precios",
      "Reportes mensuales de consultas",
      "Soporte prioritario",
    ],
    highlight: true,
    cta: "Consultar",
  },
  {
    id: "full",
    name: "Full",
    tagline: "Solución completa",
    description:
      "Digitalizamos tu negocio de cero: base de datos, panel web y bot integrado.",
    features: [
      "Todo lo del plan Business",
      "Diseño e implementación de base de datos",
      "Panel web de gestión de stock",
      "Múltiples usuarios con roles",
      "Historial de movimientos y auditoría",
      "Capacitación incluida",
      "Soporte dedicado",
    ],
    highlight: false,
    cta: "Consultar",
  },
]

export const FAQ_ITEMS = [
  {
    question: "¿En cuánto tiempo se implementa el bot?",
    answer:
      "El plan Starter puede estar listo en 3–5 días hábiles. Los planes Business y Full dependen de la complejidad del sistema actual, generalmente entre 1 y 3 semanas.",
  },
  {
    question:
      "¿Mi negocio necesita tener base de datos para contratar el servicio?",
    answer:
      "No. Con el plan Starter trabajamos con inventarios simples configurados por vos. Con el plan Full, nosotros creamos la base de datos desde cero y te damos un panel para administrarla.",
  },
  {
    question:
      "¿Qué pasa si un cliente hace una pregunta que el bot no sabe responder?",
    answer:
      "El bot puede configurarse para derivar la conversación a un agente humano cuando la consulta está fuera de su alcance, o enviar un mensaje con tus datos de contacto directo.",
  },
  {
    question: "¿El servicio funciona solo para farmacias?",
    answer:
      "No. Aunque la idea nació pensando en farmacias, Nexo sirve para cualquier negocio que gestione consultas sobre stock: ferreterías, distribuidoras, tiendas de ropa, veterinarias, y más.",
  },
  {
    question: "¿El bot puede responder en horarios específicos?",
    answer:
      "Sí. El bot puede configurarse para responder 24/7 o solo en horarios comerciales, con mensajes personalizados fuera de horario.",
  },
  {
    question:
      "¿Puedo actualizar la información del bot después de la configuración inicial?",
    answer:
      "Sí. Podés actualizar el catálogo y las respuestas en cualquier momento. Los planes Business y Full sincronizan automáticamente con tu base de datos.",
  },
]
