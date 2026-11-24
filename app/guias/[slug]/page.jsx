import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteName } from '../../site-config';
import { pageMetadata } from '../../seo';
import { guides } from '../content';

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

async function getGuide(params) {
  const { slug } = await params;
  const guide = guides.find((entry) => entry.slug === slug);
  if (!guide) notFound();
  return guide;
}

export async function generateMetadata({ params }) {
  const { slug, title, description } = await getGuide(params);
  return pageMetadata({ title, description, path: `/guias/${slug}/`, type: 'article' });
}

export default async function GuidePage({ params }) {
  const { title, answer, sections, service } = await getGuide(params);

  return (
    <main className="wrap block guide-page">
      <Link className="guide-back" href="/guias/"><span aria-hidden="true">←</span> Volver a todas las guías</Link>
      <article>
        <h1>{title}</h1>
        <p className="guide-byline">Por <Link className="guide-link" href="/#equipo">{siteName}</Link></p>
        <p className="guide-answer">{answer}</p>
        {sections.map(({ title: sectionTitle, text, table, items }) => (
          <section key={sectionTitle}>
            <h2>{sectionTitle}</h2>
            {text && <p>{text}</p>}
            {table && (
              <table className="guide-table">
                <thead>
                  <tr>{table.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr>
                </thead>
                <tbody>
                  {table.rows.map(([label, ...cells]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      {cells.map((cell, index) => <td key={table.columns[index + 1]}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {items && <ul className="guide-points">{items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>
        ))}
        <div className="actions guide-actions">
          <Link className="btn" href="/#contacto">Hablar sobre mi proyecto</Link>
          <Link className="btn alt" href={`/#${service.fragment}`}>{service.label}</Link>
        </div>
      </article>
    </main>
  );
}
