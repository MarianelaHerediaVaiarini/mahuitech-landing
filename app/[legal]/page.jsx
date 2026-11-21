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
  const owner = process.env.LEGAL_OWNER?.trim();
  const taxId = process.env.LEGAL_TAX_ID?.trim();
  const address = process.env.LEGAL_ADDRESS?.trim();

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
      {legal === 'privacidad' && (
        <>
          <p>Usamos tu nombre, correo electrónico, mensaje y presupuesto orientativo, si lo indicas, para responderte y preparar una propuesta cuando la solicites. Los campos obligatorios nos permiten entender tu consulta y ponernos en contacto contigo.</p>
          <p>Si solicitas información para contratar un servicio, tratamos tus datos para atender medidas precontractuales a petición tuya. Para las demás consultas, el tratamiento se basa en nuestro interés legítimo en atender las comunicaciones que nos diriges.</p>
          <p>Netlify aloja la web y gestiona los envíos del formulario. Los datos pueden tratarse fuera del Espacio Económico Europeo con las garantías aplicables descritas en su <a href="https://www.netlify.com/pdf/netlify-dpa.pdf/">acuerdo de tratamiento de datos</a>.</p>
          <p>Conservamos los datos el tiempo necesario para tramitar la consulta o propuesta y, cuando corresponda, durante los plazos exigidos por obligaciones legales.</p>
          <p>Puedes solicitar el acceso, rectificación, supresión, limitación u oposición al tratamiento, o la portabilidad cuando proceda, en <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. También puedes presentar una reclamación ante la <a href="https://www.aepd.es/">Agencia Española de Protección de Datos</a>.</p>
        </>
      )}
      {legal === 'cookies' && <p>Esta web no incorpora herramientas de analítica ni publicidad. Los sitios externos enlazados aplican sus propias políticas de cookies.</p>}
    </main>
  );
}
