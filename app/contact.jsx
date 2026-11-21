'use client';

import { useRef, useState } from 'react';

const emptyFields = {
  name: '',
  email: '',
  emailValid: false,
  message: '',
  budget: '',
  privacyAccepted: false,
};

export default function Contact({ email }) {
  const [fields, setFields] = useState(emptyFields);
  const [status, setStatus] = useState('idle');
  const submitting = useRef(false);
  const isComplete = Boolean(fields.name.trim() && fields.emailValid && fields.message.trim() && fields.privacyAccepted);
  const isSending = status === 'sending';
  const showNotice = status === 'success' || status === 'error';

  function updateFields(changes) {
    setFields((previous) => ({ ...previous, ...changes }));
    if (status === 'success') setStatus('idle');
  }

  async function submit(event) {
    event.preventDefault();
    if (submitting.current || !isComplete) return;

    const form = event.currentTarget;
    const data = new URLSearchParams(new FormData(form));
    submitting.current = true;
    setStatus('sending');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data,
      });

      if (!response.ok) throw new Error('Netlify Forms did not accept the submission');

      setFields(emptyFields);
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form
      action="/__forms.html"
      method="post"
      className="contact-form"
      onSubmit={submit}
      aria-label="Formulario de contacto"
    >
      <input type="hidden" name="form-name" value="contacto" />
      <div hidden>
        <label>Deja este campo vacío<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <fieldset disabled={isSending}>
        <label>Nombre
          <input name="name" autoComplete="name" maxLength={120} value={fields.name} onChange={(event) => updateFields({ name: event.target.value })} required />
        </label>
        <label>Correo electrónico
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            value={fields.email}
            onChange={(event) => updateFields({ email: event.target.value, emailValid: event.target.validity.valid })}
            required
          />
        </label>
        <label>¿Qué necesitas?
          <textarea name="message" rows={4} maxLength={4000} value={fields.message} onChange={(event) => updateFields({ message: event.target.value })} required />
        </label>
        <label>Presupuesto orientativo (opcional)
          <input name="budget" maxLength={120} value={fields.budget} onChange={(event) => updateFields({ budget: event.target.value })} />
        </label>
        <label className="privacy-check">
          <input type="checkbox" checked={fields.privacyAccepted} onChange={(event) => updateFields({ privacyAccepted: event.target.checked })} required />
          <span>He leído la <a href="/privacidad/">política de privacidad</a>.</span>
        </label>
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
