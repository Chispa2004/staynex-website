import type { Locale } from "@/lib/translations";

type Tone = "green" | "amber" | "coral" | "blue" | "gold";
type Illustration = {
  example: string; tags: string[]; activity: string; sample: string;
  today: string; guestJourney: string; journey: string[];
  guestMessage: string; aiMessage: string; reception: string;
  arrivalReadiness: string; readinessBody: string; revenue: string;
  experienceSignals: string; revenueBody: string; hotelHealth: string;
  qualityMonitor: string; aiQualityLab: string; replayReady: string;
  replayBody: string; policyMatch: string; handoverTiming: string; feed: string;
  signals: [string, string, Tone][];
  notifications: [string, string, string, string, Tone][];
};

// Static editorial examples, never connected to product data or measured outcomes.
// Keep the original panel structure while adapting its copy to Hospedios.
export const heroIllustration: Record<Locale, Illustration> = {
  es: {
    example: "Ejemplo ilustrativo · datos simulados",
    tags: ["Atención al huésped", "Coordinación del equipo", "Oportunidades de venta"],
    activity: "Ejemplo de actividad", sample: "Ejemplo", today: "La estancia",
    guestJourney: "Recorrido del huésped", journey: ["Antes", "Llegada", "Estancia", "Planes", "Después"],
    guestMessage: "¿Podemos llegar antes y organizar un traslado?",
    aiMessage: "¿A qué hora llegáis? Os orientamos con las opciones del hotel.",
    reception: "Recepción", arrivalReadiness: "Preparación de llegadas",
    readinessBody: "11 de 12 llegadas con preparativos revisados en este ejemplo.",
    revenue: "Servicios y experiencias", experienceSignals: "Propuestas para la estancia",
    revenueBody: "Spa, traslados y planes: intereses ilustrativos para orientar la atención.",
    hotelHealth: "Seguimiento de la atención", qualityMonitor: "Cada petición, con contexto",
    signals: [["Consultas atendidas", "8", "green"], ["Peticiones en curso", "3", "blue"], ["Pendientes de revisión", "2", "amber"], ["Relevo del equipo", "Listo", "green"]],
    aiQualityLab: "Actividad del equipo", replayReady: "El siguiente paso, claro",
    replayBody: "Recepción revisa una llegada. Limpieza atiende una petición de toallas.",
    policyMatch: "Contexto compartido", handoverTiming: "Control humano", feed: "Actividad del equipo",
    notifications: [
      ["Solicitud de traslado", "Huésped", "09:12", "Por revisar", "green"],
      ["Salida tardía confirmada", "Recepción", "09:10", "Confirmada", "blue"],
      ["Dos toallas para la habitación", "Limpieza", "09:08", "En curso", "amber"],
      ["Interés en una experiencia", "Servicios", "09:05", "Propuesta", "gold"],
      ["Consulta sobre el desayuno", "Atención", "09:02", "Atendida", "green"]
    ]
  },
  en: {
    example: "Illustrative example · simulated data",
    tags: ["Guest assistance", "Team coordination", "Sales opportunities"],
    activity: "Example activity", sample: "Example", today: "The stay",
    guestJourney: "The guest journey", journey: ["Before", "Arrival", "Stay", "Plans", "After"],
    guestMessage: "Can we arrive early and arrange a transfer?",
    aiMessage: "What time will you arrive? We can guide you through the hotel's options.",
    reception: "Reception", arrivalReadiness: "Arrival preparation",
    readinessBody: "Preparations reviewed for 11 of 12 arrivals in this example.",
    revenue: "Services and experiences", experienceSignals: "Ideas for the stay",
    revenueBody: "Spa, transfers and activities: illustrative interests to guide assistance.",
    hotelHealth: "Following up on requests", qualityMonitor: "Every request, in context",
    signals: [["Enquiries answered", "8", "green"], ["Requests in progress", "3", "blue"], ["Awaiting review", "2", "amber"], ["Team handover", "Ready", "green"]],
    aiQualityLab: "Team activity", replayReady: "A clear next step",
    replayBody: "Reception reviews an arrival. Housekeeping handles a request for towels.",
    policyMatch: "Shared context", handoverTiming: "Human control", feed: "Team activity",
    notifications: [
      ["Transfer requested", "Guest", "09:12", "To review", "green"],
      ["Late checkout confirmed", "Reception", "09:10", "Confirmed", "blue"],
      ["Two towels for the room", "Housekeeping", "09:08", "In progress", "amber"],
      ["Interest in an experience", "Services", "09:05", "Suggestion", "gold"],
      ["Breakfast enquiry", "Assistance", "09:02", "Answered", "green"]
    ]
  },
  fr: {
    example: "Exemple illustratif · données simulées",
    tags: ["Attention au client", "Coordination de l’équipe", "Opportunités de vente"],
    activity: "Exemple d’activité", sample: "Exemple", today: "Le séjour",
    guestJourney: "Le parcours du client", journey: ["Avant", "Arrivée", "Séjour", "Loisirs", "Après"],
    guestMessage: "Peut-on arriver plus tôt et organiser un transfert ?",
    aiMessage: "À quelle heure arrivez-vous ? Nous vous présentons les options de l’hôtel.",
    reception: "Réception", arrivalReadiness: "Préparation des arrivées",
    readinessBody: "Préparatifs vérifiés pour 11 arrivées sur 12 dans cet exemple.",
    revenue: "Services et expériences", experienceSignals: "Des idées pour le séjour",
    revenueBody: "Spa, transferts et sorties : des intérêts illustratifs pour guider l’accueil.",
    hotelHealth: "Suivi des demandes", qualityMonitor: "Chaque demande, en contexte",
    signals: [["Questions traitées", "8", "green"], ["Demandes en cours", "3", "blue"], ["À examiner", "2", "amber"], ["Relais de l’équipe", "Prêt", "green"]],
    aiQualityLab: "Activité de l’équipe", replayReady: "Une prochaine étape claire",
    replayBody: "La réception prépare une arrivée. L’équipe d’étage traite une demande de serviettes.",
    policyMatch: "Contexte partagé", handoverTiming: "Contrôle humain", feed: "Activité de l’équipe",
    notifications: [
      ["Demande de transfert", "Client", "09:12", "À examiner", "green"],
      ["Départ tardif confirmé", "Réception", "09:10", "Confirmé", "blue"],
      ["Deux serviettes en chambre", "Étage", "09:08", "En cours", "amber"],
      ["Intérêt pour une expérience", "Services", "09:05", "Proposition", "gold"],
      ["Question sur le petit-déjeuner", "Accueil", "09:02", "Traitée", "green"]
    ]
  }
};
