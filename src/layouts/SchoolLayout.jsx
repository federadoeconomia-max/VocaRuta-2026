import { Outlet, Link } from 'react-router-dom';
import { ROUTES } from '../app/routes';
import { ArrowLeft } from 'lucide-react';

export default function SchoolLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <Link to={ROUTES.SCHOOL_INFO} className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">V</div>
            <div>
              <span className="font-bold text-lg text-slate-900 block leading-tight">VocaRuta para colegios</span>
              <span className="text-xs text-slate-500">Panel de demostración · datos ficticios</span>
            </div>
          </Link>
          <Link to={ROUTES.SCHOOL_INFO} className="flex items-center text-sm font-medium text-primary-700 hover:text-primary-900">
            <ArrowLeft className="w-4 h-4 mr-2" /> Volver a la propuesta
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto w-full p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
