'use client';

import { useState } from 'react';

function isContactComplete(form) {
  return form.matches(':valid')
    && Boolean(form.elements.namedItem('name').value.trim())
    && Boolean(form.elements.namedItem('message').value.trim());
}

export default function Contact({ email }) {
  const [status, setStatus] = useState('idle');
  const [isComplete, setIsComplete] = useState(false);
  const isSending = status === 'sending';
  const showNotice = status === 'success' || status === 'error';

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (isSending || !isContactComplete(form)) return;

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
      setIsComplete(false);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      action="/__forms.html"
      method="post"
      className="contact-form"
      onChange={(event) => setIsComplete(isContactComplete(event.currentTarget))}
      onFocus={(event) => setIsComplete(isContactComplete(event.currentTarget))}
      onSubmit={submit}
      aria-label="Formulario de contacto"
    >
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
        {!isComplete && <p className="contact-hint">Completa tu nombre, correo y mensaje, y marca la casilla de privacidad.</p>}
        <button className="btn" type="submit" disabled={!isComplete || isSending}>
          {isSending ? 'Enviando consulta…' : 'Enviar consulta'}
        </button>
      </fieldset>
      <div className={showNotice ? `contact-toast contact-toast--${status}` : undefined}>
        {showNotice && <span className="contact-toast-icon" aria-hidden="true">{status === 'success' ? '✓' : '!'}</span>}
        <div className="contact-toast-message">
          <div role="status">
            {status === 'success' && (
              <>
                <strong>Consulta enviada</strong>
                <p>Te responderemos por correo electrónico.</p>
              </>
            )}
          </div>
          <div role="alert">
            {status === 'error' && (
              <>
                <strong>No se pudo enviar la consulta</strong>
                <p>Inténtalo de nuevo o escríbenos a <a href={`mailto:${email}`}>{email}</a>.</p>
              </>
            )}
          </div>
        </div>
        {showNotice && (
          <button className="contact-toast-close" type="button" aria-label="Cerrar aviso" onClick={() => setStatus('idle')}>
            <span aria-hidden="true">×</span>
          </button>
        )}
      </div>
    </form>
  );
}
