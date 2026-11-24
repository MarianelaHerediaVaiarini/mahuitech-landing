import Link from 'next/link';
import { siteName } from './site-config';

export default function SiteLogo({ href }) {
  return (
    <Link className="logo" href={href}>
      <img src="/mahuitech-logo.png" alt={siteName} width="1237" height="169" />
    </Link>
  );
}
