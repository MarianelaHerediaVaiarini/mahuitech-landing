import Contact from './contact';

export default function Home() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  const erpPrice = process.env.ERP_STARTING_PRICE;
  const aiPrice = process.env.AI_STARTING_PRICE;
  const maintenancePrice = process.env.MAINTENANCE_MONTHLY_PRICE;
  const screenshot = process.env.LA_TRIBU_SCREENSHOT;
  const quote = process.env.LA_TRIBU_QUOTE;
  return (
<div className="site">
<section className="hero" id="inicio">
<div className="wrap">
<header><a className="logo" href="#inicio">mahui tech<sup aria-hidden="true">✦</sup></a><nav aria-label="Principal"><a href="#servicios">Servicios</a><a href="#proceso">Cómo trabajamos</a><a href="#proyectos">Proyectos</a><a href="#equipo">Equipo</a></nav><a className="btn nav-contact" href="#contacto">Hablemos</a></header>
<div className="hero-copy">
  <h1>Menos tareas repetitivas. Más tiempo para tu negocio.</h1>
  <p>Creamos webs, automatizaciones y sistemas de gestión para negocios y equipos pequeños. Precio cerrado y plazos claros.</p>
  <div className="actions"><a className="btn alt" href="#servicios">Ver servicios</a><a className="btn alt" href="#contacto">Hablemos 20 minutos</a></div>
</div>
<div className="hero-end" aria-hidden="true"><span className="star">✦</span></div>
</div>
</section>
<main>
<section className="block" id="servicios"><div className="wrap">
<h2>Lo que podemos hacer por tu negocio</h2>
<div className="primary-services">
<article className="card erp-card" id="sistemas-gestion"><h3>Sistema de gestión a medida</h3><figure className="service-preview preview-erp"><div className="demo-erp" aria-hidden="true"><div className="demo-sidebar"><strong>Almacén</strong><span>Resumen</span><b>Pedidos</b><span>Inventario</span></div><div className="demo-main"><small>Operaciones / Pedidos</small><strong>Gestión de pedidos</strong><div className="demo-metrics"><div>Por preparar<b>08</b></div><div>En tránsito<b>12</b></div><div>Entregados<b>34</b></div></div><table><thead><tr><th>Pedido</th><th>Cliente</th><th>Estado</th></tr></thead><tbody><tr><td>#1042</td><td>Mercado Norte</td><td><span>En tránsito</span></td></tr><tr><td>#1043</td><td>Casa Oliva</td><td><span>Pendiente</span></td></tr></tbody></table></div></div><figcaption>Ejemplo de ERP para pedidos e inventario</figcaption></figure><p>Empezamos por un módulo (pedidos, inventario o compras).</p><p>En la primera llamada revisamos cómo trabaja tu equipo y qué procesos conviene abordar primero.</p><div className="card-foot">{erpPrice && <strong>Desde {erpPrice} €</strong>}<a href="#contacto">Hablemos de tu sistema de gestión</a></div></article>
<article className="card" id="web-corporativa"><h3>Web corporativa</h3><figure className="service-preview preview-web"><div className="demo-web" aria-hidden="true"><div className="demo-browser"><div className="demo-web-nav"><b>estudio norte</b><span>Proyectos · Contacto</span></div><div className="demo-web-hero"><div><small>Interiorismo</small><strong>Espacios para<br />vivir mejor.</strong><b className="demo-web-cta">Ver proyectos</b></div><div className="demo-arch"></div></div><div className="demo-web-bottom">Reformas integrales <span>Asesoría de interiores</span></div></div><div className="demo-handset"><b>estudio norte</b><div className="demo-arch"></div><strong>Espacios para vivir mejor.</strong><b className="demo-web-cta">Ver proyectos</b></div></div><figcaption>Ejemplo de web corporativa en escritorio y móvil</figcaption></figure><p>Una web con diseño visual adaptado a tu marca, pensada para presentar tus servicios y recibir consultas.</p><ul><li>Diseño y desarrollo de 1 a 5 páginas</li><li>Formulario de contacto</li><li>Versión móvil y SEO básico</li></ul><div className="card-foot"><strong>Desde 950 €</strong><span>3–4 semanas</span><a href="#contacto">Pide presupuesto para tu web</a></div></article>
</div>
<p className="intro">Los precios y plazos son orientativos. IVA no incluido.</p>
<div className="grid">
<article className="card feature"><h3>Automatización</h3><p>Elimina una tarea que tu equipo repite cada semana.</p><ul><li>Un flujo automatizado</li><li>Avisos y registro de datos</li><li>Pruebas y guía de uso</li></ul><div className="card-foot"><strong>Desde 450 €</strong><span>1–2 semanas</span><a href="#contacto">Consulta sobre una automatización</a></div></article>
<article className="card"><h3>Implementación de IA</h3><p>Incorporamos IA a tareas concretas de tu negocio.</p><ul><li>Chatbots con información de tu negocio</li><li>Automatización de lectura y clasificación de mensajes o documentos</li><li>Derivación de consultas a tu equipo</li></ul><div className="card-foot"><strong>Proyecto piloto{aiPrice ? ` desde ${aiPrice} €` : ''}</strong>{!aiPrice && <span>Presupuesto según el alcance</span>}<a href="#contacto">Consulta sobre una solución con IA</a></div></article>
<article className="card"><h3>Integraciones</h3><p>Conecta las herramientas que tu equipo ya usa.</p><ul><li>Conexión entre dos herramientas</li><li>Sincronización de datos</li><li>Pruebas y documentación</li></ul><div className="card-foot"><strong>Desde 650 €</strong><span>2–3 semanas</span><a href="#contacto">Consulta sobre una integración</a></div></article>
<article className="card"><h3>Mantenimiento mensual</h3><p>Copias de seguridad, actualizaciones y pequeños cambios.</p><div className="card-foot">{maintenancePrice ? <strong>Desde {maintenancePrice} €/mes</strong> : <span>Cuota según el alcance</span>}<a href="#contacto">Consulta sobre mantenimiento</a></div></article>
</div></div></section>
<section className="block" id="proceso"><div className="wrap"><h2>Cómo trabajamos</h2><ol className="steps"><li><h3>Llamada inicial</h3><p>En 20 minutos vemos qué quieres mejorar y cómo trabajas hoy.</p></li><li><h3>Propuesta</h3><p>Te enviamos por escrito qué incluye el proyecto, cuánto cuesta y cuánto tarda.</p></li><li><h3>Desarrollo</h3><p>Diseñamos y construimos la solución. Te mostramos avances para que puedas revisarlos.</p></li><li><h3>Entrega</h3><p>Publicamos o activamos la solución y te enseñamos a usarla.</p></li><li><h3>Soporte</h3><p>Antes de empezar acordamos cómo te acompañamos después de la entrega.</p></li></ol></div></section>
<section className="block" id="proyectos"><div className="wrap"><h2>Proyectos y soluciones</h2>
<div className="examples">
  <article className="case case-featured">
    <img src={screenshot || "https://i.ibb.co/YT8M85hF/Bienvenida-a-este-universo.png"} alt="Portada de Agus Pognante / La Tribu" loading="lazy" decoding="async" />
    <div className="case-body">
      <small>Proyecto real · Web</small>
      <h3>Agus Pognante / La Tribu</h3>
      <p>Diseñamos y desarrollamos una web que reúne su agenda, su podcast y sus experiencias. Para cada nuevo encuentro, creamos su landing y las piezas gráficas para comunicarlo.</p>
      {quote && <blockquote><p>«{quote}»</p><cite>Agus Pognante</cite></blockquote>}
      <a href="https://aguspognante.com/">Ver sitio web</a>
    </div>
  </article>
  <article className="case"><div className="case-body">
    <small>Ejemplo · Automatización</small>
    <h3>Del formulario a la hoja de cálculo sin copiar nada</h3>
    <p>Cuando llega una consulta, alguien tiene que copiar sus datos a una hoja y avisar al equipo. Conectamos el formulario con la hoja de cálculo para registrar cada entrada y enviar un aviso automático.</p>
    <p><strong>Plazo orientativo:</strong> 1–2 semanas para un flujo sencillo.</p>
  </div></article>
</div></div></section>
<section className="block" id="equipo"><div className="wrap team"><h2>Somos Mahui Tech</h2><div><p>Somos una pareja y el equipo detrás de Mahui Tech. Combinamos diseño visual y desarrollo para crear webs y automatizaciones para pequeñas empresas.</p><p>Desde la primera llamada hasta la entrega, hablas directamente con quienes diseñamos y desarrollamos tu proyecto.</p></div></div></section>
<section className="block" id="contacto"><div className="wrap">
  <div className="call"><div><h2>Hablemos de tu negocio</h2><p>Cuéntanos qué necesitas en una llamada gratuita de 20 minutos.</p></div>{bookingUrl && <a className="btn" href={bookingUrl}>Agendar llamada gratuita</a>}</div>
  <Contact email={process.env.CONTACT_EMAIL} />
</div></section>
</main>
<footer className="wrap"><a className="logo" href="#inicio">mahui tech<sup aria-hidden="true">✦</sup></a><div className="legal-links"><a href="/aviso-legal/">Aviso legal</a><a href="/privacidad/">Política de privacidad</a><a href="/cookies/">Política de cookies</a></div></footer>
</div>
  );
}
