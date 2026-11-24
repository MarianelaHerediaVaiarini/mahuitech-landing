import { businessLocation, contactEmail, siteName, siteUrl } from './site-config';

const shareImage = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Mahui Tech. Software a medida, diseño web y automatización.',
};

export function pageMetadata({ title, description, path, type = 'website' }) {
  const brandedTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: brandedTitle,
      description,
      url: path,
      siteName,
      locale: 'es_ES',
      type,
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [shareImage],
    },
  };
}

const areaServed = { '@type': 'Country', name: businessLocation.country };
const organizationId = `${siteUrl}/#organizacion`;
const services = [
  { name: 'Sistema de gestión (ERP) a medida', fragment: 'sistemas-gestion' },
  { name: 'Diseño web para pequeños negocios y autónomos', fragment: 'web-corporativa' },
  { name: 'Automatización de procesos', fragment: 'automatizacion-procesos' },
];

export const businessStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteName,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/icon.png`,
      email: contactEmail,
      description: 'Software a medida, diseño web y automatización de procesos para pymes y autónomos.',
      areaServed,
      location: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: businessLocation.city,
          addressRegion: businessLocation.province,
          addressCountry: 'ES',
        },
      },
    },
    ...services.map(({ name, fragment }) => ({
      '@type': 'Service',
      '@id': `${siteUrl}/#${fragment}`,
      name,
      url: `${siteUrl}/#${fragment}`,
      provider: { '@id': organizationId },
      areaServed,
    })),
  ],
};
