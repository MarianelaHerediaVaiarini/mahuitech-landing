import Link from 'next/link';
import { guides } from './content';

export default function GuideList() {
  return (
    <ul className="guide-list">
      {guides.map(({ slug, title, description }) => (
        <li className="case case-body" key={slug}>
          <h3><Link href={`/guias/${slug}/`}>{title}</Link></h3>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}
