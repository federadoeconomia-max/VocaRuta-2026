import { Link } from 'react-router-dom';
import { ROUTES } from '../../app/routes';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Container } from '../../components/ui/Container';
import { CheckCircle2 } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="py-16 md:py-24">
      <Container className="max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-700 mb-3">Para estudiantes de secundaria</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-5">Prueba VocaRuta gratis</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Si estás en 4.º o 5.º de secundaria y comparas carreras, recorre VocaRuta y construye un reporte para seguir investigando.
          </p>
        </div>

        <Card className="p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Qué puedes hacer</h2>
          <ul className="space-y-4 text-slate-700">
            {[
              'Un cuestionario inicial y carreras para explorar, según las respuestas del estudiante.',
              'Casos breves inspirados en tareas de algunas profesiones.',
              'Una comparación con datos referenciales de ejemplo.',
              'Un reporte personal con preguntas para continuar la investigación.'
            ].map(item => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Acceso libre durante el piloto</h2>
          <p className="text-slate-700 mb-6">
            No necesitas crear una cuenta ni ingresar una tarjeta. Tu avance se guarda solo en este navegador.
          </p>
          <Link to={ROUTES.DASHBOARD}>
            <Button className="h-12 px-6">Probar el recorrido</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
