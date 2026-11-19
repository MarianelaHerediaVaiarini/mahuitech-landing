'use client';

export default function Contact({ email }) {
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const budget = data.get('budget').trim();
    const lines = [`Nombre: ${data.get('name')}`, `Email: ${data.get('email')}`];
    if (budget) lines.push(`Presupuesto orientativo: ${budget}`);
    lines.push('', data.get('message'));
    const body = lines.join('\n');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Consulta para Mahui Tech')}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form method="post" className="contact-form" onSubmit={submit} aria-label="Formulario de contacto">
      <fieldset disabled={!email}>
        <label>Nombre<input name="name" autoComplete="name" required /></label>
        <label>Correo electrónico<input name="email" type="email" autoComplete="email" required /></label>
        <label>¿Qué necesitas?<textarea name="message" rows={4} required /></label>
        <label>Presupuesto orientativo (opcional)<input name="budget" /></label>
        <label className="privacy-check"><input type="checkbox" required /> <span>He leído y acepto la <a href="/privacidad/">política de privacidad</a>.</span></label>
        <button className="btn">Abrir consulta en mi correo</button>
      </fieldset>
      {!email && <p>El formulario se habilitará cuando esté disponible el correo de contacto.</p>}
    </form>
  );
}
