import './globals.css';
import { siteName, siteUrl } from './site-config';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
};

export default function RootLayout({ children }) {
  return <html lang="es"><body>{children}</body></html>;
}
