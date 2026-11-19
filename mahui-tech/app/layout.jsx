import './globals.css';

export const metadata = {
  title: 'Mahui Tech | Sistemas de gestión y diseño web',
  description: 'Desarrollamos sistemas ERP a medida, webs corporativas, automatizaciones e integraciones para tu negocio.',
};

export default function RootLayout({ children }) {
  return <html lang="es"><body>{children}</body></html>;
}
