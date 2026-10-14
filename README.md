# VocaRuta - Prototipo Frontend

VocaRuta es un prototipo de orientación vocacional para estudiantes de 4.º y 5.º de secundaria que comparan alternativas de carrera. El piloto se enfoca en una sola hipótesis B2C: el estudiante es usuario y cliente potencial.

Este proyecto es un prototipo frontend para probar un recorrido de exploración. Se ofrece completo y gratis durante el piloto. Un posible pago único posterior es una hipótesis: no hay precio definido, pagos reales ni resultados de validación comercial. El contenido académico y los perfiles de carreras aún necesitan revisión experta.

## 🚀 Tecnologías Utilizadas

- **React 19** (Vite)
- **Tailwind CSS v4** (Sistema de diseño corporativo y accesible)
- **React Router v7** (Enrutamiento cliente)
- **Recharts** (Visualización de datos)
- **Lucide React** (Íconos)

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- npm (o yarn/pnpm)

## 🛠️ Instalación y Ejecución

1. Clona el repositorio o abre la carpeta del proyecto.
2. Instala las dependencias:
   \`\`\`bash
   npm install
   \`\`\`
3. Inicia el servidor de desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Abre tu navegador en \`http://localhost:5173\` (o el puerto que te indique Vite).

## 🏗️ Arquitectura del Proyecto

El proyecto está diseñado de forma modular (Feature-based), de manera que si en un futuro se conecta a un backend real, los cambios en la UI sean mínimos.

\`\`\`text
src/
├── app/                  # Configuración global (App.jsx, router.jsx, rutas constantes)
├── components/           # Componentes UI reutilizables (Botones, Tarjetas, Modales, etc.)
├── context/              # Estado global usando Context API y useReducer (JourneyContext)
├── data/                 # Base de datos mockeada (carreras, preguntas, simulaciones)
├── features/             # Módulos principales agrupados por funcionalidad:
│   ├── assessment/       # Etapa 1: Cuestionario
│   ├── auth/             # Pantallas heredadas fuera del piloto público
│   ├── compare/          # Etapa 4: Tabla comparativa
│   ├── dashboard/        # Panel principal del estudiante
│   ├── explore/          # Etapa 2: Resultados y Radar
│   ├── landing/          # Página pública
│   ├── pricing/          # Acceso piloto B2C y modelo de pago por validar
│   ├── report/           # Etapa 5: Reporte personal imprimible
│   ├── school-panel/     # Código heredado fuera de las rutas del piloto
│   └── simulations/      # Etapa 3: Motor de simulaciones prácticas
├── layouts/              # Envoltorios de página (Public, Student, School)
├── services/             # Capa de abstracción de datos (promesas con delays simulados)
└── utils/                # Funciones puras (cálculo algorítmico de compatibilidad)
\`\`\`

## 🧠 Flujo de la Aplicación

La aplicación guarda el avance en `localStorage` de este navegador mediante `JourneyContext`. Las 5 etapas funcionan como prototipo:

1. **Conócete:** 15 preguntas que evalúan 5 dimensiones.
2. **Explora:** Función pura de compatibilidad (distancia matemática) que retorna el porcentaje de afinidad con las carreras y grafica un radar.
3. **Prueba:** Cuatro casos breves inspirados en tareas profesionales. La opinión posterior del estudiante se guarda para el reporte; no modifica automáticamente la afinidad.
4. **Compara:** Tabla comparativa técnica side-by-side de hasta 3 carreras.
5. **Decide:** Reporte personal imprimible (`@media print`) que reúne alternativas, casos probados, impresiones del estudiante y próximos pasos.

## 🎨 Sistema de Diseño

Se configuró el `@theme` de Tailwind v4 en `src/index.css` siguiendo pautas de diseño serio y empresarial (B2C/B2B):
- **Colores:** Azul corporativo, Grises (Slate) para fondos y textos, y colores semánticos (verde, rojo, ámbar). Sin modo oscuro para mantener la estética de documento formal.
- **Tipografía:** Inter (Google Fonts).
- **Accesibilidad:** Uso de variables CSS legibles, estados `:focus` y `:disabled` visibles.
- **Responsividad:** 100% adaptable de móvil a pantallas Ultra-Wide.

---
**Límites del prototipo:** Hay 10 carreras de ejemplo y 4 casos disponibles. El porcentaje de afinidad usa una fórmula inicial no validada y no predice el futuro académico. No se muestran salarios, pensiones ni demanda laboral sin fuentes verificadas. No hay cuentas, servidor, analítica ni cobros. El avance permanece solo en el navegador y se puede borrar desde el panel del estudiante. Las rutas antiguas de colegios quedan fuera de la navegación del piloto. El siguiente paso es entrevistar y observar a estudiantes, medir finalización y utilidad, y probar disposición real de pago.
