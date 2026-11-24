import { guides } from './guias/content';
import { siteUrl } from './site-config';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/guias/` },
    ...guides.map(({ slug }) => ({ url: `${siteUrl}/guias/${slug}/` })),
  ];
}
