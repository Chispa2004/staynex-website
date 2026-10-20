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
    "body": "Una atención que acompaña al huésped en cada etapa.",
    "cards": [
      {
        "phase": "Antes de la llegada",
        "title": "La bienvenida empieza antes de llegar.",
        "body": "Ayuda al huésped a resolver dudas, preparar su llegada y conocer los servicios del hotel.",
        "tags": ["Llegada", "Traslados", "Servicios", "WhatsApp"],
        "question": "Llegaremos por la noche. ¿Cómo podemos organizar la llegada?",
        "answer": "¿A qué hora tenéis previsto llegar? Os orientamos con las indicaciones del hotel.",
        "flow": ["Consulta", "Información del hotel", "Preparativos"]
      },
      {
        "phase": "Durante la estancia",
        "title": "Cada petición, en buenas manos.",
        "body": "Resuelve consultas habituales y organiza las solicitudes para que el equipo adecuado pueda atenderlas con contexto.",
        "tags": ["Consultas", "Limpieza", "Mantenimiento", "Atención humana"],
        "question": "¿Podéis traernos dos toallas?",
        "answer": "Claro, hemos anotado dos toallas para vuestra habitación.",
        "flow": ["Petición", "Solicitud registrada", "Equipo del hotel"]
      },
      {
        "phase": "Después de la visita",
        "title": "La relación continúa después de la despedida.",
        "body": "Facilita las consultas posteriores y acompaña el interés del huésped por volver a alojarse.",
        "tags": ["Consultas", "Objetos olvidados", "Próxima estancia"],
        "question": "Nos gustaría volver en noviembre.",
        "answer": "¡Nos encantará volver a recibiros! ¿Qué fechas tenéis en mente?",
        "flow": ["Conversación", "Nueva consulta", "Próxima visita"]
      }
    ]
  },
  "team": {
    "eyebrow": "IA y equipo, trabajando juntos",
    "title": "Conversaciones cercanas. Un equipo con el control.",
    "chat": ["Viajamos con niños. ¿Qué podemos hacer por la tarde?", "¿Preferís un paseo tranquilo o una actividad al aire libre?", "Algo al aire libre.", "Podemos orientaros con las experiencias recomendadas por el hotel."],
    "cards": [
      {"title": "Por WhatsApp", "body": "Un canal familiar para preguntar y compartir lo que necesita."},
      {"title": "En su idioma", "body": "Una atención más sencilla para huéspedes de distintos países."},
      {"title": "Atención con IA", "body": "Ayuda con las consultas habituales y orienta al huésped cuando necesita al equipo."},
      {"title": "El equipo toma el relevo", "body": "Las personas intervienen con el contexto de la conversación."}
    ]
  },
  "form": {
    "preparing": "Estamos preparando nuestro canal de contacto. Pronto podrás solicitar una presentación de Hospedios.",
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
    "body": "Care that supports guests at every stage.",
    "cards": [
      {
        "phase": "Before arrival",
        "title": "A warm welcome starts before arrival.",
        "body": "Help guests find answers, prepare for their arrival and discover the hotel’s services.",
        "tags": ["Arrival", "Transfers", "Services", "WhatsApp"],
        "question": "We’ll be arriving at night. How can we plan our arrival?",
        "answer": "What time do you expect to arrive? We can guide you using the hotel’s arrival information.",
        "flow": ["Question", "Hotel information", "Preparations"]
      },
      {
        "phase": "During the stay",
        "title": "Every request, in good hands.",
        "body": "Answer everyday questions and organise requests so the right team can handle them with context.",
        "tags": ["Questions", "Housekeeping", "Maintenance", "Personal care"],
        "question": "Could you bring us two towels?",
        "answer": "Of course, we’ve noted a request for two towels for your room.",
        "flow": ["Request", "Request recorded", "Hotel team"]
      },
      {
        "phase": "After the visit",
        "title": "The relationship continues after goodbye.",
        "body": "Help with follow-up questions and support guests who would like to stay again.",
        "tags": ["Questions", "Lost property", "Next stay"],
        "question": "We’d like to come back in November.",
        "answer": "We’d love to welcome you back! What dates do you have in mind?",
        "flow": ["Conversation", "New enquiry", "Next visit"]
      }
    ]
  },
  "team": {
    "eyebrow": "AI and your team, working together",
    "title": "Friendly conversations. Your team in control.",
    "chat": ["We’re travelling with children. What could we do this afternoon?", "Would you prefer a gentle walk or an outdoor activity?", "Something outdoors.", "We can guide you through experiences recommended by the hotel."],
    "cards": [
      {"title": "On WhatsApp", "body": "A familiar channel for guests to ask questions and share what they need."},
      {"title": "In their language", "body": "Simpler communication for guests from different countries."},
      {"title": "AI-assisted care", "body": "Help with everyday questions and guidance when guests need the team."},
      {"title": "The team takes over", "body": "People step in with the context of the conversation."}
    ]
  },
  "form": {
    "preparing": "We’re preparing our contact channel. Soon you’ll be able to request a presentation of Hospedios.",
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
    "body": "Une attention qui accompagne le client à chaque étape.",
    "cards": [
      {
        "phase": "Avant l’arrivée",
        "title": "L’accueil commence avant l’arrivée.",
        "body": "Aidez le client à trouver des réponses, à préparer son arrivée et à découvrir les services de l’hôtel.",
        "tags": ["Arrivée", "Transferts", "Services", "WhatsApp"],
        "question": "Nous arriverons de nuit. Comment organiser notre arrivée ?",
        "answer": "À quelle heure pensez-vous arriver ? Nous vous guiderons avec les indications de l’hôtel.",
        "flow": ["Question", "Informations de l’hôtel", "Préparatifs"]
      },
      {
        "phase": "Pendant le séjour",
        "title": "Chaque demande, entre de bonnes mains.",
        "body": "Répondez aux questions courantes et organisez les demandes pour que la bonne équipe puisse les traiter avec le contexte nécessaire.",
        "tags": ["Questions", "Ménage", "Maintenance", "Attention humaine"],
        "question": "Pourriez-vous nous apporter deux serviettes ?",
        "answer": "Bien sûr, nous avons noté une demande de deux serviettes pour votre chambre.",
        "flow": ["Demande", "Demande enregistrée", "Équipe de l’hôtel"]
      },
      {
        "phase": "Après la visite",
        "title": "La relation se poursuit après le départ.",
        "body": "Facilitez les échanges après le séjour et accompagnez les clients qui souhaitent revenir.",
        "tags": ["Questions", "Objets oubliés", "Prochain séjour"],
        "question": "Nous aimerions revenir en novembre.",
        "answer": "Nous serions ravis de vous accueillir à nouveau ! À quelles dates pensez-vous ?",
        "flow": ["Conversation", "Nouvelle question", "Prochaine visite"]
      }
    ]
  },
  "team": {
    "eyebrow": "L’IA et l’équipe, ensemble",
    "title": "Des échanges chaleureux. Une équipe qui garde la main.",
    "chat": ["Nous voyageons avec des enfants. Que pouvons-nous faire cet après-midi ?", "Préférez-vous une promenade tranquille ou une activité en plein air ?", "Quelque chose en plein air.", "Nous pouvons vous orienter vers les expériences recommandées par l’hôtel."],
    "cards": [
      {"title": "Sur WhatsApp", "body": "Un canal familier pour poser des questions et partager ses besoins."},
      {"title": "Dans sa langue", "body": "Des échanges plus simples pour les clients de différents pays."},
      {"title": "Une attention avec l’IA", "body": "Une aide pour les questions courantes et une orientation vers l’équipe lorsque le client en a besoin."},
      {"title": "L’équipe prend le relais", "body": "Les personnes interviennent avec le contexte de la conversation."}
    ]
  },
  "form": {
    "preparing": "Nous préparons notre canal de contact. Vous pourrez bientôt demander une présentation d’Hospedios.",
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
