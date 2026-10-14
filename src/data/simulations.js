export const simulationsData = [
  {
    id: 'sim-eco',
    careerId: 'economia',
    title: 'Inflación vs Desempleo: ¿Qué recomiendas?',
    duration: '15 min',
    difficulty: 'Media',
    status: 'available', // available, upcoming
    steps: [
      {
        id: 'step1',
        type: 'intro',
        content: 'Caso ficticio: colaboras con el banco central de un país imaginario. La inflación llegó a 8% y el desempleo subió a 7%. El equipo debe discutir qué información falta y qué riesgos implica cada medida.',
      },
      {
        id: 'step2',
        type: 'data',
        content: 'Si subes las tasas de interés, frenarás la inflación, pero es probable que el desempleo empeore porque las empresas pedirán menos préstamos para crecer. Si bajas las tasas, fomentarás el empleo, pero la inflación podría dispararse aún más.',
      },
      {
        id: 'step3',
        type: 'decision',
        content: '¿Qué política recomendarías implementar este mes y por qué?',
        options: [
          { id: 'opt1', text: 'Subir las tasas de interés fuertemente para controlar la inflación primero.' },
          { id: 'opt2', text: 'Bajar las tasas para estimular el empleo, asumiendo el riesgo inflacionario.' },
          { id: 'opt3', text: 'Mantener las tasas iguales y esperar más datos el próximo mes.' }
        ]
      },
      {
        id: 'step4',
        type: 'feedback',
        content: 'En economía rara vez hay una respuesta "correcta" sin costos. Tomar decisiones analizando el "costo de oportunidad" es el día a día de un economista. Lo importante es cómo justificaste tu elección basándote en los datos.'
      }
    ]
  },
  {
    id: 'sim-mkt',
    careerId: 'marketing',
    title: 'Define el público objetivo de una nueva bebida',
    duration: '10 min',
    difficulty: 'Baja',
    status: 'available',
    steps: [
      {
        id: 'step1',
        type: 'intro',
        content: 'Tu empresa va a lanzar una bebida energizante natural a base de frutas locales, sin azúcar añadida. Tu tarea es definir la campaña inicial.'
      },
      {
        id: 'step2',
        type: 'decision',
        content: '¿A qué segmento de público dirigirías el 80% del presupuesto de lanzamiento?',
        options: [
          { id: 'opt1', text: 'Deportistas de alto rendimiento (18-30 años).' },
          { id: 'opt2', text: 'Jóvenes universitarios en época de exámenes.' },
          { id: 'opt3', text: 'Profesionales jóvenes preocupados por su salud.' }
        ]
      },
      {
        id: 'step3',
        type: 'feedback',
        content: 'El marketing se trata de encontrar el "nicho" más rentable y afín al producto, y luego crear mensajes específicos para ellos.'
      }
    ]
  },
  {
    id: 'sim-der',
    careerId: 'derecho',
    title: 'Analiza un desacuerdo en un contrato',
    duration: '10 min',
    difficulty: 'Media',
    status: 'available',
    steps: [
      { id: 'step1', type: 'intro', content: 'Caso ficticio: una tienda prometió entregar una laptop el lunes. El contrato escrito indica entrega dentro de cinco días hábiles. La persona compradora solicita cancelar la compra el martes porque necesita el equipo para estudiar.' },
      { id: 'step2', type: 'data', content: 'El anuncio mencionaba «entrega rápida», pero no una fecha exacta. La tienda ofrece entregar el jueves. Antes de opinar, distingue qué dice el contrato y qué información falta.' },
      { id: 'step3', type: 'decision', content: '¿Qué harías primero para analizar el caso con cuidado?', options: [
        { id: 'opt1', text: 'Revisar la fecha de compra, el comprobante, el contrato y los mensajes de la oferta.' },
        { id: 'opt2', text: 'Afirmar que la tienda incumplió sin revisar documentos.' },
        { id: 'opt3', text: 'Ignorar el anuncio porque solo importa el contrato.' }
      ] },
      { id: 'step4', type: 'feedback', content: 'En Derecho importa separar hechos, documentos e interpretaciones antes de construir un argumento. Este caso ficticio solo explora una tarea y no ofrece asesoría legal.' }
    ]
  },
  {
    id: 'sim-ind',
    careerId: 'industrial',
    title: 'Reorganiza una línea de ensamblaje',
    duration: '10 min',
    difficulty: 'Media',
    status: 'available',
    steps: [
      { id: 'step1', type: 'intro', content: 'Caso ficticio: un taller arma kits escolares en tres estaciones. Preparar piezas tarda 4 minutos por kit, ensamblar 8 minutos y revisar 3 minutos.' },
      { id: 'step2', type: 'data', content: 'Cada estación tiene una persona. Los kits se mueven de una estación a la siguiente. En la segunda estación se acumula trabajo mientras las otras esperan.' },
      { id: 'step3', type: 'decision', content: '¿Qué cambio probarías primero para reducir el cuello de botella?', options: [
        { id: 'opt1', text: 'Medir el proceso y probar apoyo temporal en el ensamblaje, que tarda más.' },
        { id: 'opt2', text: 'Acelerar la revisión, aunque ya tarda menos que el ensamblaje.' },
        { id: 'opt3', text: 'Comprar más material sin medir el tiempo de cada estación.' }
      ] },
      { id: 'step4', type: 'feedback', content: 'La ingeniería industrial observa tiempos y restricciones para probar mejoras. Una decisión requiere medir resultados y considerar calidad, seguridad y recursos.' }
    ]
  }
];
