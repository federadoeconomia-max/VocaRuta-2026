import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../app/routes';
import { useJourney } from '../../context/JourneyContext';
import { simulationsData } from '../../data/simulations';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Download, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const responseLabel = value => {
  if (value == null) return 'Sin respuesta';
  if (value >= 4) return 'Sí';
  if (value <= 2) return 'Todavía no';
  return 'Tengo dudas';
};

export default function ReportPage() {
  const { state, dispatch } = useJourney();
  const navigate = useNavigate();
  const [finalCertainty, setFinalCertainty] = useState(state.finalCertainty);
  const topCareers = state.recommendedCareers.slice(0, 3);
  const completed = simulationsData.filter(sim => state.completedSimulations[sim.id]);

  const handleCertaintyChange = value => {
    setFinalCertainty(value);
    dispatch({ type: 'SET_FINAL_CERTAINTY', payload: value });
  };

  if (topCareers.length === 0) {
    return (
      <Card className="p-8 text-center my-12">
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Primero completa el cuestionario</h1>
        <p className="text-slate-600 mb-6">Después podrás revisar alternativas y crear tu reporte personal.</p>
        <Button onClick={() => navigate(ROUTES.ASSESSMENT)}>Ir al cuestionario</Button>
      </Card>
    );
  }

  return (
    <div className="space-y-8 pb-16 print:space-y-6">
      <div className="print:hidden">
        <SectionHeader
          title="Tu reporte de exploración"
          description="Resume lo que exploraste y tus próximos pasos. Es una guía personal, no una decisión automática ni un diagnóstico."
          action={<Button onClick={() => window.print()}><Download className="w-4 h-4 mr-2" /> Guardar o imprimir PDF</Button>}
        />
      </div>

      <div className="hidden print:block text-center border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold text-slate-900">VocaRuta · Mi reporte</h1>
        <p className="text-slate-600 mt-2">Guía personal de exploración vocacional</p>
      </div>

      <Card className="p-6 md:p-8 print:shadow-none">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Qué exploraste</h2>
        <p className="text-slate-700">
          Respondiste un cuestionario inicial, revisaste alternativas de carrera y completaste {completed.length} {completed.length === 1 ? 'caso' : 'casos'} de exploración. Seleccionaste {state.compareList.length} {state.compareList.length === 1 ? 'carrera' : 'carreras'} para comparar.
        </p>
        <p className="text-sm text-slate-500 mt-3">Los porcentajes de afinidad provienen de un modelo inicial basado en respuestas declaradas. No predicen desempeño, ingresos ni permanencia en una carrera.</p>
      </Card>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Alternativas para seguir investigando</h2>
        <div className="space-y-4">
          {topCareers.map((career, index) => {
            const simulation = simulationsData.find(sim => sim.careerId === career.id);
            const result = simulation && state.completedSimulations[simulation.id];
            return (
              <Card key={career.id} className="p-6 print:shadow-none break-inside-avoid">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-slate-900">{index + 1}. {career.name}</h3>
                  <span className="text-sm font-semibold text-primary-700">Afinidad inicial: {career.compatibility}%</span>
                </div>
                <p className="text-sm text-slate-600">{career.description}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 text-sm">
                  {result ? (
                    <p className="text-slate-700">
                      Caso completado: {simulation.title}. ¿Disfrutaste la actividad? <strong>{responseLabel(result.answers?.enjoy ?? result.enjoy)}</strong>. ¿Te gustaría aprender más? <strong>{responseLabel(result.answers?.learn ?? result.learn)}</strong>.
                    </p>
                  ) : (
                    <p className="text-slate-600">Todavía no probaste un caso de esta carrera{simulation?.status === 'upcoming' ? '; este caso aún no está disponible' : ''}.</p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {completed.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Tu reflexión después de probar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {completed.map(sim => {
              const result = state.completedSimulations[sim.id];
              const answers = result.answers || result;
              const decision = Object.values(result.decisions || {})[0];
              const selected = sim.steps.find(step => step.type === 'decision')?.options?.find(option => option.id === decision?.option);
              return (
                <Card key={sim.id} className="p-5 print:shadow-none break-inside-avoid">
                  <h3 className="font-semibold text-slate-900 mb-3">{sim.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>Disfrutaste resolverla: <strong>{responseLabel(answers.enjoy)}</strong></li>
                    <li>Quieres aprender más: <strong>{responseLabel(answers.learn)}</strong></li>
                    <li>Te interesó el problema: <strong>{responseLabel(answers.interest)}</strong></li>
                    <li>Te imaginas haciendo tareas parecidas: <strong>{responseLabel(answers.future)}</strong></li>
                  </ul>
                  {selected && <p className="text-sm text-slate-700 mt-4"><strong>Opción que elegiste:</strong> {selected.text}</p>}
                  {decision?.justification && <p className="text-sm text-slate-700 mt-2"><strong>Tu razón:</strong> {decision.justification}</p>}
                  <p className="text-xs text-slate-500 mt-3">Estas respuestas reflejan tu impresión de un caso breve, no una evaluación profesional.</p>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-slate-900 text-white print:bg-white print:text-slate-900 print:shadow-none">
          <h2 className="text-xl font-bold mb-3">Seguridad al elegir</h2>
          <p className="text-sm mb-5 opacity-80">Antes: {state.initialCertainty == null ? 'Sin respuesta' : `${state.initialCertainty}/5`} · Después: {finalCertainty == null ? 'Sin respuesta' : `${finalCertainty}/5`}</p>
          {finalCertainty == null && (
            <div className="print:hidden">
              <p className="text-sm mb-3">¿Qué tan seguro te sientes ahora?</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(value => (
                  <button key={value} onClick={() => handleCertaintyChange(value)} className="w-10 h-10 rounded-md bg-slate-700 hover:bg-primary-600 text-white" aria-label={`Seguridad ${value} de 5`}>{value}</button>
                ))}
              </div>
            </div>
          )}
          <p className="text-xs mt-4 opacity-70">Este cambio indica percepción de seguridad, no calidad comprobada de la decisión.</p>
        </Card>

        <Card className="p-6 border-primary-100 bg-primary-50 print:bg-white print:shadow-none">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Preguntas para seguir investigando</h2>
          <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
            <li>¿Qué tareas te gustaron y cuáles preferirías evitar?</li>
            <li>¿Qué carrera merece una entrevista con un estudiante o profesional?</li>
            <li>¿Qué malla curricular, costos y opciones de financiamiento necesitas confirmar?</li>
            <li>¿Qué fuentes actuales respaldan los datos de empleo e ingresos?</li>
          </ul>
        </Card>
      </div>

      <Card className="p-6 print:shadow-none">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Próximo paso recomendado</h2>
        <p className="text-slate-700">Elige dos o tres alternativas y verifica sus mallas, costos vigentes y oportunidades laborales en fuentes actualizadas. Luego conversa con personas que estudian o ejercen esas profesiones.</p>
        <div className="print:hidden mt-5 flex flex-wrap gap-3">
          <Button onClick={() => navigate(ROUTES.EXPLORE)} variant="outline"><Compass className="w-4 h-4 mr-2" /> Seguir explorando</Button>
          <Button onClick={() => navigate(ROUTES.COMPARE)} variant="outline"><CheckCircle2 className="w-4 h-4 mr-2" /> Revisar comparación <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>
      </Card>

      <p className="text-xs text-slate-500">Prototipo de prueba. Los perfiles de carreras y sus afinidades son ejemplos sin validación profesional; verifica información actual antes de decidir.</p>
    </div>
  );
}
