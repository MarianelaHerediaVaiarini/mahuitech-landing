import Link from 'next/link';
import { contactEmail } from '../site-config';

const titles = {
  'aviso-legal': 'Aviso legal',
  privacidad: 'Política de privacidad',
  cookies: 'Política de cookies',
};

export function generateStaticParams() {
  return Object.keys(titles).map((legal) => ({ legal }));
}

export default async function LegalPage({ params }) {
  const { legal } = await params;
  const owner = process.env.LEGAL_OWNER;
  const taxId = process.env.LEGAL_TAX_ID;
  const address = process.env.LEGAL_ADDRESS;

  return (
    <main className="wrap block legal-page">
      <Link href="/">Volver a Mahui Tech</Link>
      <h1>{titles[legal]}</h1>
      {legal !== 'cookies' && (
        <p>{owner && taxId && address
          ? <>{owner} · NIF {taxId} · {address} · <a href={`mailto:${contactEmail}`}>{contactEmail}</a></>
          : 'Borrador pendiente de completar con los datos del titular.'}</p>
      )}
      {legal === 'aviso-legal' && <p>Este sitio presenta los servicios de diseño web, automatización y desarrollo de software de Mahui Tech.</p>}
      {legal === 'privacidad' && <p>Usamos los datos que facilites por correo para responder a tu consulta y, si procede, preparar una propuesta. El formulario abre tu aplicación de correo para que puedas revisar el mensaje antes de enviarlo.</p>}
      {legal === 'cookies' && <p>Esta web no incorpora herramientas de analítica ni publicidad. Los sitios externos enlazados aplican sus propias políticas de cookies.</p>}
    </main>
  );
}
