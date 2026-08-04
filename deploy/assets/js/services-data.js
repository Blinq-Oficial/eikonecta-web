/**
 * EIKONECTA — Services Data
 * Dynamic content for all 7 service detail pages.
 * Template reads URL param ?s=slug to load the right service.
 */
const SERVICES_DATA = {
  "gran-formato": {
    slug: "gran-formato",
    label: "SERVICIO 01",
    name: "Gran Formato",
    heroTitle: "Tu competencia domina las calles.",
    heroHighlight: "¿Y tu marca?",
    heroSubtitle: "Pendones, vallas, avisos y murales que convierten cada esquina en un punto de venta. No vendemos lona — vendemos dominio territorial.",
    ctaText: "Cotizar Gran Formato",
    pains: [
      {
        icon: "visibility_off",
        title: "Eres invisible en tu zona",
        description: "Sin presencia física de alto impacto, los clientes pasan frente a tu negocio sin saber que existes. Tu competencia sí tiene aviso grande."
      },
      {
        icon: "thumb_down",
        title: "Material genérico y barato",
        description: "Un pendón mal diseñado o con colores deslavados comunica que tu empresa es improvisada. Pierdes credibilidad antes de hablar."
      },
      {
        icon: "trending_down",
        title: "Cero retorno de inversión",
        description: "Gastas en impresión sin estrategia. El resultado: material que nadie lee, que se deteriora en semanas y que no genera ni una llamada."
      }
    ],
    solution: {
      title: "Cómo lo hacemos diferente",
      subtitle: "Nuestro proceso elimina dolores de cabeza y maximiza resultados.",
      steps: [
        {
          icon: "architecture",
          title: "Diseño Estratégico",
          description: "No imprimimos tu archivo tal cual. Nuestro equipo rediseña y optimiza cada pieza para máximo impacto visual según su ubicación real."
        },
        {
          icon: "speed",
          title: "Producción Express",
          description: "Maquinaria de última generación que produce en horas, no semanas. Tintas UV resistentes a la intemperie con garantía de color."
        },
        {
          icon: "handshake",
          title: "Instalación Incluida",
          description: "No te dejamos solo con un rollo de lona. Coordinamos la instalación profesional para que tu marca se vea impecable desde el día uno."
        }
      ]
    },
    gallery: [
      { alt: "Pendón corporativo gran formato" },
      { alt: "Aviso luminoso exterior" },
      { alt: "Valla publicitaria Sincelejo" },
      { alt: "Mural impreso para evento" },
      { alt: "Banner roll-up para feria" },
      { alt: "Vinilo adhesivo en vitrina" }
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo dura una impresión en gran formato a la intemperie?",
        answer: "Con nuestras tintas UV y materiales premium, la durabilidad es de 2-5 años en exterior sin decoloración significativa. Para interiores, el tiempo se extiende considerablemente."
      },
      {
        question: "¿Puedo enviar mi propio diseño o necesito que ustedes lo hagan?",
        answer: "Aceptamos ambas opciones. Si tienes diseño, lo revisamos y optimizamos gratis para impresión. Si necesitas diseño desde cero, nuestro equipo creativo te entrega una propuesta en 24-48 horas."
      },
      {
        question: "¿Cuál es el tiempo de entrega?",
        answer: "Producción estándar: 3-5 días hábiles. Express (con recargo): 24-48 horas. Proyectos grandes o de construcción: según cronograma acordado. Siempre cumplimos plazos."
      }
    ],
    infrastructure: [
      { name: "Plotter de Impresión UV", desc: "Alta resolución hasta 1440 dpi con curado LED para colores vivos y duraderos a la intemperie." },
      { name: "Mesa de Corte Digital CNC", desc: "Corte automatizado de precisión para acabados perfectos en rígidos y flexibles." }
    ]
  },

  "branding": {
    slug: "branding",
    label: "SERVICIO 02",
    name: "Branding Estratégico",
    heroTitle: "Tu logo no convence.",
    heroHighlight: "Tu marca merece más.",
    heroSubtitle: "Identidad visual que posiciona tu empresa como líder de mercado y justifica precios premium. Dejamos de vender diseño — vendemos percepción de valor.",
    ctaText: "Cotizar Branding",
    pains: [
      {
        icon: "content_copy",
        title: "Tu marca se ve igual a todas",
        description: "Sin identidad visual diferenciada, los clientes no te recuerdan. Eres uno más en un mar de logos genéricos de Canva."
      },
      {
        icon: "money_off",
        title: "No puedes cobrar lo que vales",
        description: "Una marca amateur justifica precios bajos en la mente del cliente. Tu imagen dice 'económico' aunque tu servicio sea premium."
      },
      {
        icon: "sentiment_dissatisfied",
        title: "Inconsistencia visual total",
        description: "Cada pieza que produces tiene colores, fuentes y estilos diferentes. Esto destruye la confianza y la profesionalidad percibida."
      }
    ],
    solution: {
      title: "Nuestro Proceso de Branding",
      subtitle: "De lo invisible a lo inolvidable en 3 fases claras.",
      steps: [
        {
          icon: "search",
          title: "Diagnóstico de Marca",
          description: "Analizamos tu mercado, tu competencia y tu cliente ideal para definir el posicionamiento diferencial. Nada de diseñar a ciegas."
        },
        {
          icon: "brush",
          title: "Diseño del Sistema Visual",
          description: "Logo, paleta cromática, tipografía, manual de marca, papelería y aplicaciones digitales. Todo un ecosistema coherente."
        },
        {
          icon: "rocket_launch",
          title: "Implementación Total",
          description: "Aplicamos tu nueva identidad en cada punto de contacto: tarjetas, uniformes, señalética, redes sociales, vehículos. Coherencia absoluta."
        }
      ]
    },
    gallery: [
      { alt: "Manual de identidad corporativa" },
      { alt: "Diseño de logo corporativo" },
      { alt: "Papelería corporativa completa" },
      { alt: "Tarjetas de presentación premium" }
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta un proyecto de branding completo?",
        answer: "Depende del alcance. Desde una identidad básica (logo + paleta + tipografía) hasta un ecosistema completo con manual de marca, papelería, y señalética. Cotizamos según tu necesidad real."
      },
      {
        question: "¿Ya tengo logo, solo necesito mejorarlo. ¿Pueden hacer eso?",
        answer: "Absolutamente. Hacemos rediseños y refrescamientos de marca conservando la esencia pero elevando la percepción. Es nuestra especialidad con empresas que ya tienen trayectoria."
      },
      {
        question: "¿Incluyen los archivos editables?",
        answer: "Sí. Recibes todos los archivos en AI, PDF, PNG y formatos para web/redes. Además, el manual de marca con lineamientos de uso para que tu equipo aplique la identidad correctamente."
      }
    ],
    infrastructure: [
      { name: "Estudio Creativo Mac Studio", desc: "Estaciones de trabajo de alto rendimiento para renderizado y diseño vectorial sin latencia." },
      { name: "Servidores NAS", desc: "Respaldo seguro de todos los activos digitales de tu marca." }
    ]
  },

  "ambientacion": {
    slug: "ambientacion",
    label: "SERVICIO 03",
    name: "Ambientación de Espacios",
    heroTitle: "Tu local no vende.",
    heroHighlight: "Tu espacio debe trabajar por ti.",
    heroSubtitle: "Transformamos locales comerciales, oficinas y consultorios en experiencias inmersivas que envuelven al cliente desde que cruza la puerta.",
    ctaText: "Cotizar Ambientación",
    pains: [
      {
        icon: "domain_disabled",
        title: "Tu espacio comunica descuido",
        description: "Paredes vacías, señalización improvisada y muebles sin coherencia visual. El cliente siente que tu empresa es informal."
      },
      {
        icon: "compare_arrows",
        title: "Cero diferenciación espacial",
        description: "Tu consultorio o local se ve igual al de al lado. Nada dice 'esta es la empresa correcta' cuando alguien entra."
      },
      {
        icon: "person_off",
        title: "Clientes que no se quedan",
        description: "Un espacio frío y genérico no invita a quedarse, explorar ni comprar. Pierdes ventas cruzadas y tiempo de permanencia."
      }
    ],
    solution: {
      title: "Nuestra Metodología de Ambientación",
      subtitle: "De espacio genérico a embudo de ventas físico.",
      steps: [
        {
          icon: "straighten",
          title: "Levantamiento y Diagnóstico",
          description: "Visitamos tu espacio, medimos cada rincón y analizamos el flujo de clientes para diseñar una experiencia que guíe la mirada y la acción."
        },
        {
          icon: "design_services",
          title: "Diseño 3D y Renders",
          description: "Antes de tocar una pared, te mostramos renders fotorrealistas de cómo quedará tu espacio. Apruebas o ajustas sin riesgos."
        },
        {
          icon: "construction",
          title: "Ejecución e Instalación",
          description: "Producimos e instalamos todo: vinilos, acrílicos, iluminación, señalética y mobiliario decorativo. Un solo proveedor, cero complicaciones."
        }
      ]
    },
    gallery: [
      { alt: "Ambientación consultorio médico" },
      { alt: "Diseño interior tienda comercial" },
      { alt: "Señalización corporativa oficina" },
      { alt: "Vinilo decorativo recepción" },
      { alt: "Sala de espera ambientada" },
      { alt: "Fachada comercial renovada" }
    ],
    faqs: [
      {
        question: "¿Trabajan solo en Sincelejo o también fuera?",
        answer: "Atendemos proyectos en toda Colombia. Para proyectos fuera de Sincelejo, coordinamos logística y equipo de instalación."
      },
      {
        question: "¿Cuánto tiempo toma ambientar un local?",
        answer: "Depende del tamaño y complejidad. Un consultorio pequeño: 1-2 semanas. Un local comercial completo: 3-4 semanas. Siempre coordinamos horarios para no afectar tu operación."
      },
      {
        question: "¿Puedo ambientar solo una parte de mi espacio?",
        answer: "Por supuesto. Muchos clientes empiezan por la recepción o fachada y luego van ampliando. Diseñamos por fases para adaptarnos a tu presupuesto."
      }
    ],
    infrastructure: [
      { name: "Plotter de Corte de Vinilo", desc: "Corte de ultra precisión para gráficos de pared, rotulación y esmerilados." },
      { name: "Herramientas de Instalación Industrial", desc: "Equipos láser de nivelación y montaje para una instalación milimétrica in situ." }
    ]
  },

  "litografia": {
    slug: "litografia",
    label: "SERVICIO 04",
    name: "Litografía e Impresión",
    heroTitle: "Imprimir es fácil.",
    heroHighlight: "Imprimir bien, no.",
    heroSubtitle: "Material corporativo premium con acabados de nivel internacional: barniz UV, troquelado, stamping. La tangibilidad que genera confianza.",
    ctaText: "Cotizar Litografía",
    pains: [
      {
        icon: "blur_on",
        title: "Impresiones borrosas y baratas",
        description: "Colores deslavados, cortes torcidos y papel delgado. Cada tarjeta o catálogo barato que entregas dice 'no inviertas en mí'."
      },
      {
        icon: "timer_off",
        title: "Entregas impredecibles",
        description: "Prometen para el lunes y entregan el jueves. Tu evento ya pasó, tu oportunidad de negocio se perdió."
      },
      {
        icon: "error",
        title: "Errores costosos",
        description: "Tirajes completos con errores de color, texto o corte. Y el proveedor dice que 'así salió'. Pierdes dinero y tiempo."
      }
    ],
    solution: {
      title: "Impresión de Nivel Corporativo",
      subtitle: "Precisión, velocidad y acabados que hacen la diferencia.",
      steps: [
        {
          icon: "tune",
          title: "Control de Color Profesional",
          description: "Calibración Pantone y pruebas de color antes de cada tiraje. Lo que ves en pantalla es lo que recibes en papel. Sin sorpresas."
        },
        {
          icon: "auto_awesome",
          title: "Acabados Premium",
          description: "Barniz UV selectivo, laminado mate/brillante, stamping en oro/plata, troquelado y texturas táctiles. Tus piezas se sienten tan bien como se ven."
        },
        {
          icon: "local_shipping",
          title: "Cumplimiento Garantizado",
          description: "Fechas de entrega documentadas y penalidad por incumplimiento. Si decimos miércoles, es miércoles. Punto."
        }
      ]
    },
    gallery: [
      { alt: "Catálogo corporativo premium" },
      { alt: "Tarjetas con barniz UV" },
      { alt: "Carpeta corporativa troquelada" },
      { alt: "Folletos con laminado mate" }
    ],
    faqs: [
      {
        question: "¿Cuál es la cantidad mínima de impresión?",
        answer: "Depende del producto. Tarjetas de presentación: desde 100 unidades. Catálogos y brochures: desde 50. Volantes: desde 500. Para cantidades especiales, consúltanos."
      },
      {
        question: "¿Qué tipo de papel usan?",
        answer: "Trabajamos con Bond, Propalcote, Kimberly, Opalina y cartulinas especiales. Para cada proyecto recomendamos el gramaje y acabado ideal según el uso que le darás."
      },
      {
        question: "¿Hacen diseño o solo impresión?",
        answer: "Ambos. Si ya tienes diseño, lo optimizamos para impresión gratis. Si necesitas diseño, nuestro equipo creativo lo desarrolla alineado a tu identidad de marca."
      }
    ],
    infrastructure: [
      { name: "Prensa Offset de Alta Precisión", desc: "Impresión de alta velocidad con registro de color perfecto para tirajes medianos y largos." },
      { name: "Estación de Acabados Especiales", desc: "Equipos automatizados para laminado térmico, troquelado, stamping y barniz UV." }
    ]
  },

  "souvenirs": {
    slug: "souvenirs",
    label: "SERVICIO 05",
    name: "Souvenirs Corporativos",
    heroTitle: "Te olvidan en 5 minutos.",
    heroHighlight: "Haz que te recuerden siempre.",
    heroSubtitle: "Artículos promocionales estratégicos que mantienen tu marca presente en la vida diaria del cliente. Cada uso es un recordatorio.",
    ctaText: "Cotizar Souvenirs",
    pains: [
      {
        icon: "delete",
        title: "Regalos genéricos que terminan en la basura",
        description: "Bolígrafos baratos y llaveros sin gracia. El cliente recibe, agradece por cortesía y lo descarta. Cero impacto."
      },
      {
        icon: "psychology_alt",
        title: "Tu marca no se ancla en la mente",
        description: "Sin objetos físicos de valor percibido, tu empresa desaparece del radar del cliente al salir de tu local."
      },
      {
        icon: "currency_exchange",
        title: "Presupuesto desperdiciado",
        description: "Inviertes en 500 artículos genéricos que no generan ni una sola venta adicional. Eso no es marketing, es tirar dinero."
      }
    ],
    solution: {
      title: "Souvenirs con Estrategia",
      subtitle: "Artículos que la gente quiere usar, no tirar.",
      steps: [
        {
          icon: "psychology",
          title: "Selección Estratégica",
          description: "Analizamos tu público y seleccionamos artículos que encajan en su rutina diaria: termos para ejecutivos, libretas para académicos, tech para millennials."
        },
        {
          icon: "palette",
          title: "Personalización Premium",
          description: "Grabado láser, sublimación, serigrafía y estampado. Tu logo no se va a despegar ni desvanecer. Calidad que refleja tu marca."
        },
        {
          icon: "inventory_2",
          title: "Empaque de Presentación",
          description: "No entregamos en bolsas genéricas. Cajas personalizadas y presentaciones que hacen del souvenir una experiencia de unboxing."
        }
      ]
    },
    gallery: [
      { alt: "Termos corporativos personalizados" },
      { alt: "Libretas con grabado láser" },
      { alt: "Kit de bienvenida corporativo" },
      { alt: "Artículos tech promocionales" }
    ],
    faqs: [
      {
        question: "¿Cuál es la cantidad mínima de pedido?",
        answer: "Varía según el artículo. Termos y tazas: desde 25 unidades. Libretas y bolígrafos: desde 50. Para cantidades menores, consúltanos — siempre buscamos soluciones."
      },
      {
        question: "¿Tienen catálogo de artículos disponibles?",
        answer: "Sí, ofrecemos termos, tazas, libretas, USB, bolígrafos, power banks, bolsos, gorras, camisetas y más. También podemos conseguir artículos específicos por encargo."
      },
      {
        question: "¿Cuánto tiempo tarda un pedido personalizado?",
        answer: "Producción estándar: 5-10 días hábiles según el artículo y la técnica de personalización. Express disponible con recargo para pedidos urgentes."
      }
    ],
    infrastructure: [
      { name: "Máquina de Grabado Láser Fibra", desc: "Grabado permanente en metales, plásticos y cuero con precisión micrométrica." },
      { name: "Pulpos de Serigrafía Industrial", desc: "Equipos para transferencia de color vibrante y resistente al uso diario." }
    ]
  },

  "editorial": {
    slug: "editorial",
    label: "SERVICIO 06",
    name: "Impresión Editorial",
    heroTitle: "Tu conocimiento muere en un PDF.",
    heroHighlight: "Publícalo como los grandes.",
    heroSubtitle: "Libros, revistas, informes anuales y publicaciones que convierten tu expertise en autoridad impresa. El contenido que posiciona.",
    ctaText: "Cotizar Impresión Editorial",
    pains: [
      {
        icon: "description",
        title: "Contenido valioso sin formato profesional",
        description: "Tienes el conocimiento pero lo presentas en documentos de Word o PDFs genéricos. Nadie toma en serio un informe sin diseño."
      },
      {
        icon: "visibility_off",
        title: "Tu expertise es invisible",
        description: "Sin publicaciones físicas, tu autoridad en el sector se queda en lo verbal. No tienes un activo tangible que demuestre tu nivel."
      },
      {
        icon: "groups",
        title: "No generas impacto institucional",
        description: "Competidores publican revistas y memorias anuales. Tu empresa no tiene ni un brochure de presentación decente."
      }
    ],
    solution: {
      title: "De Manuscrito a Obra Maestra",
      subtitle: "Publicaciones que consolidan tu autoridad en el mercado.",
      steps: [
        {
          icon: "settings_suggest",
          title: "Optimización para Impresión",
          description: "Recibimos tu archivo final maquetado y lo preparamos técnicamente para asegurar colores y márgenes perfectos en la impresión física."
        },
        {
          icon: "auto_stories",
          title: "Diseño Editorial Premium",
          description: "Diagramación profesional, selección tipográfica, tratamiento de imágenes y maquetación que convierte texto en una experiencia visual."
        },
        {
          icon: "print",
          title: "Impresión de Alta Calidad",
          description: "Desde 10 copias hasta tirajes masivos. Encuadernación rústica, pasta dura, grapado, espiral. El formato que tu publicación merece."
        }
      ]
    },
    gallery: [
      { alt: "Libro institucional diseñado" },
      { alt: "Revista corporativa portada" },
      { alt: "Informe anual premium" },
      { alt: "Catálogo de productos editorial" }
    ],
    faqs: [
      {
        question: "¿Puedo imprimir pocas copias de mi libro?",
        answer: "Sí. Ofrecemos impresión digital desde 10 copias y offset para tirajes mayores a 500. Cada formato tiene sus ventajas de calidad y precio."
      },
      {
        question: "¿Ayudan con el contenido o solo con el diseño?",
        answer: "Nos especializamos en diseño y producción editorial, pero podemos coordinar con redactores y editores si necesitas apoyo en el contenido."
      },
      {
        question: "¿Manejan ISBN y registro legal?",
        answer: "Podemos orientarte en el proceso de registro ISBN y depósito legal, aunque el trámite formal es responsabilidad del autor/editor."
      }
    ],
    infrastructure: [
      { name: "Impresoras Digitales de Producción", desc: "Impresión bajo demanda con calidad fotográfica y consistencia de color." },
      { name: "Encuadernadora Hot Melt", desc: "Sistemas de pegado de alta resistencia para lomos duraderos que no se deshojan." }
    ]
  },

  "acrilicos-3d": {
    slug: "acrilicos-3d",
    label: "SERVICIO 07 · PREMIUM",
    name: "Acrílicos 3D",
    heroTitle: "Tu fachada pasa desapercibida.",
    heroHighlight: "Hazte notar. En 3D.",
    heroSubtitle: "Letras corpóreas, avisos iluminados y señalización tridimensional que elevan tu espacio al nivel de franquicia internacional.",
    ctaText: "Cotizar Acrílicos 3D",
    pains: [
      {
        icon: "visibility_off",
        title: "Fachada plana e invisible",
        description: "Un aviso impreso en lona se pierde entre el ruido visual de la calle. No resaltas, no llamas la atención, no generas tráfico."
      },
      {
        icon: "trending_down",
        title: "Percepción de baja categoría",
        description: "El cliente juzga tu negocio por tu fachada. Sin señalización tridimensional, tu local comunica 'negocio pequeño y temporal'."
      },
      {
        icon: "nights_stay",
        title: "De noche no existes",
        description: "Cuando cae el sol, tu negocio desaparece. Sin iluminación LED en tu señalización, pierdes la mitad de tu visibilidad."
      }
    ],
    solution: {
      title: "Señalización Premium con Presencia",
      subtitle: "3D + LED = Imposible de ignorar.",
      steps: [
        {
          icon: "view_in_ar",
          title: "Modelado y Renderización",
          description: "Diseñamos tu señalización en 3D y te mostramos renders fotorrealistas montados sobre la foto real de tu fachada. Ves el resultado antes de producir."
        },
        {
          icon: "precision_manufacturing",
          title: "Fabricación CNC + Laser",
          description: "Corte de acrílico, MDF y aluminio con precisión milimétrica. Letras corpóreas con acabado impecable que resisten la intemperie."
        },
        {
          icon: "lightbulb",
          title: "Iluminación LED Integrada",
          description: "LEDs de alta eficiencia con retroiluminación o iluminación frontal. Tu marca brilla 24/7 con consumo mínimo de energía."
        }
      ]
    },
    gallery: [
      { alt: "Letras corpóreas iluminadas LED" },
      { alt: "Aviso 3D fachada comercial" },
      { alt: "Señalización interior acrílico" },
      { alt: "Letras corpóreas acero" },
      { alt: "Logo tridimensional recepción" },
      { alt: "Fachada iluminada nocturna" }
    ],
    faqs: [
      {
        question: "¿Qué materiales usan para las letras corpóreas?",
        answer: "Trabajamos con acrílico (transparente, blanco, colores), MDF, aluminio compuesto y acero inoxidable. Cada material tiene sus ventajas según el uso y presupuesto."
      },
      {
        question: "¿Las letras iluminadas consumen mucha energía?",
        answer: "No. Usamos LEDs de última generación que consumen hasta un 80% menos que la iluminación convencional. El costo mensual de energía es mínimo."
      },
      {
        question: "¿Incluyen la instalación?",
        answer: "Sí. Nuestro equipo técnico realiza el montaje e instalación con anclajes profesionales. Garantizamos la seguridad y correcta fijación de cada pieza."
      }
    ],
    infrastructure: [
      { name: "Router CNC Industrial", desc: "Corte tridimensional de acrílico, MDF y aluminio compuesto con tolerancias exactas." },
      { name: "Taller de Ensamblaje LED", desc: "Área especializada en soldadura, impermeabilización y montaje de módulos LED de alta intensidad." }
    ]
  }
};
