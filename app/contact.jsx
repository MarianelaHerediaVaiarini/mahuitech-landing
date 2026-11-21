'use client';

import { useState } from 'react';

export default function Contact({ email }) {
  const [status, setStatus] = useState('idle');
  const isSending = status === 'sending';

  async function submit(event) {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    const data = new URLSearchParams(new FormData(form));
    setStatus('sending');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data,
      });

      if (!response.ok) throw new Error('Netlify Forms did not accept the submission');

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form action="/__forms.html" method="post" className="contact-form" onSubmit={submit} aria-label="Formulario de contacto">
      <input type="hidden" name="form-name" value="contacto" />
      <div hidden>
        <label>Deja este campo vacío<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <fieldset disabled={isSending}>
        <label>Nombre<input name="name" autoComplete="name" maxLength={120} required /></label>
        <label>Correo electrónico<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
        <label>¿Qué necesitas?<textarea name="message" rows={4} maxLength={4000} required /></label>
        <label>Presupuesto orientativo (opcional)<input name="budget" maxLength={120} /></label>
        <label className="privacy-check"><input type="checkbox" required /> <span>He leído la <a href="/privacidad/">política de privacidad</a>.</span></label>
        <button className="btn" type="submit">{isSending ? 'Enviando consulta…' : 'Enviar consulta'}</button>
      </fieldset>
      <div role="status">{status === 'success' && <p>Recibimos tu consulta. Te responderemos por correo electrónico.</p>}</div>
      <div role="alert">{status === 'error' && <p>No pudimos enviar tu consulta. Inténtalo de nuevo o escríbenos a <a href={`mailto:${email}`}>{email}</a>.</p>}</div>
    </form>
  );
}
