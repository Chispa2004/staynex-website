import type { IconKey } from "@/lib/site";

export type Locale = "en" | "es" | "fr";

export const locales: Locale[] = ["en", "es", "fr"];

type Pillar = {
  eyebrow: string;
  title: string;
  body: string;
  icon: IconKey;
  points: string[];
};

type Tone = "green" | "amber" | "coral" | "blue" | "gold";

export const translations = {
  en: {
    meta: {
      descriptor: "AI Hospitality Operations Platform",
      headline: "AI operations for hotels",
      description:
        "Staynex centralizes guest communication, hotel operations, AI workflows, revenue opportunities and hospitality intelligence in one platform."
    },
    nav: {
      product: "Product",
      operations: "Operations",
      revenue: "Revenue",
      preCheckin: "Pre check-in",
      aiWhatsapp: "AI + WhatsApp",
      health: "Health",
      demo: "Demo",
      contact: "Contact",
      requestDemo: "Request demo",
      open: "Open navigation"
    },
    hero: {
      live: ["Live guest journeys", "Reception ready", "Revenue detected"],
      ctaPrimary: "Request demo",
      ctaSecondary: "Explore platform",
      proof: ["Guest communication", "Reception workflows", "Provider revenue", "AI quality monitoring"]
    },
    dashboard: {
      command: "Staynex Command",
      liveOperations: "Live operations",
      today: "Today",
      guestJourney: "Guest journey control",
      live: "Live",
      journey: ["Pre-arrival", "Check-in", "In-stay", "Revenue", "Post-stay"],
      guestMessage: "Can we arrive early and book airport transfer?",
      aiMessage: "Early arrival noted. Transfer options are ready with your reservation details.",
      reception: "Reception",
      arrivalReadiness: "Arrival readiness",
      readinessBody: "128 arrivals checked against documents, preferences and folio status.",
      revenue: "Revenue",
      experienceSignals: "Experience signals",
      revenueBody: "Late check-out, spa and excursions are trending for this weekend.",
      hotelHealth: "Hotel health",
      qualityMonitor: "Quality monitor",
      aiQualityLab: "AI Quality Lab",
      replayReady: "Replay ready",
      replayBody: "Long journey simulation completed across 18 guest intents.",
      policyMatch: "Policy match",
      handoverTiming: "Handover timing",
      feed: "Operational feed"
    },
    liveCards: [
      ["Guest requested airport transfer", "WhatsApp", "Now", "Routed", "green"],
      ["Late checkout approved", "Reception", "1m ago", "Confirmed", "blue"],
      ["Housekeeping notified", "Room 304", "2m ago", "Task sent", "amber"],
      ["Provider booking sent", "Experiences", "4m ago", "Revenue", "gold"],
      ["AI resolved automatically", "Policy answer", "6m ago", "Closed", "green"],
      ["Review request scheduled", "Post-stay", "12m ago", "Queued", "blue"],
      ["VIP guest arriving tomorrow", "Front desk", "Tomorrow", "Flagged", "coral"]
    ] as [string, string, string, string, Tone][],
    metrics: [
      "24/7 multilingual AI",
      "Multi-hotel operations",
      "AI + human workflows",
      "Hospitality-focused automation",
      "Revenue opportunity detection",
      "Operational visibility"
    ],
    story: {
      eyebrow: "Guest journey operations",
      title: "Every stay creates operational moments. Staynex connects them.",
      body:
        "From first WhatsApp message to post-stay retention, Staynex turns guest intent into coordinated hotel workflows.",
      sections: [
        {
          eyebrow: "Before arrival",
          title: "Before guests even arrive",
          body:
            "Staynex prepares pre check-in, transfer intent, arrival readiness, WhatsApp communication and guest preferences before the front desk gets busy.",
          stage: "Pre-arrival flow",
          primary: "Guest lands in WhatsApp",
          secondary: "Reception sees readiness, missing details and preference signals in one place.",
          points: ["Pre check-in", "Transfer", "Arrival readiness", "WhatsApp", "Guest preferences"]
        },
        {
          eyebrow: "During stay",
          title: "AI concierge connected to hotel operations",
          body:
            "Requests become operational work: housekeeping, maintenance, restaurant, experiences and human takeover all stay connected to the guest context.",
          stage: "In-stay operations",
          primary: "AI understands request",
          secondary: "The right department receives the context, urgency and next action.",
          points: ["Requests", "Housekeeping", "Maintenance", "Restaurant", "Experiences", "Human takeover"]
        },
        {
          eyebrow: "After checkout",
          title: "Operations don't stop at checkout",
          body:
            "Automate folio reminders, review journeys, guest retention and direct communication so each stay keeps creating operational and revenue value.",
          stage: "Post-stay automation",
          primary: "Checkout completed",
          secondary: "Reviews, folio reminders and repeat-stay journeys continue with control.",
          points: ["Folio reminders", "Reviews", "Guest retention", "Direct communication", "Repeat stays"]
        }
      ]
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "From guest message to hotel action in three steps.",
      body: "Staynex turns conversations into coordinated workflows across AI, reception and revenue teams.",
      steps: [
        ["Guests message the hotel", "Guests use WhatsApp or direct channels for questions, requests and arrival needs."],
        ["Staynex understands, routes and automates", "AI interprets intent, checks hotel context and routes the next action."],
        ["Teams act faster and revenue is captured", "Staff see what matters while upsells, providers and reviews keep moving."]
      ]
    },
    why: {
      eyebrow: "Why hotels need this",
      title: "Hospitality teams are not short on messages. They are short on connected operations.",
      body:
        "Staynex is built for the work behind every guest conversation: departments, policies, timing, revenue, service recovery and human judgment.",
      proof: ["Hotel-native workflows", "AI with operational control"],
      points: [
        ["Repetitive guest questions", "AI handles routine questions while teams focus on hospitality moments."],
        ["Disconnected departments", "Guest requests move from conversation to the right operational workflow."],
        ["OTA dependency", "Direct WhatsApp communication creates owned guest relationships."],
        ["Slow operations", "Live statuses surface what needs action before it becomes visible friction."],
        ["Missed upsells", "Revenue opportunities are detected from real guest intent."],
        ["Fragmented communication", "Reception, service teams and AI share one source of guest context."],
        ["Operational overload", "Staynex prioritizes what matters, what can be automated and what needs people."]
      ]
    },
    chatbot: {
      eyebrow: "Built for hotels",
      title: "Not a generic chatbot. A hotel operations platform.",
      body:
        "Staynex understands hospitality workflows, arrival pressure, provider revenue, guest context and the moments where humans should take over.",
      points: ["PMS-aware", "Reception operations", "Provider marketplace", "Hotel health", "AI quality monitoring", "Human takeover"]
    },
    scenarios: {
      eyebrow: "Operational scenarios",
      title: "Real hotel moments, handled with context.",
      body: "Staynex keeps the guest experience warm while making the operational work clear and measurable.",
      items: [
        ["Late checkout", "Guest asks for late checkout and Staynex checks policy, occupancy and approval path."],
        ["Broken shower", "A maintenance issue is detected, prioritized and routed with room context."],
        ["Night excursion request", "The guest asks at night and receives provider options without waiting for reception."],
        ["Pre check-in", "Arrival details, documents and preferences are captured before the desk gets busy."],
        ["Post-checkout review", "Review and retention journeys continue after checkout with direct communication."]
      ]
    },
    product: {
      eyebrow: "Product",
      title: "One hospitality operations layer, not another chatbot.",
      body:
        "Staynex brings guest messaging, reception workflows, experience revenue and AI quality into a single operating surface for modern hotels.",
      pillars: [
        {
          eyebrow: "AI Concierge",
          title: "WhatsApp guest journeys with operational context.",
          body:
            "Automate multilingual guest conversations across booking, arrival, stay and post-stay moments while keeping reception in control.",
          icon: "message",
          points: ["WhatsApp first", "Multilingual by design", "24/7 availability", "Human takeover"]
        },
        {
          eyebrow: "Reception Operations",
          title: "Arrival readiness before the guest reaches the desk.",
          body:
            "Prepare pre check-in, guest lookup, folio preview and readiness signals so teams can resolve friction before arrival peaks.",
          icon: "reception",
          points: ["Pre check-in", "Guest lookup", "Folio preview", "Operational readiness"]
        },
        {
          eyebrow: "Experience Marketplace",
          title: "Revenue opportunities inside every guest conversation.",
          body:
            "Present curated providers, excursions, upgrades and services at the right moment without turning hospitality into spam.",
          icon: "revenue",
          points: ["Provider bookings", "Excursions", "Upsells", "Revenue visibility"]
        },
        {
          eyebrow: "Hotel Health",
          title: "A live view of automation quality and hotel operations.",
          body:
            "Monitor alerts, AI quality, missed opportunities and guest journey health from one operational control layer.",
          icon: "health",
          points: ["Monitoring", "Alerts", "AI quality", "Operational visibility"]
        },
        {
          eyebrow: "AI Quality Lab",
          title: "Test long guest journeys before guests experience them.",
          body:
            "Use failure intelligence, long journey simulation and replay mode to understand where automation needs improvement.",
          icon: "lab",
          points: ["Failure Intelligence", "Long Journey Simulation", "Replay mode", "QA workflows"]
        }
      ] as Pillar[]
    },
    operations: {
      eyebrow: "Operations",
      title: "Give hotel teams a calmer command center.",
      body:
        "Operations teams can see what guests need, what AI handled, what requires staff judgment and where service recovery should happen now.",
      features: [
        ["Workflow routing", "Classify routine, revenue, urgent and policy-sensitive conversations."],
        ["Human takeover", "Bring reception into the right conversation with guest context already prepared."],
        ["PMS-ready thinking", "Structure data around reservations, folios, arrival windows and hotel policies."]
      ],
      cards: [
        ["92%", "Guest arrival readiness", "Identify missing documents, arrival timing, special requests and room readiness from a single operational view.", "ready arrivals"],
        ["38%", "Reception focus", "Route routine messages to AI and bring staff into conversations only when judgment or empathy is needed.", "less repetitive work"],
        ["<2m", "Service recovery", "Escalate issues when intent, urgency or sentiment suggests a human should step in immediately.", "priority alerting"]
      ]
    },
    revenue: {
      eyebrow: "Revenue & Experiences",
      title: "Turn guest intent into curated hospitality revenue.",
      body:
        "Staynex can surface relevant experiences, providers, services and upgrades from inside the guest journey, with reporting that keeps teams focused on value.",
      list: [
        "Late check-out offers aligned with occupancy",
        "Local providers and excursions with booking context",
        "Spa, restaurant and transport recommendations",
        "Revenue reporting across upsells and guest intent"
      ],
      previewTitle: "Weekend opportunities",
      rows: [
        ["Airport transfer", "Arrivals after 20:00", "+18% intent"],
        ["Sunset excursion", "Couples and families", "+31% intent"],
        ["Spa upgrade", "Rain forecast window", "+24% intent"]
      ]
    },
    reception: {
      eyebrow: "Reception / Pre Check-in",
      title: "Arrival intelligence before front desk pressure begins.",
      body:
        "Staynex helps reception teams prepare each arrival with guest lookup, pre check-in status, folio preview and operational readiness in view.",
      visualEyebrow: "Pre check-in",
      arrivals: "Arrivals today",
      guests: [
        ["Elena Costa", "Documents complete", "Ready"],
        ["Martin Keller", "Folio needs review", "Review"],
        ["Ari Nguyen", "Arrival at 21:40", "Ready"]
      ],
      folioTitle: "Folio preview",
      folioBody: "Balance, room notes and guest preferences surfaced before the arrival wave.",
      tiles: ["Pre check-in", "Guest lookup", "Folio preview", "Operational readiness"]
    },
    whatsapp: {
      eyebrow: "AI + WhatsApp",
      title: "Meet guests where they already communicate.",
      body:
        "Staynex treats WhatsApp as the guest-facing layer of a broader operations platform, connecting conversation, reservation context, human takeover and quality monitoring.",
      header: "Staynex Concierge",
      online: "Online",
      chat: [
        ["guest", "Hi, can I check in before arriving?"],
        ["ai", "Yes. I can help you complete pre check-in and confirm your arrival time."],
        ["guest", "Also, do you have boat tours tomorrow?"],
        ["ai", "Our experience partner has these options available for tomorrow. Would you prefer a private or shared option?"]
      ],
      cards: [
        ["WhatsApp native", "Guest conversations stay simple on the front end and operationally rich behind the scenes."],
        ["Multilingual", "Support international guests across arrival, in-stay support and service recommendations."],
        ["24/7 coverage", "Handle repetitive moments instantly while preserving escalation paths for staff."],
        ["Human takeover", "Route sensitive, urgent or VIP interactions to hotel teams with context attached."]
      ]
    },
    health: {
      eyebrow: "Hotel Health & Monitoring",
      title: "Operational visibility for AI-powered hospitality.",
      body:
        "Monitor journey quality, escalation patterns, unresolved conversations, revenue intent and policy gaps before they become guest-facing issues.",
      link: "See the health layer",
      alert: "Alert: 3 pre-arrival journeys need policy review before 18:00.",
      signals: [
        ["AI confidence", "97.4%", "green"],
        ["Unresolved journeys", "12", "amber"],
        ["Escalations", "4", "coral"],
        ["Revenue intents", "86", "blue"]
      ] as [string, string, Tone][]
    },
    lab: {
      eyebrow: "AI Quality Lab",
      title: "Improve AI before guests notice the edge cases.",
      body:
        "Staynex is designed for operational learning: test long journeys, replay conversations and understand exactly why an automation failed.",
      features: [
        ["Failure Intelligence", "Understand where AI got stuck, which policy was missing and what hotel context should be improved."],
        ["Long Journey Simulation", "Simulate multi-day guest conversations that include pre-arrival, in-stay support and upsell opportunities."],
        ["Replay mode", "Replay real or synthetic journeys step by step to compare response quality and human handover timing."]
      ]
    },
    demo: {
      eyebrow: "Demo",
      title: "See Staynex in action",
      body:
        "One journey can trigger WhatsApp replies, reception readiness, provider booking, AI monitoring and human takeover. The product story stays operational from the first message.",
      phoneTitle: "Staynex Concierge",
      phoneStatus: "AI + human ready",
      chat: [
        ["guest", "Can I arrive early and book a transfer?"],
        ["ai", "Yes. I found your reservation and prepared transfer options."],
        ["guest", "Please send a private option."],
        ["ai", "Done. Reception has your arrival time and provider booking request."]
      ],
      flowTitle: "Live demo flow",
      flowCount: "5 connected steps",
      flow: [
        ["WhatsApp conversation", "Guest asks for early arrival and a transfer", "Staynex answers instantly and checks which details reception needs."],
        ["Reception dashboard", "Arrival readiness updates live", "Documents, arrival time, folio status and guest notes stay visible."],
        ["Provider booking", "Airport transfer options are sent", "The guest receives curated providers without leaving the conversation."],
        ["AI monitoring", "Quality and escalation are tracked", "Confidence, policy match and unresolved steps are monitored."],
        ["Human takeover", "Staff steps in when judgment matters", "Reception gets context, urgency and the conversation history."]
      ],
      monitoring: "AI monitoring",
      score: "journey confidence",
      checks: ["Policy matched", "Provider booking sent", "Reception updated", "Human takeover available"],
      ctaPrimary: "Request demo",
      ctaSecondary: "Contact team"
    },
    form: {
      eyebrow: "Request demo",
      title: "Tell us about your hotel",
      body: "Share a few details and the Staynex team will follow up with a tailored product walkthrough.",
      name: "Name",
      company: "Hotel / Company",
      email: "Email",
      rooms: "Number of rooms",
      message: "Message",
      submit: "Request demo",
      success: "Thanks. We'll contact you soon."
    },
    finalCta: {
      eyebrow: "Ready",
      title: "Ready to see Staynex in action?",
      body:
        "Show your team how guest communication, operations, revenue and AI quality can work together in one hotel-native platform.",
      primary: "Request demo",
      secondary: "Explore platform"
    },
    contact: {
      eyebrow: "Contact",
      title: "Built for hotels ready to operationalize AI.",
      body: "Use this commercial base for investor conversations, hotel pilots, demo bookings and future public launch pages.",
      cardBody: "Public website foundation prepared for SEO, analytics, CMS content and multilingual expansion."
    },
    footer: {
      body: "Public commercial website for enterprise hospitality AI operations.",
      legal: "Legal placeholder"
    }
  },
  es: {
    meta: {
      descriptor: "Plataforma de operaciones hoteleras con IA",
      headline: "Operaciones con IA para hoteles",
      description:
        "Staynex centraliza la comunicación con huéspedes, las operaciones del hotel, los flujos de IA, las oportunidades de revenue y la inteligencia hospitality en una sola plataforma."
    },
    nav: {
      product: "Producto",
      operations: "Operaciones",
      revenue: "Revenue",
      preCheckin: "Pre check-in",
      aiWhatsapp: "IA + WhatsApp",
      health: "Health",
      demo: "Demo",
      contact: "Contacto",
      requestDemo: "Solicitar demo",
      open: "Abrir navegación"
    },
    hero: {
      live: ["Journeys en vivo", "Recepción preparada", "Revenue detectado"],
      ctaPrimary: "Solicitar demo",
      ctaSecondary: "Explorar plataforma",
      proof: ["Comunicación con huéspedes", "Flujos de recepción", "Revenue de proveedores", "Monitorización de IA"]
    },
    dashboard: {
      command: "Staynex Command",
      liveOperations: "Operaciones en vivo",
      today: "Hoy",
      guestJourney: "Control del guest journey",
      live: "Live",
      journey: ["Pre-llegada", "Check-in", "Estancia", "Revenue", "Post-estancia"],
      guestMessage: "¿Podemos llegar antes y reservar transfer?",
      aiMessage: "Llegada temprana anotada. Las opciones de transfer están listas con los detalles de la reserva.",
      reception: "Recepción",
      arrivalReadiness: "Preparación de llegadas",
      readinessBody: "128 llegadas revisadas con documentos, preferencias y estado de folio.",
      revenue: "Revenue",
      experienceSignals: "Señales de experiencias",
      revenueBody: "Late check-out, spa y excursiones suben este fin de semana.",
      hotelHealth: "Hotel health",
      qualityMonitor: "Monitor de calidad",
      aiQualityLab: "AI Quality Lab",
      replayReady: "Replay listo",
      replayBody: "Simulación de journey largo completada con 18 intenciones de huésped.",
      policyMatch: "Política correcta",
      handoverTiming: "Handover a tiempo",
      feed: "Feed operativo"
    },
    liveCards: [
      ["Huésped pide transfer al aeropuerto", "WhatsApp", "Ahora", "Enrutado", "green"],
      ["Late checkout aprobado", "Recepción", "Hace 1m", "Confirmado", "blue"],
      ["Housekeeping avisado", "Hab. 304", "Hace 2m", "Tarea enviada", "amber"],
      ["Reserva de proveedor enviada", "Experiencias", "Hace 4m", "Revenue", "gold"],
      ["IA resuelto automáticamente", "Política", "Hace 6m", "Cerrado", "green"],
      ["Solicitud de review programada", "Post-estancia", "Hace 12m", "En cola", "blue"],
      ["VIP llega mañana", "Front desk", "Mañana", "Marcado", "coral"]
    ] as [string, string, string, string, Tone][],
    metrics: [
      "IA multilingüe 24/7",
      "Operaciones multi-hotel",
      "Flujos IA + humanos",
      "Automatización hotelera",
      "Detección de revenue",
      "Visibilidad operativa"
    ],
    story: {
      eyebrow: "Operaciones del guest journey",
      title: "Cada estancia crea momentos operativos. Staynex los conecta.",
      body:
        "Desde el primer WhatsApp hasta la retención post-estancia, Staynex convierte la intención del huésped en workflows hoteleros coordinados.",
      sections: [
        {
          eyebrow: "Antes de la llegada",
          title: "Antes incluso de que lleguen los huéspedes",
          body:
            "Staynex prepara pre check-in, intención de transfer, readiness de llegada, comunicación por WhatsApp y preferencias antes del pico de recepción.",
          stage: "Flujo pre-llegada",
          primary: "El huésped escribe por WhatsApp",
          secondary: "Recepción ve readiness, datos pendientes y preferencias en un único lugar.",
          points: ["Pre check-in", "Transfer", "Readiness", "WhatsApp", "Preferencias"]
        },
        {
          eyebrow: "Durante la estancia",
          title: "Concierge IA conectado a operaciones del hotel",
          body:
            "Las peticiones se convierten en trabajo operativo: housekeeping, mantenimiento, restaurante, experiencias y human takeover con contexto.",
          stage: "Operaciones in-stay",
          primary: "La IA entiende la petición",
          secondary: "El departamento adecuado recibe contexto, urgencia y siguiente acción.",
          points: ["Peticiones", "Housekeeping", "Mantenimiento", "Restaurante", "Experiencias", "Human takeover"]
        },
        {
          eyebrow: "Después del checkout",
          title: "Las operaciones no terminan en el checkout",
          body:
            "Automatiza recordatorios de folio, reviews, retención y comunicación directa para que cada estancia siga generando valor.",
          stage: "Automatización post-estancia",
          primary: "Checkout completado",
          secondary: "Reviews, folios y journeys de repetición siguen activos con control.",
          points: ["Folio", "Reviews", "Retención", "Comunicación directa", "Repetición"]
        }
      ]
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Del mensaje del huésped a la acción del hotel en tres pasos.",
      body: "Staynex convierte conversaciones en workflows coordinados entre IA, recepción y revenue.",
      steps: [
        ["El huésped escribe al hotel", "Usa WhatsApp o canales directos para preguntas, peticiones y llegada."],
        ["Staynex entiende, enruta y automatiza", "La IA interpreta intención, revisa contexto del hotel y activa la siguiente acción."],
        ["El equipo actúa más rápido y captura revenue", "El staff ve lo importante mientras upsells, proveedores y reviews avanzan."]
      ]
    },
    why: {
      eyebrow: "Por qué los hoteles lo necesitan",
      title: "A los equipos hoteleros no les faltan mensajes. Les faltan operaciones conectadas.",
      body:
        "Staynex está construido para el trabajo detrás de cada conversación: departamentos, políticas, tiempos, revenue, recuperación de servicio y criterio humano.",
      proof: ["Workflows nativos de hotel", "IA con control operativo"],
      points: [
        ["Preguntas repetitivas", "La IA gestiona lo rutinario mientras el equipo se centra en hospitality."],
        ["Departamentos desconectados", "Las peticiones pasan de conversación a workflow operativo."],
        ["Dependencia de OTAs", "WhatsApp directo crea relaciones propias con huéspedes."],
        ["Operaciones lentas", "Los estados live muestran qué necesita acción antes de que haya fricción."],
        ["Upsells perdidos", "Las oportunidades de revenue se detectan desde intención real."],
        ["Comunicación fragmentada", "Recepción, equipos e IA comparten contexto del huésped."],
        ["Sobrecarga operativa", "Staynex prioriza qué importa, qué automatizar y qué necesita personas."]
      ]
    },
    chatbot: {
      eyebrow: "Construido para hoteles",
      title: "No es un chatbot genérico. Es una plataforma operativa hotelera.",
      body:
        "Staynex entiende workflows hospitality, presión de llegadas, revenue de proveedores, contexto del huésped y cuándo debe entrar una persona.",
      points: ["PMS-aware", "Operaciones de recepción", "Marketplace de proveedores", "Hotel health", "Monitorización de IA", "Human takeover"]
    },
    scenarios: {
      eyebrow: "Escenarios operativos",
      title: "Momentos reales de hotel, gestionados con contexto.",
      body: "Staynex mantiene una experiencia cálida mientras clarifica y mide el trabajo operativo.",
      items: [
        ["Late checkout", "El huésped lo solicita y Staynex revisa política, ocupación y aprobación."],
        ["Ducha rota", "El problema de mantenimiento se detecta, prioriza y enruta con contexto de habitación."],
        ["Excursión de noche", "El huésped recibe opciones de proveedor sin esperar a recepción."],
        ["Pre check-in", "Detalles de llegada, documentos y preferencias se capturan antes del pico."],
        ["Review post-checkout", "Reviews y retención continúan tras checkout con comunicación directa."]
      ]
    },
    product: {
      eyebrow: "Producto",
      title: "Una capa operativa hospitality, no otro chatbot.",
      body:
        "Staynex une mensajería, recepción, revenue de experiencias y calidad de IA en una sola superficie operativa para hoteles modernos.",
      pillars: [
        {
          eyebrow: "AI Concierge",
          title: "Journeys por WhatsApp con contexto operativo.",
          body: "Automatiza conversaciones multilingües desde reserva hasta post-estancia manteniendo recepción en control.",
          icon: "message",
          points: ["WhatsApp first", "Multilingüe", "24/7", "Human takeover"]
        },
        {
          eyebrow: "Operaciones de recepción",
          title: "Llegadas preparadas antes del mostrador.",
          body: "Pre check-in, guest lookup, folio preview y señales de readiness para resolver fricción antes del pico.",
          icon: "reception",
          points: ["Pre check-in", "Guest lookup", "Folio preview", "Readiness"]
        },
        {
          eyebrow: "Marketplace de experiencias",
          title: "Revenue dentro de cada conversación.",
          body: "Presenta proveedores, excursiones, upgrades y servicios en el momento correcto sin perder tono hospitality.",
          icon: "revenue",
          points: ["Proveedores", "Excursiones", "Upsells", "Visibilidad revenue"]
        },
        {
          eyebrow: "Hotel Health",
          title: "Vista live de calidad IA y operaciones.",
          body: "Monitoriza alertas, calidad de IA, oportunidades perdidas y salud del journey desde una capa de control.",
          icon: "health",
          points: ["Monitoring", "Alertas", "Calidad IA", "Visibilidad"]
        },
        {
          eyebrow: "AI Quality Lab",
          title: "Testea journeys largos antes de que los vivan huéspedes.",
          body: "Usa failure intelligence, simulación y replay mode para mejorar la automatización.",
          icon: "lab",
          points: ["Failure Intelligence", "Simulación", "Replay mode", "QA"]
        }
      ] as Pillar[]
    },
    operations: {
      eyebrow: "Operaciones",
      title: "Un command center más tranquilo para equipos hoteleros.",
      body:
        "Los equipos ven qué necesita el huésped, qué resolvió la IA, qué requiere criterio humano y dónde actuar ahora.",
      features: [
        ["Enrutado de workflows", "Clasifica conversaciones rutinarias, urgentes, de revenue o sensibles a políticas."],
        ["Human takeover", "Recepción entra con contexto listo cuando hace falta criterio."],
        ["Pensado para PMS", "Estructura datos alrededor de reservas, folios, llegada y políticas."]
      ],
      cards: [
        ["92%", "Preparación llegada de huéspedes", "Identifica documentos, hora de llegada, peticiones y preparación de habitación.", "llegadas listas"],
        ["38%", "Foco de recepción", "La IA absorbe lo repetitivo y deja al equipo los momentos de criterio.", "menos trabajo repetitivo"],
        ["<2m", "Service recovery", "Escala incidencias cuando intención, urgencia o sentimiento lo requieren.", "alerta prioritaria"]
      ]
    },
    revenue: {
      eyebrow: "Revenue & Experiencias",
      title: "Convierte intención del huésped en revenue hospitality.",
      body:
        "Staynex muestra experiencias, proveedores, servicios y upgrades relevantes dentro del journey, con reporting claro.",
      list: [
        "Ofertas de late check-out alineadas con ocupación",
        "Proveedores y excursiones con contexto de reserva",
        "Spa, restaurante y transporte recomendados",
        "Reporting de upsells e intención"
      ],
      previewTitle: "Oportunidades del fin de semana",
      rows: [
        ["Transfer aeropuerto", "Llegadas después de 20:00", "+18% intención"],
        ["Excursión sunset", "Parejas y familias", "+31% intención"],
        ["Upgrade spa", "Ventana de lluvia", "+24% intención"]
      ]
    },
    reception: {
      eyebrow: "Recepción / Pre Check-in",
      title: "Inteligencia de llegada antes de la presión en front desk.",
      body:
        "Staynex ayuda a recepción a preparar cada llegada con guest lookup, pre check-in, folio preview y readiness operativo.",
      visualEyebrow: "Pre check-in",
      arrivals: "Llegadas de hoy",
      guests: [
        ["Elena Costa", "Documentos completos", "Listo"],
        ["Martin Keller", "Folio necesita revisión", "Revisar"],
        ["Ari Nguyen", "Llegada a las 21:40", "Listo"]
      ],
      folioTitle: "Folio preview",
      folioBody: "Balance, notas de habitación y preferencias antes del pico de llegadas.",
      tiles: ["Pre check-in", "Guest lookup", "Folio preview", "Readiness operativo"]
    },
    whatsapp: {
      eyebrow: "IA + WhatsApp",
      title: "Atiende a huéspedes donde ya se comunican.",
      body:
        "Staynex usa WhatsApp como capa guest-facing de una plataforma operativa más amplia: conversación, reserva, human takeover y calidad.",
      header: "Staynex Concierge",
      online: "Online",
      chat: [
        ["guest", "Hola, ¿puedo hacer check-in antes de llegar?"],
        ["ai", "Sí. Puedo ayudarte a completar el pre check-in y confirmar tu hora de llegada."],
        ["guest", "También, ¿hay excursiones en barco mañana?"],
        ["ai", "Nuestro proveedor de experiencias ofrece estas opciones para mañana. ¿Prefieres una opción privada o compartida?"]
      ],
      cards: [
        ["WhatsApp nativo", "Conversaciones simples para el huésped y ricas operativamente detrás."],
        ["Multilingüe", "Soporte para huéspedes internacionales antes, durante y después de la estancia."],
        ["Cobertura 24/7", "Gestiona momentos repetitivos con rutas claras de escalado."],
        ["Human takeover", "Lleva interacciones sensibles o VIP al equipo con contexto."]
      ]
    },
    health: {
      eyebrow: "Hotel Health & Monitoring",
      title: "Visibilidad operativa para hospitality con IA.",
      body:
        "Monitoriza calidad de journeys, escalados, conversaciones sin resolver, intención de revenue y gaps de política.",
      link: "Ver capa health",
      alert: "Alerta: 3 journeys pre-llegada necesitan revisión de política antes de las 18:00.",
      signals: [
        ["Confianza IA", "97.4%", "green"],
        ["Journeys sin resolver", "12", "amber"],
        ["Escalados", "4", "coral"],
        ["Intenciones revenue", "86", "blue"]
      ] as [string, string, Tone][]
    },
    lab: {
      eyebrow: "AI Quality Lab",
      title: "Mejora la IA antes de que los huéspedes encuentren casos límite.",
      body:
        "Staynex está pensado para aprendizaje operativo: testea journeys largos, reproduce conversaciones y entiende fallos.",
      features: [
        ["Failure Intelligence", "Entiende dónde se atascó la IA, qué política faltó y qué contexto mejorar."],
        ["Long Journey Simulation", "Simula conversaciones multi-día con pre-llegada, estancia y upsell."],
        ["Replay mode", "Reproduce journeys paso a paso para comparar calidad y timing de handover."]
      ]
    },
    demo: {
      eyebrow: "Demo",
      title: "Ve Staynex en acción",
      body:
        "Un solo journey puede activar WhatsApp, readiness de recepción, proveedor, monitoring IA y human takeover. La historia del producto se mantiene operativa desde el primer mensaje.",
      phoneTitle: "Staynex Concierge",
      phoneStatus: "IA + humano listo",
      chat: [
        ["guest", "¿Puedo llegar antes y reservar transfer?"],
        ["ai", "Sí. He encontrado tu reserva y preparado opciones de transfer."],
        ["guest", "Envíame una opción privada."],
        ["ai", "Hecho. Recepción tiene tu hora de llegada y la solicitud al proveedor."]
      ],
      flowTitle: "Flujo demo live",
      flowCount: "5 pasos conectados",
      flow: [
        ["Conversación WhatsApp", "El huésped pide llegada temprana y transfer", "Staynex responde y revisa qué necesita recepción."],
        ["Dashboard recepción", "La readiness se actualiza en vivo", "Documentos, llegada, folio y notas permanecen visibles."],
        ["Reserva de proveedor", "Se envían opciones de transfer", "El huésped recibe proveedores sin salir de la conversación."],
        ["Monitoring IA", "Calidad y escalado se monitorizan", "Confianza, política y pasos pendientes quedan controlados."],
        ["Human takeover", "El staff entra cuando importa el criterio", "Recepción recibe contexto, urgencia e historial."]
      ],
      monitoring: "Monitoring IA",
      score: "confianza del journey",
      checks: ["Política correcta", "Proveedor enviado", "Recepción actualizada", "Human takeover disponible"],
      ctaPrimary: "Solicitar demo",
      ctaSecondary: "Contactar equipo"
    },
    form: {
      eyebrow: "Solicitar demo",
      title: "Cuéntanos sobre tu hotel",
      body: "Comparte algunos detalles y el equipo de Staynex te contactará con una demo adaptada.",
      name: "Nombre",
      company: "Hotel / Empresa",
      email: "Email",
      rooms: "Número de habitaciones",
      message: "Mensaje",
      submit: "Solicitar demo",
      success: "Gracias. Te contactaremos pronto."
    },
    finalCta: {
      eyebrow: "Ready",
      title: "¿Listo para ver Staynex en acción?",
      body:
        "Muestra a tu equipo cómo comunicación, operaciones, revenue y calidad IA pueden trabajar juntos en una plataforma hotelera.",
      primary: "Solicitar demo",
      secondary: "Explorar plataforma"
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construido para hoteles listos para operacionalizar IA.",
      body: "Base comercial preparada para pilotos, demos, inversores y lanzamiento público futuro.",
      cardBody: "Fundación preparada para SEO, analytics, CMS y expansión multilingüe."
    },
    footer: {
      body: "Web comercial pública para operaciones hoteleras enterprise con IA.",
      legal: "Legal placeholder"
    }
  },
  fr: {
    meta: {
      descriptor: "Plateforme d'operations hotelieres avec IA",
      headline: "Opérations IA pour hôtels",
      description:
        "Staynex centralise la communication client, les operations hotelieres, les workflows IA, les opportunites de revenu et l'intelligence hospitality dans une seule plateforme."
    },
    nav: {
      product: "Produit",
      operations: "Operations",
      revenue: "Revenu",
      preCheckin: "Pre check-in",
      aiWhatsapp: "IA + WhatsApp",
      health: "Health",
      demo: "Demo",
      contact: "Contact",
      requestDemo: "Demander une demo",
      open: "Ouvrir la navigation"
    },
    hero: {
      live: ["Parcours clients en direct", "Reception prete", "Revenu detecte"],
      ctaPrimary: "Demander une demo",
      ctaSecondary: "Explorer la plateforme",
      proof: ["Communication client", "Workflows reception", "Revenu partenaires", "Monitoring qualite IA"]
    },
    dashboard: {
      command: "Staynex Command",
      liveOperations: "Operations en direct",
      today: "Aujourd'hui",
      guestJourney: "Controle du parcours client",
      live: "Live",
      journey: ["Pre-arrivee", "Check-in", "Sejour", "Revenu", "Post-sejour"],
      guestMessage: "Pouvons-nous arriver plus tot et reserver un transfert ?",
      aiMessage: "Arrivee anticipee notee. Les options de transfert sont pretes avec les details de reservation.",
      reception: "Reception",
      arrivalReadiness: "Preparation des arrivees",
      readinessBody: "128 arrivees verifiees avec documents, preferences et statut du folio.",
      revenue: "Revenu",
      experienceSignals: "Signaux d'experiences",
      revenueBody: "Late check-out, spa et excursions progressent pour ce week-end.",
      hotelHealth: "Hotel health",
      qualityMonitor: "Monitoring qualite",
      aiQualityLab: "AI Quality Lab",
      replayReady: "Replay pret",
      replayBody: "Simulation de parcours long terminee sur 18 intentions client.",
      policyMatch: "Politique validee",
      handoverTiming: "Handover au bon moment",
      feed: "Flux operationnel"
    },
    liveCards: [
      ["Client demande un transfert aeroport", "WhatsApp", "Maintenant", "Route", "green"],
      ["Late checkout approuve", "Reception", "il y a 1m", "Confirme", "blue"],
      ["Housekeeping notifie", "Ch. 304", "il y a 2m", "Tache envoyee", "amber"],
      ["Reservation partenaire envoyee", "Experiences", "il y a 4m", "Revenu", "gold"],
      ["IA resolue automatiquement", "Politique", "il y a 6m", "Ferme", "green"],
      ["Demande d'avis programmee", "Post-sejour", "il y a 12m", "En file", "blue"],
      ["Client VIP arrive demain", "Front desk", "Demain", "Signale", "coral"]
    ] as [string, string, string, string, Tone][],
    metrics: [
      "IA multilingue 24/7",
      "Operations multi-hotels",
      "Workflows IA + humains",
      "Automatisation hospitality",
      "Detection opportunites revenu",
      "Visibilite operationnelle"
    ],
    story: {
      eyebrow: "Operations du parcours client",
      title: "Chaque sejour cree des moments operationnels. Staynex les connecte.",
      body:
        "Du premier WhatsApp a la retention post-sejour, Staynex transforme l'intention client en workflows hoteliers coordonnes.",
      sections: [
        {
          eyebrow: "Avant l'arrivee",
          title: "Avant meme l'arrivee des clients",
          body:
            "Staynex prepare le pre check-in, le transfert, la readiness d'arrivee, WhatsApp et les preferences avant le pic de reception.",
          stage: "Flux pre-arrivee",
          primary: "Le client ecrit sur WhatsApp",
          secondary: "La reception voit readiness, donnees manquantes et preferences en un seul endroit.",
          points: ["Pre check-in", "Transfert", "Readiness", "WhatsApp", "Preferences"]
        },
        {
          eyebrow: "Pendant le sejour",
          title: "Concierge IA connecte aux operations hotelieres",
          body:
            "Les demandes deviennent du travail operationnel : housekeeping, maintenance, restaurant, experiences et human takeover avec contexte.",
          stage: "Operations in-stay",
          primary: "L'IA comprend la demande",
          secondary: "Le bon departement recoit contexte, urgence et prochaine action.",
          points: ["Demandes", "Housekeeping", "Maintenance", "Restaurant", "Experiences", "Human takeover"]
        },
        {
          eyebrow: "Apres checkout",
          title: "Les operations ne s'arretent pas au checkout",
          body:
            "Automatisez les rappels folio, avis, retention et communication directe pour prolonger la valeur de chaque sejour.",
          stage: "Automatisation post-sejour",
          primary: "Checkout termine",
          secondary: "Avis, rappels folio et parcours de retour continuent avec controle.",
          points: ["Folio", "Avis", "Retention", "Communication directe", "Retours"]
        }
      ]
    },
    howItWorks: {
      eyebrow: "Comment ca marche",
      title: "Du message client a l'action hotel en trois etapes.",
      body: "Staynex transforme les conversations en workflows coordonnes entre IA, reception et revenu.",
      steps: [
        ["Les clients ecrivent a l'hotel", "Ils utilisent WhatsApp ou des canaux directs pour questions, demandes et arrivees."],
        ["Staynex comprend, route et automatise", "L'IA interprete l'intention, verifie le contexte hotel et active l'action suivante."],
        ["Les equipes agissent plus vite et capturent le revenu", "Le staff voit l'essentiel pendant que upsells, partenaires et avis avancent."]
      ]
    },
    why: {
      eyebrow: "Pourquoi les hotels en ont besoin",
      title: "Les equipes hotelieres ne manquent pas de messages. Elles manquent d'operations connectees.",
      body:
        "Staynex est concu pour le travail derriere chaque conversation : departements, politiques, timing, revenu, service recovery et jugement humain.",
      proof: ["Workflows natifs hotel", "IA avec controle operationnel"],
      points: [
        ["Questions repetitives", "L'IA gere le routinier pendant que l'equipe se concentre sur l'hospitality."],
        ["Departements deconnectes", "Les demandes passent de la conversation au workflow operationnel."],
        ["Dependance OTA", "WhatsApp direct cree des relations clients propres."],
        ["Operations lentes", "Les statuts live montrent l'action necessaire avant la friction."],
        ["Upsells manques", "Les opportunites de revenu sont detectees depuis l'intention reelle."],
        ["Communication fragmentee", "Reception, equipes et IA partagent le contexte client."],
        ["Surcharge operationnelle", "Staynex priorise ce qui compte, ce qui s'automatise et ce qui demande une personne."]
      ]
    },
    chatbot: {
      eyebrow: "Concu pour les hotels",
      title: "Pas un chatbot generique. Une plateforme operationnelle hoteliere.",
      body:
        "Staynex comprend les workflows hospitality, la pression des arrivees, le revenu partenaires, le contexte client et le moment ou l'humain doit intervenir.",
      points: ["PMS-aware", "Operations reception", "Marketplace partenaires", "Hotel health", "Monitoring qualite IA", "Human takeover"]
    },
    scenarios: {
      eyebrow: "Scenarios operationnels",
      title: "Des moments hoteliers reels, geres avec contexte.",
      body: "Staynex garde une experience chaleureuse tout en clarifiant le travail operationnel.",
      items: [
        ["Late checkout", "Le client le demande et Staynex verifie politique, occupation et validation."],
        ["Douche cassee", "Le probleme maintenance est detecte, priorise et route avec contexte chambre."],
        ["Excursion de nuit", "Le client recoit des options partenaire sans attendre la reception."],
        ["Pre check-in", "Details d'arrivee, documents et preferences sont captures avant le pic."],
        ["Avis apres checkout", "Avis et retention continuent apres checkout en communication directe."]
      ]
    },
    product: {
      eyebrow: "Produit",
      title: "Une couche operationnelle hospitality, pas un autre chatbot.",
      body:
        "Staynex relie messagerie, reception, revenu d'experiences et qualite IA dans une surface operationnelle unique.",
      pillars: [
        {
          eyebrow: "AI Concierge",
          title: "Parcours WhatsApp avec contexte operationnel.",
          body: "Automatisez les conversations multilingues du booking au post-sejour en gardant la reception en controle.",
          icon: "message",
          points: ["WhatsApp first", "Multilingue", "24/7", "Human takeover"]
        },
        {
          eyebrow: "Operations reception",
          title: "Arrivees preparees avant le desk.",
          body: "Pre check-in, guest lookup, folio preview et readiness pour reduire la friction avant les pics.",
          icon: "reception",
          points: ["Pre check-in", "Guest lookup", "Folio preview", "Readiness"]
        },
        {
          eyebrow: "Marketplace experiences",
          title: "Revenu dans chaque conversation.",
          body: "Presentez partenaires, excursions, upgrades et services au bon moment avec un ton hospitality.",
          icon: "revenue",
          points: ["Partenaires", "Excursions", "Upsells", "Visibilite revenu"]
        },
        {
          eyebrow: "Hotel Health",
          title: "Vue live de qualite IA et operations.",
          body: "Surveillez alertes, qualite IA, opportunites manquees et sante des parcours.",
          icon: "health",
          points: ["Monitoring", "Alertes", "Qualite IA", "Visibilite"]
        },
        {
          eyebrow: "AI Quality Lab",
          title: "Testez les longs parcours avant les clients.",
          body: "Utilisez failure intelligence, simulation et replay mode pour ameliorer l'automatisation.",
          icon: "lab",
          points: ["Failure Intelligence", "Simulation", "Replay mode", "QA"]
        }
      ] as Pillar[]
    },
    operations: {
      eyebrow: "Operations",
      title: "Un command center plus calme pour les equipes hotelieres.",
      body:
        "Les equipes voient ce que le client demande, ce que l'IA gere, ce qui exige un jugement humain et ou agir maintenant.",
      features: [
        ["Routage workflows", "Classez conversations routinieres, urgentes, revenu ou sensibles aux politiques."],
        ["Human takeover", "La reception intervient avec contexte lorsque le jugement est necessaire."],
        ["Pense pour le PMS", "Structurez donnees autour reservations, folios, arrivees et politiques."]
      ],
      cards: [
        ["92%", "Préparation arrivée clients", "Identifie documents, heure d'arrivee, demandes et preparation chambre.", "arrivees pretes"],
        ["38%", "Focus reception", "L'IA absorbe le repetitif et garde au staff les moments de jugement.", "moins de repetitif"],
        ["<2m", "Service recovery", "Escalade les incidents selon intention, urgence ou sentiment.", "alerte prioritaire"]
      ]
    },
    revenue: {
      eyebrow: "Revenu & Experiences",
      title: "Transformez l'intention client en revenu hospitality.",
      body:
        "Staynex affiche experiences, partenaires, services et upgrades pertinents dans le parcours, avec reporting clair.",
      list: [
        "Offres late check-out alignees sur l'occupation",
        "Partenaires et excursions avec contexte reservation",
        "Spa, restaurant et transport recommandes",
        "Reporting upsells et intention"
      ],
      previewTitle: "Opportunites du week-end",
      rows: [
        ["Transfert aeroport", "Arrivees apres 20:00", "+18% intention"],
        ["Excursion sunset", "Couples et familles", "+31% intention"],
        ["Upgrade spa", "Fenetre pluie", "+24% intention"]
      ]
    },
    reception: {
      eyebrow: "Reception / Pre Check-in",
      title: "Intelligence d'arrivee avant la pression du front desk.",
      body:
        "Staynex aide la reception a preparer chaque arrivee avec guest lookup, pre check-in, folio preview et readiness operationnelle.",
      visualEyebrow: "Pre check-in",
      arrivals: "Arrivees du jour",
      guests: [
        ["Elena Costa", "Documents complets", "Pret"],
        ["Martin Keller", "Folio a revoir", "Revoir"],
        ["Ari Nguyen", "Arrivee a 21:40", "Pret"]
      ],
      folioTitle: "Folio preview",
      folioBody: "Solde, notes chambre et preferences avant le pic d'arrivees.",
      tiles: ["Pre check-in", "Guest lookup", "Folio preview", "Readiness operationnelle"]
    },
    whatsapp: {
      eyebrow: "IA + WhatsApp",
      title: "Rejoignez les clients la ou ils communiquent deja.",
      body:
        "Staynex fait de WhatsApp la couche client d'une plateforme operationnelle : conversation, reservation, human takeover et qualite.",
      header: "Staynex Concierge",
      online: "Online",
      chat: [
        ["guest", "Bonjour, puis-je faire le check-in avant d'arriver ?"],
        ["ai", "Oui. Je peux vous aider a completer le pre check-in et confirmer votre heure d'arrivee."],
        ["guest", "Avez-vous des sorties bateau demain ?"],
        ["ai", "Notre partenaire d’expériences propose ces options pour demain. Préférez-vous une option privée ou partagée ?"]
      ],
      cards: [
        ["WhatsApp natif", "Conversations simples cote client et riches cote operations."],
        ["Multilingue", "Support des clients internationaux avant, pendant et apres sejour."],
        ["Couverture 24/7", "Gere les moments repetitifs avec chemins d'escalade clairs."],
        ["Human takeover", "Route les interactions sensibles ou VIP vers l'equipe avec contexte."]
      ]
    },
    health: {
      eyebrow: "Hotel Health & Monitoring",
      title: "Visibilite operationnelle pour l'hospitality avec IA.",
      body:
        "Surveillez qualite des parcours, escalades, conversations non resolues, intention revenu et gaps de politique.",
      link: "Voir la couche health",
      alert: "Alerte : 3 parcours pre-arrivee demandent une revue politique avant 18:00.",
      signals: [
        ["Confiance IA", "97.4%", "green"],
        ["Parcours non resolus", "12", "amber"],
        ["Escalades", "4", "coral"],
        ["Intentions revenu", "86", "blue"]
      ] as [string, string, Tone][]
    },
    lab: {
      eyebrow: "AI Quality Lab",
      title: "Ameliorez l'IA avant que les clients voient les cas limites.",
      body:
        "Staynex est concu pour l'apprentissage operationnel : testez, rejouez et comprenez les echecs.",
      features: [
        ["Failure Intelligence", "Comprenez ou l'IA bloque, quelle politique manque et quel contexte enrichir."],
        ["Long Journey Simulation", "Simulez des conversations multi-jours avec pre-arrivee, sejour et upsell."],
        ["Replay mode", "Rejouez les parcours pas a pas pour comparer qualite et handover."]
      ]
    },
    demo: {
      eyebrow: "Demo",
      title: "Voir Staynex en action",
      body:
        "Un seul parcours peut declencher WhatsApp, readiness reception, partenaire, monitoring IA et human takeover. L'histoire produit reste operationnelle.",
      phoneTitle: "Staynex Concierge",
      phoneStatus: "IA + humain pret",
      chat: [
        ["guest", "Puis-je arriver plus tot et reserver un transfert ?"],
        ["ai", "Oui. J'ai trouve votre reservation et prepare des options de transfert."],
        ["guest", "Envoyez une option privee."],
        ["ai", "C'est fait. La reception a votre heure d'arrivee et la demande partenaire."]
      ],
      flowTitle: "Flux demo live",
      flowCount: "5 etapes connectees",
      flow: [
        ["Conversation WhatsApp", "Le client demande arrivee anticipee et transfert", "Staynex repond et verifie ce que la reception doit savoir."],
        ["Dashboard reception", "La readiness se met a jour en direct", "Documents, arrivee, folio et notes restent visibles."],
        ["Reservation partenaire", "Les options transfert sont envoyees", "Le client recoit des partenaires sans quitter la conversation."],
        ["Monitoring IA", "Qualite et escalation sont suivies", "Confiance, politique et etapes ouvertes restent controlees."],
        ["Human takeover", "Le staff intervient quand le jugement compte", "Reception recoit contexte, urgence et historique."]
      ],
      monitoring: "Monitoring IA",
      score: "confiance du parcours",
      checks: ["Politique validee", "Partenaire envoye", "Reception mise a jour", "Human takeover disponible"],
      ctaPrimary: "Demander une demo",
      ctaSecondary: "Contacter l'equipe"
    },
    form: {
      eyebrow: "Demander une demo",
      title: "Parlez-nous de votre hotel",
      body: "Partagez quelques details et l'equipe Staynex vous recontactera avec une demo adaptee.",
      name: "Nom",
      company: "Hotel / Entreprise",
      email: "Email",
      rooms: "Nombre de chambres",
      message: "Message",
      submit: "Demander une demo",
      success: "Merci. Nous vous contacterons bientot."
    },
    finalCta: {
      eyebrow: "Pret",
      title: "Pret a voir Staynex en action ?",
      body:
        "Montrez a votre equipe comment communication client, operations, revenu et qualite IA fonctionnent ensemble.",
      primary: "Demander une demo",
      secondary: "Explorer la plateforme"
    },
    contact: {
      eyebrow: "Contact",
      title: "Concu pour les hotels prets a operationaliser l'IA.",
      body: "Base commerciale preparee pour pilotes, demos, investisseurs et lancement public futur.",
      cardBody: "Fondation preparee pour SEO, analytics, CMS et expansion multilingue."
    },
    footer: {
      body: "Site commercial public pour operations hotelieres enterprise avec IA.",
      legal: "Legal placeholder"
    }
  }
} as const;

export type Translation = (typeof translations)[Locale];

export function getNavItems(t: Translation) {
  return [
    { label: t.nav.product, href: "#product" },
    { label: t.nav.operations, href: "#operations" },
    { label: t.nav.revenue, href: "#revenue" },
    { label: t.nav.preCheckin, href: "#reception" },
    { label: t.nav.aiWhatsapp, href: "#ai-whatsapp" },
    { label: t.nav.health, href: "#health" },
    { label: t.nav.demo, href: "#demo" },
    { label: t.nav.contact, href: "#contact" }
  ];
}
