export const locales = ["es", "en", "fr"] as const;
export type Locale = (typeof locales)[number];
const es = {
  "meta": {
    "descriptor": "Hospitality con IA",
    "headline": "Cuida de tus huéspedes en cada momento de su estancia.",
    "description": "Hospedios combina atención con IA y coordinación con tu equipo para acompañar al huésped antes, durante y después de su visita."
  },
  "nav": {
    "benefits": "Beneficios",
    "journey": "La estancia",
    "team": "Tu equipo",
    "requestDemo": "Solicitar una presentación",
    "open": "Abrir menú",
    "close": "Cerrar menú",
    "main": "Navegación principal",
    "language": "Idioma",
    "home": "Hospedios · Inicio",
    "skip": "Ir al contenido"
  },
  "hero": {
    "secondary": "Descubrir Hospedios",
    "example": "Ejemplo ilustrativo",
    "hotel": "Tu hotel, cerca del huésped",
    "guest": "Huésped",
    "assistant": "Equipo del hotel · con ayuda de IA",
    "question": "Llegamos con niños. ¿Qué nos recomendáis para la tarde?",
    "answer": "¿Os apetece un plan tranquilo cerca del hotel o preferís una actividad al aire libre?",
    "note": "Una conversación que empieza por escuchar.",
    "stages": [
      "Antes",
      "Durante",
      "Después"
    ]
  },
  "benefits": {
    "eyebrow": "Hospitalidad, con más tiempo",
    "title": "Más cerca del huésped. Más fácil para tu equipo.",
    "body": "Cada consulta es una ocasión para atender mejor. Hospedios ayuda a dar continuidad a la conversación y a que el equipo encuentre lo que necesita para actuar.",
    "cards": [
      {
        "title": "Más atención al huésped",
        "body": "Respuestas útiles y acompañamiento en los momentos que importan. Con la información disponible del hotel, para que el huésped pueda decidir su siguiente paso."
      },
      {
        "title": "Más tiempo para tu equipo",
        "body": "Menos consultas repetitivas y peticiones organizadas para actuar. El equipo conserva el contexto y puede centrarse en lo que requiere atención personal."
      },
      {
        "title": "Más oportunidades para tu hotel",
        "body": "Servicios y propuestas relevantes para cada momento de la estancia. Una recomendación que encaja con la necesidad del huésped, sin convertir cada conversación en una venta."
      }
    ]
  },
  "journey": {
    "eyebrow": "Una relación que continúa",
    "title": "Antes, durante y después.",
    "body": "El acompañamiento se adapta al momento del huésped y a lo que tu hotel puede ofrecer.",
    "cards": [
      {
        "title": "Antes de llegar",
        "body": "Ayuda con dudas, preparativos y servicios para la llegada. El huésped puede compartir lo que necesita y llegar mejor orientado."
      },
      {
        "title": "Durante la estancia",
        "body": "Resuelve consultas habituales y facilita que las peticiones lleguen al equipo adecuado, con el contexto necesario para atenderlas."
      },
      {
        "title": "Después de la visita",
        "body": "Mantiene abierta la relación para próximas consultas y nuevas estancias, cuando el canal, los datos disponibles y los permisos lo permiten."
      }
    ]
  },
  "team": {
    "eyebrow": "IA y equipo, trabajando juntos",
    "title": "La atención sigue siendo humana.",
    "paragraphs": [
      "La IA ayuda con las consultas habituales y la información del hotel.",
      "Las solicitudes que requieren actuación llegan al equipo; las personas aportan criterio y atención donde más importa.",
      "El hotel mantiene el control de cómo atiende y de cuándo interviene su personal."
    ],
    "connection": "Conectamos Hospedios con la información y los sistemas de tu hotel, según sus posibilidades de integración.",
    "labels": [
      "Escuchar",
      "Dar contexto",
      "Atender"
    ]
  },
  "form": {
    "eyebrow": "Hablemos de tu hotel",
    "title": "Descubre qué puede aportar Hospedios a tu hotel.",
    "body": "Cuéntanos cómo atendéis hoy a vuestros huéspedes y te mostraremos cómo podría encajar Hospedios.",
    "name": "Nombre",
    "company": "Hotel o empresa",
    "email": "Correo profesional",
    "message": "Mensaje (opcional)",
    "hint": "Puedes contarnos qué consultas recibe tu equipo con más frecuencia. No incluyas datos personales de huéspedes.",
    "unavailable": "El envío desde esta web todavía no está disponible. No se ha enviado ninguna solicitud.",
    "sending": "Enviando solicitud…",
    "invalid": "Revisa los campos indicados.",
    "required": "Completa este campo.",
    "emailError": "Introduce un correo válido.",
    "tooLong": "El texto supera el límite permitido.",
    "success": "Tu solicitud se ha enviado. Gracias por tu interés en Hospedios.",
    "rejected": "No hemos podido enviar tu solicitud. Tus datos siguen en el formulario para que puedas intentarlo de nuevo.",
    "unconfirmed": "No hemos podido confirmar el envío. Para evitar duplicados, espera antes de intentarlo de nuevo.",
    "challenge": "No se ha enviado la solicitud. Completa o renueva la comprobación de seguridad y vuelve a intentarlo.",
    "storage": "No se ha iniciado el envío: el navegador no permite guardar el estado del intento. Habilita el almacenamiento de sesión para evitar duplicados.",
    "invalidValue": "Revisa este valor: contiene caracteres no admitidos.",
    "recovery": "Puedes consultarnos por correo antes de volver a enviar el formulario. El enlace abre tu programa de correo; no envía ningún mensaje automáticamente.",
    "recoveryAction": "Consultar mi solicitud por correo",
    "openEmail": "Abrir mi programa de correo (no envía la solicitud automáticamente).",
    "privacy": "Usa solo tus datos de contacto profesional para esta solicitud. No se solicita consentimiento de marketing."
  },
  "footer": {
    "body": "Hospitalidad que acompaña. Tecnología que ayuda.",
    "nav": "Enlaces del pie",
    "contact": "Contacto"
  }
};
type Copy = typeof es;
const en: Copy = {
  "meta": {
    "descriptor": "Hospitality with AI",
    "headline": "Care for your guests at every stage of their stay.",
    "description": "Hospedios brings AI assistance and team coordination together to support guests before, during and after their visit."
  },
  "nav": {
    "benefits": "Benefits",
    "journey": "The stay",
    "team": "Your team",
    "requestDemo": "Request a presentation",
    "open": "Open menu",
    "close": "Close menu",
    "main": "Main navigation",
    "language": "Language",
    "home": "Hospedios · Home",
    "skip": "Skip to content"
  },
  "hero": {
    "secondary": "Discover Hospedios",
    "example": "Illustrative example",
    "hotel": "Your hotel, closer to your guests",
    "guest": "Guest",
    "assistant": "Hotel team · supported by AI",
    "question": "We're arriving with children. What would you recommend for the afternoon?",
    "answer": "Would you like something relaxing near the hotel, or would you prefer an outdoor activity?",
    "note": "A conversation that starts with listening.",
    "stages": [
      "Before",
      "During",
      "After"
    ]
  },
  "benefits": {
    "eyebrow": "More time for hospitality",
    "title": "Closer to your guests. Easier for your team.",
    "body": "Every question is an opportunity to offer better care. Hospedios helps keep conversations connected and gives your team the context they need to act.",
    "cards": [
      {
        "title": "More care for your guests",
        "body": "Useful answers and support when it matters. Using available hotel information to help guests decide what to do next."
      },
      {
        "title": "More time for your team",
        "body": "Fewer repetitive questions and requests organised for action. Staff keep the context and can focus on what needs personal attention."
      },
      {
        "title": "More opportunities for your hotel",
        "body": "Relevant services and suggestions for each stage of the stay. Recommendations that fit a guest's needs, without turning every conversation into a sale."
      }
    ]
  },
  "journey": {
    "eyebrow": "A relationship that continues",
    "title": "Before, during and after.",
    "body": "Support that adapts to each guest's moment and what your hotel can offer.",
    "cards": [
      {
        "title": "Before arrival",
        "body": "Help with questions, preparations and arrival services. Guests can share what they need and arrive better informed."
      },
      {
        "title": "During the stay",
        "body": "Answer everyday questions and help requests reach the right team, with the context needed to handle them."
      },
      {
        "title": "After the visit",
        "body": "Keep the relationship open for future questions and stays, where the channel, available data and permissions allow."
      }
    ]
  },
  "team": {
    "eyebrow": "AI and your team, working together",
    "title": "Care remains human.",
    "paragraphs": [
      "AI helps with everyday questions and hotel information.",
      "Requests that need action reach the team; people bring judgement and personal care where it matters most.",
      "The hotel stays in control of its service and when staff step in."
    ],
    "connection": "We connect Hospedios with your hotel's information and systems, according to their integration capabilities.",
    "labels": [
      "Listen",
      "Add context",
      "Care"
    ]
  },
  "form": {
    "eyebrow": "Let's talk about your hotel",
    "title": "Discover what Hospedios could bring to your hotel.",
    "body": "Tell us how you support your guests today and we'll show you how Hospedios could fit.",
    "name": "Name",
    "company": "Hotel or company",
    "email": "Work email",
    "message": "Message (optional)",
    "hint": "Tell us which questions your team receives most often. Do not include guests' personal data.",
    "unavailable": "Submitting requests from this website is not available yet. No request has been sent.",
    "sending": "Sending request…",
    "invalid": "Check the indicated fields.",
    "required": "Complete this field.",
    "emailError": "Enter a valid email.",
    "tooLong": "The text exceeds the allowed limit.",
    "success": "Your request has been sent. Thank you for your interest in Hospedios.",
    "rejected": "We couldn’t send your request. Your details are still in the form so you can try again.",
    "unconfirmed": "We couldn’t confirm whether your request was sent. To avoid duplicates, please wait before trying again.",
    "challenge": "The request has not been sent. Complete or renew the security check and try again.",
    "storage": "Sending has not started: your browser cannot store the attempt status. Enable session storage to help prevent duplicates.",
    "invalidValue": "Check this value: it contains unsupported characters.",
    "recovery": "You can contact us by email before submitting the form again. The link opens your email app; it does not send a message automatically.",
    "recoveryAction": "Ask about my request by email",
    "openEmail": "Open my email app (does not send the request automatically).",
    "privacy": "Use only your professional contact details for this request. Marketing consent is not requested."
  },
  "footer": {
    "body": "Hospitality that cares. Technology that helps.",
    "nav": "Footer links",
    "contact": "Contact"
  }
};
const fr: Copy = {
  "meta": {
    "descriptor": "L’hospitalité avec l’IA",
    "headline": "Prenez soin de vos clients à chaque étape de leur séjour.",
    "description": "Hospedios associe assistance par IA et coordination avec votre équipe pour accompagner les clients avant, pendant et après leur visite."
  },
  "nav": {
    "benefits": "Bénéfices",
    "journey": "Le séjour",
    "team": "Votre équipe",
    "requestDemo": "Demander une présentation",
    "open": "Ouvrir le menu",
    "close": "Fermer le menu",
    "main": "Navigation principale",
    "language": "Langue",
    "home": "Hospedios · Accueil",
    "skip": "Aller au contenu"
  },
  "hero": {
    "secondary": "Découvrir Hospedios",
    "example": "Exemple illustratif",
    "hotel": "Votre hôtel, proche de ses clients",
    "guest": "Client",
    "assistant": "Équipe de l’hôtel · aidée par l’IA",
    "question": "Nous arrivons avec des enfants. Que conseillez-vous pour l’après-midi ?",
    "answer": "Préférez-vous une sortie tranquille près de l’hôtel ou une activité en plein air ?",
    "note": "Une conversation qui commence par l’écoute.",
    "stages": [
      "Avant",
      "Pendant",
      "Après"
    ]
  },
  "benefits": {
    "eyebrow": "Plus de temps pour l’hospitalité",
    "title": "Plus proche des clients. Plus simple pour l’équipe.",
    "body": "Chaque question est une occasion de mieux accueillir. Hospedios aide à suivre la conversation et donne à l’équipe le contexte nécessaire pour agir.",
    "cards": [
      {
        "title": "Plus d’attention pour les clients",
        "body": "Des réponses utiles et un accompagnement aux moments importants. Les informations disponibles de l’hôtel aident le client à choisir sa prochaine étape."
      },
      {
        "title": "Plus de temps pour votre équipe",
        "body": "Moins de questions répétitives et des demandes organisées pour agir. L’équipe conserve le contexte et peut se concentrer sur l’attention personnelle."
      },
      {
        "title": "Plus d’opportunités pour votre hôtel",
        "body": "Des services et suggestions adaptés à chaque étape du séjour. Une recommandation qui répond au besoin du client, sans transformer chaque échange en vente."
      }
    ]
  },
  "journey": {
    "eyebrow": "Une relation qui se poursuit",
    "title": "Avant, pendant et après.",
    "body": "Un accompagnement adapté au moment du client et à ce que votre hôtel peut proposer.",
    "cards": [
      {
        "title": "Avant l’arrivée",
        "body": "Aider à préparer le séjour et répondre aux questions sur les services d’arrivée. Le client peut partager ses besoins et arriver mieux informé."
      },
      {
        "title": "Pendant le séjour",
        "body": "Répondre aux questions courantes et faciliter la transmission des demandes à la bonne équipe, avec le contexte nécessaire."
      },
      {
        "title": "Après la visite",
        "body": "Garder la relation ouverte pour de prochaines questions et séjours, lorsque le canal, les données disponibles et les autorisations le permettent."
      }
    ]
  },
  "team": {
    "eyebrow": "L’IA et l’équipe, ensemble",
    "title": "L’attention reste humaine.",
    "paragraphs": [
      "L’IA aide à répondre aux questions courantes sur l’hôtel.",
      "Les demandes nécessitant une intervention arrivent à l’équipe ; les personnes apportent leur jugement et leur attention.",
      "L’hôtel garde le contrôle de son accueil et de l’intervention de son personnel."
    ],
    "connection": "Nous relions Hospedios aux informations et systèmes de votre hôtel, selon leurs possibilités d’intégration.",
    "labels": [
      "Écouter",
      "Comprendre",
      "Accompagner"
    ]
  },
  "form": {
    "eyebrow": "Parlons de votre hôtel",
    "title": "Découvrez ce qu’Hospedios pourrait apporter à votre hôtel.",
    "body": "Expliquez-nous comment vous accompagnez vos clients aujourd’hui et nous vous montrerons comment Hospedios pourrait s’y intégrer.",
    "name": "Nom",
    "company": "Hôtel ou entreprise",
    "email": "E-mail professionnel",
    "message": "Message (facultatif)",
    "hint": "Indiquez les questions que votre équipe reçoit le plus souvent. N’incluez pas de données personnelles de clients.",
    "unavailable": "L’envoi depuis ce site n’est pas encore disponible. Aucune demande n’a été envoyée.",
    "sending": "Envoi en cours…",
    "invalid": "Vérifiez les champs indiqués.",
    "required": "Complétez ce champ.",
    "emailError": "Saisissez un e-mail valide.",
    "tooLong": "Le texte dépasse la limite autorisée.",
    "success": "Votre demande a été envoyée. Merci de votre intérêt pour Hospedios.",
    "rejected": "Nous n’avons pas pu envoyer votre demande. Vos informations sont conservées dans le formulaire pour que vous puissiez réessayer.",
    "unconfirmed": "Nous n’avons pas pu confirmer l’envoi. Pour éviter les doublons, patientez avant de réessayer.",
    "challenge": "La demande n’a pas été envoyée. Effectuez ou renouvelez la vérification de sécurité, puis réessayez.",
    "storage": "L’envoi n’a pas commencé : le navigateur ne peut pas conserver le statut de la tentative. Autorisez le stockage de session pour éviter les doublons.",
    "invalidValue": "Vérifiez cette valeur : elle contient des caractères non autorisés.",
    "recovery": "Vous pouvez nous contacter par e-mail avant de renvoyer le formulaire. Le lien ouvre votre messagerie ; aucun message n’est envoyé automatiquement.",
    "recoveryAction": "Nous contacter au sujet de ma demande",
    "openEmail": "Ouvrir mon logiciel de messagerie (n’envoie pas automatiquement la demande).",
    "privacy": "Utilisez uniquement vos coordonnées professionnelles pour cette demande. Aucun consentement marketing n’est demandé."
  },
  "footer": {
    "body": "Une hospitalité attentive. Une technologie utile.",
    "nav": "Liens de pied de page",
    "contact": "Contact"
  }
};
export const translations = {es,en,fr};
export const getNavItems = (t: Copy) => [{href:"#benefits",label:t.nav.benefits},{href:"#journeys",label:t.nav.journey},{href:"#team",label:t.nav.team}];
