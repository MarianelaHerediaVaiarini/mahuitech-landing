import Contact from './contact';
import { contactEmail } from './site-config';

export default function Home() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  return (
<div className="site">
<section className="hero" id="inicio">
<div className="wrap">
<header><a className="logo" href="#inicio">mahui tech<sup aria-hidden="true">✦</sup></a><nav aria-label="Principal"><a href="#servicios">Servicios</a><a href="#proceso">Cómo trabajamos</a><a href="#proyectos">Proyectos</a><a href="#equipo">Equipo</a><a href="#preguntas">Preguntas frecuentes</a></nav><a className="btn nav-contact" href="#contacto">Hablemos</a></header>
<div className="hero-copy">
  <h1>Menos tareas repetitivas. Más tiempo para tu negocio.</h1>
  <p>Creamos webs, automatizaciones y sistemas de gestión para negocios y equipos pequeños. Precio cerrado y plazos claros.</p>
  <div className="actions">
    <a className="btn" href="#contacto">Hablemos 20 minutos</a>
    <a className="btn alt" href="#servicios">Ver servicios</a>
  </div>
</div>
<div className="hero-end">
  <p className="hero-services">Webs · Automatizaciones · Integraciones</p>
  <svg className="hero-seal" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <defs>
      <path id="hero-seal-top" d="M 8,32 A 24,24 0 0,1 56,32" />
      <path id="hero-seal-bottom" d="M 56,32 A 24,24 0 0,1 8,32" />
    </defs>
    <text textAnchor="middle"><textPath href="#hero-seal-top" startOffset="50%">mahui tech</textPath></text>
    <text textAnchor="middle"><textPath href="#hero-seal-bottom" startOffset="50%">mahui tech</textPath></text>
    <circle cx="6" cy="32" r="0.8" />
    <circle cx="58" cy="32" r="0.8" />
    <path d="M 32,24 Q 33,31 40,32 Q 33,33 32,40 Q 31,33 24,32 Q 31,31 32,24 Z" />
  </svg>
</div>
</div>
</section>
<main>
<section className="block" id="servicios"><div className="wrap">
<h2>Lo que podemos hacer por tu negocio</h2>
<div className="primary-services">
<article className="card erp-card" id="sistemas-gestion"><h3>Sistema de gestión a medida</h3><figure className="service-preview preview-erp"><div className="demo-erp" aria-hidden="true"><div className="demo-sidebar"><strong>Almacén</strong><span>Resumen</span><b>Pedidos</b><span>Inventario</span></div><div className="demo-main"><small>Operaciones / Pedidos</small><strong>Gestión de pedidos</strong><div className="demo-metrics"><div>Por preparar<b>08</b></div><div>En tránsito<b>12</b></div><div>Entregados<b>34</b></div></div><table><thead><tr><th>Pedido</th><th>Cliente</th><th>Estado</th></tr></thead><tbody><tr><td>#1042</td><td>Mercado Norte</td><td><span>En tránsito</span></td></tr><tr><td>#1043</td><td>Casa Oliva</td><td><span>Pendiente</span></td></tr></tbody></table></div></div><figcaption>Ejemplo de ERP para pedidos e inventario</figcaption></figure><p>Empezamos por un módulo (pedidos, inventario o compras).</p><p>En la primera llamada revisamos cómo trabaja tu equipo y qué procesos conviene abordar primero.</p><div className="card-foot"><strong>Presupuesto por módulo</strong><a href="#contacto">Hablemos de tu sistema de gestión</a></div></article>
<article className="card" id="web-corporativa"><h3>Web corporativa</h3><figure className="service-preview preview-web"><div className="demo-web" aria-hidden="true"><div className="demo-browser"><div className="demo-web-nav"><b>estudio norte</b><span>Proyectos · Contacto</span></div><div className="demo-web-hero"><div><small>Interiorismo</small><strong>Espacios para<br />vivir mejor.</strong><b className="demo-web-cta">Ver proyectos</b></div><div className="demo-arch"></div></div><div className="demo-web-bottom">Reformas integrales <span>Asesoría de interiores</span></div></div><div className="demo-handset"><b>estudio norte</b><div className="demo-arch"></div><strong>Espacios para vivir mejor.</strong><b className="demo-web-cta">Ver proyectos</b></div></div><figcaption>Ejemplo de web corporativa en escritorio y móvil</figcaption></figure><p>Una web con diseño visual adaptado a tu marca, pensada para presentar tus servicios y recibir consultas.</p><ul><li>Diseño y desarrollo de una página en el precio base</li><li>Hasta cinco páginas, según presupuesto</li><li>Formulario de contacto</li><li>Versión móvil y SEO básico</li></ul><div className="card-foot"><strong>Desde 950 €</strong><span>3–4 semanas</span><a href="#contacto">Pide presupuesto para tu web</a></div></article>
</div>
<p className="intro">Los precios y plazos son orientativos. IVA no incluido.</p>
<div className="grid">
<article className="card feature"><h3>Automatización</h3><p>Automatiza una tarea repetitiva. Por ejemplo, cuando un cliente acepta un presupuesto, se crea una tarea y se avisa al equipo.</p><ul><li>Un flujo sencillo con un disparador y unas pocas acciones</li><li>Avisos y registro de datos</li><li>Pruebas y guía de uso</li></ul><div className="card-foot"><strong>Desde 450 €</strong><span>1–2 semanas</span><a href="#contacto">Consulta sobre una automatización</a></div></article>
<article className="card"><h3>Implementación de IA</h3><p>Incorporamos IA a tareas concretas de tu negocio.</p><ul><li>Chatbots con información de tu negocio</li><li>Automatización de lectura y clasificación de mensajes o documentos</li><li>Derivación de consultas a tu equipo</li></ul><div className="card-foot"><strong>Proyecto piloto desde 900 €</strong><span>Un caso de uso y una fuente de datos. Consumo de IA aparte.</span><a href="#contacto">Consulta sobre una solución con IA</a></div></article>
<article className="card"><h3>Integraciones</h3><p>Conecta las herramientas que tu equipo ya usa. Por ejemplo, registra los pedidos de tu tienda en tu sistema de gestión.</p><ul><li>Conexión entre dos herramientas con API</li><li>Sincronización de datos en una dirección</li><li>Pruebas y documentación</li></ul><div className="card-foot"><strong>Desde 650 €</strong><span>2–3 semanas. Migraciones y sincronización bidireccional se cotizan aparte.</span><a href="#contacto">Consulta sobre una integración</a></div></article>
<article className="card"><h3>Mantenimiento web</h3><p>Copias de seguridad, actualizaciones y hasta 30 minutos de cambios al mes para una web corporativa.</p><div className="card-foot"><strong>Desde 59 €/mes</strong><span>Sistemas de gestión e integraciones se cotizan según alcance.</span><a href="#contacto">Consulta sobre mantenimiento</a></div></article>
</div></div></section>
<section className="block" id="proceso"><div className="wrap"><h2>Cómo trabajamos</h2><ol className="steps"><li><h3>Llamada inicial</h3><p>En 20 minutos vemos qué quieres mejorar y cómo trabajas hoy.</p></li><li><h3>Propuesta</h3><p>Te enviamos por escrito qué incluye el proyecto, cuánto cuesta y cuánto tarda. Incluye hasta 2 rondas de cambios.</p></li><li><h3>Desarrollo</h3><p>Diseñamos y construimos la solución. Te mostramos avances para que puedas revisarlos.</p></li><li><h3>Entrega</h3><p>Publicamos o activamos la solución y te enseñamos a usarla.</p></li><li><h3>Soporte</h3><p>30 días de ajustes incluidos. Después, mantenimiento opcional.</p></li></ol></div></section>
<section className="block" id="proyectos">
  <div className="wrap">
    <h2>Proyectos y soluciones</h2>
    <div className="examples">
      <article className="case"><div className="case-body">
        <h3>Agus Pognante / La Tribu</h3>
        <p>Diseñamos y desarrollamos una web que reúne su agenda, su podcast y sus experiencias. Para cada encuentro creamos su landing y sus piezas gráficas.</p>
        <a href="https://aguspognante.com/">Ver sitio web</a>
      </div></article>
      <article className="case"><div className="case-body">
        <h3>Stock y pedidos en un solo lugar</h3>
        <p>Un panel para saber qué productos quedan, cuáles hay que reponer y qué pedidos siguen pendientes. Al confirmar un pedido, se reservan las unidades y el equipo ve al momento cuánto stock queda disponible.</p>
      </div></article>
      <article className="case"><div className="case-body">
        <h3>Asistente de IA que ejecuta acciones</h3>
        <p>Un chat desde el que puedes obtener documentos, comparar información y actualizar estados. Así el equipo resuelve tareas habituales desde una sola conversación.</p>
      </div></article>
    </div>
  </div>
</section>
<section className="block" id="equipo" aria-labelledby="equipo-titulo">
  <div className="wrap">
    <div className="team-layout">
      <div className="team-intro">
        <h2 id="equipo-titulo">Somos <span>Mahui Tech</span></h2>
        <p>Somos dos desarrolladores y trabajamos juntos en cada proyecto. Desde la primera conversación hasta la entrega, hablas directamente con quienes lo construimos.</p>
        <a className="btn" href="#contacto">Hablemos 20 minutos</a>
      </div>
      <div className="team-members">
        <article>
          <img src="/team/marianela.webp" alt="Retrato de Marianela Heredia" width="600" height="600" loading="lazy" />
          <h3>Marianela Heredia</h3>
          <p>Desarrollo web con foco en frontend y diseño: interfaz, experiencia de usuario y la parte visual de cada proyecto.</p>
        </article>
        <article>
          <img src="/team/design.webp" alt="Retrato de Nehuen Morales" width="600" height="600" loading="lazy" />
          <h3>Nehuen Morales</h3>
          <p>Desarrollo web, sistemas de gestión y automatizaciones.</p>
        </article>
      </div>
    </div>
    <ul className="team-commitments">
      <li>Precio cerrado</li>
      <li>El código y el dominio son tuyos</li>
      <li>Hablas siempre con quien lo hace</li>
    </ul>
  </div>
</section>
<section className="block" id="preguntas">
  <div className="wrap">
    <h2>Preguntas frecuentes</h2>
    <div className="faq">
      <details><summary>¿Cuánto tarda?</summary><p>Una web corporativa suele llevar entre 3 y 4 semanas. Para sistemas de gestión y otros desarrollos a medida, concretamos el plazo en la propuesta.</p></details>
      <details><summary>¿Qué pasa si quiero cambios?</summary><p>La propuesta incluye hasta 2 rondas de cambios dentro del alcance acordado. Si quieres ampliar el alcance, acordamos el coste y el plazo antes de avanzar.</p></details>
      <details><summary>¿Quién es el dueño del código?</summary><p>El código del proyecto y el dominio son tuyos. Al entregar el proyecto te damos acceso al código y a la gestión del dominio.</p></details>
      <details><summary>¿Qué pasa después de la entrega?</summary><p>Tienes 30 días de ajustes incluidos. Después, puedes contratar el mantenimiento de forma opcional.</p></details>
      <details><summary>¿Cómo se paga?</summary><p>La propuesta indica el importe total y las condiciones de pago para que puedas revisarlos antes de aceptar.</p></details>
    </div>
  </div>
</section>
<section className="block" id="contacto"><div className="wrap">
  <div className="call"><div><h2>Hablemos de tu negocio</h2><p>Cuéntanos qué necesitas en una llamada gratuita de 20 minutos.</p></div>{bookingUrl && <a className="btn" href={bookingUrl}>Agendar llamada gratuita</a>}</div>
  <p className="contact-response">Respondemos en 24 h laborables. <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
  <Contact email={contactEmail} />
</div></section>
</main>
<footer className="wrap"><a className="logo" href="#inicio">mahui tech<sup aria-hidden="true">✦</sup></a><div className="legal-links"><a href="/aviso-legal/">Aviso legal</a><a href="/privacidad/">Política de privacidad</a><a href="/cookies/">Política de cookies</a></div></footer>
</div>
  );
}
