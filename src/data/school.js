export const schoolData = {
  stats: {
    totalStudents: 120,
    completedRoute: 78,
    simulationsDone: 145,
  },
  topCareers: [
    { name: 'Ingeniería de Sistemas', count: 45 },
    { name: 'Administración', count: 38 },
    { name: 'Psicología', count: 32 },
    { name: 'Medicina', count: 28 },
    { name: 'Derecho', count: 25 },
  ],
  certaintyChange: {
    before: 2.8,
    after: 3.1
  },
  students: [
    { id: 1, name: 'Estudiante demo 01', progress: 100, status: 'Completado', recommended: 'Ingeniería de Sistemas' },
    { id: 2, name: 'Estudiante demo 02', progress: 100, status: 'Completado', recommended: 'Psicología' },
    { id: 3, name: 'Estudiante demo 03', progress: 60, status: 'En progreso (Prueba)', recommended: '-' },
    { id: 4, name: 'Estudiante demo 04', progress: 20, status: 'En progreso (Explora)', recommended: '-' },
    { id: 5, name: 'Estudiante demo 05', progress: 100, status: 'Completado', recommended: 'Arquitectura' },
    { id: 6, name: 'Estudiante demo 06', progress: 80, status: 'En progreso (Compara)', recommended: '-' },
    { id: 7, name: 'Estudiante demo 07', progress: 100, status: 'Completado', recommended: 'Medicina' },
    { id: 8, name: 'Estudiante demo 08', progress: 0, status: 'No iniciado', recommended: '-' },
    { id: 9, name: 'Estudiante demo 09', progress: 100, status: 'Completado', recommended: 'Comunicaciones' },
    { id: 10, name: 'Estudiante demo 10', progress: 100, status: 'Completado', recommended: 'Economía' }
  ]
};
