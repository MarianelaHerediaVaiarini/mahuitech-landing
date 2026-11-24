import Link from 'next/link';
import GuideList from './guide-list';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Guías de diseño web, ERP y automatización para pymes',
  description: 'Guías de Mahui Tech para calcular el coste de tu web, decidir si necesitas un ERP y elegir qué tareas automatizar en tu negocio.',
  path: '/guias/',
});

export default function GuidesPage() {
  return (
    <main className="wrap block guide-page guide-index">
      <Link className="guide-back" href="/#guias"><span aria-hidden="true">←</span> Volver al inicio</Link>
      <h1>Guías para pymes y autónomos</h1>
      <GuideList />
    </main>
  );
}
