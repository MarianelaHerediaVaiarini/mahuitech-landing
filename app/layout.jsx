import './globals.css';

export const metadata = {
  metadataBase: new URL('https://mahuitech.es'),
  title: {
    default: 'Mahui Tech',
    template: '%s | Mahui Tech',
  },
};

export default function RootLayout({ children }) {
  return <html lang="es"><body>{children}</body></html>;
}
