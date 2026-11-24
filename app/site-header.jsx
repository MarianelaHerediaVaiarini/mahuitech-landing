import Link from 'next/link';
import SiteLogo from './site-logo';

export default function SiteHeader({ home = false }) {
  const prefix = home ? '' : '/';

  return (
    <header className="site-header">
      <SiteLogo href={home ? '#inicio' : '/'} />
      <nav aria-label="Principal">
        <Link href={`${prefix}#servicios`}>Servicios</Link>
        <Link href={`${prefix}#proceso`}>Cómo trabajamos</Link>
        <Link href={`${prefix}#proyectos`}>Proyectos</Link>
        <Link href={`${prefix}#equipo`}>Equipo</Link>
        <Link href="/guias/" aria-current={home ? undefined : 'location'}>Guías</Link>
        <Link href={`${prefix}#preguntas`}>Preguntas frecuentes</Link>
      </nav>
      <Link className="btn nav-contact" href={`${prefix}#contacto`}>Hablemos</Link>
    </header>
  );
}
