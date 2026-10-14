import { Link } from 'react-router-dom';
import { ROUTES } from '../../app/routes';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Container } from '../../components/ui/Container';
import { BarChart3, ClipboardList, FlaskConical } from 'lucide-react';

const benefits = [
  {
    title: 'Una ruta para la promoción',
    description: 'Los estudiantes responden un cuestionario inicial, exploran carreras y prueban casos breves inspirados en tareas profesionales.',
    icon: ClipboardList,
  },
  {
    title: 'Información para orientar',
    description: 'El orientador puede ver el avance de una promoción y detectar dónde conviene acompañar la exploración.',
    icon: BarChart3,
  },
  {
    title: 'Experiencias para conversar',
    description: 'Los casos sirven como punto de partida para hablar con estudiantes y familias sobre sus intereses y dudas.',
    icon: FlaskConical,
  },
];

export default function SchoolInfoPage() {
  return (
    <div className="py-16 md:py-24">
      <Container className="max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary-700 mb-3">Propuesta B2B para colegios</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-5">Orientación vocacional para toda una promoción</h1>
          <p className="text-lg text-slate-600">
            En este modelo, el colegio sería el comprador y los estudiantes los usuarios. VocaRuta podría complementar el trabajo del orientador con un recorrido de exploración y un panel de seguimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {benefits.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="p-6">
              <div className="w-11 h-11 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-5"><Icon className="w-6 h-6" /></div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">{title}</h2>
              <p className="text-sm text-slate-600">{description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-7 md:p-9 bg-slate-900 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Conoce la demostración para colegios</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            El panel muestra datos ficticios para enseñar la idea. Todavía no está conectado a estudiantes reales, ni hay licencias o precios definidos. La utilidad para colegios debe validarse mediante pilotos.
          </p>
          <Link to={ROUTES.SCHOOL}><Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">Abrir panel de demostración</Button></Link>
        </Card>
      </Container>
    </div>
  );
}
