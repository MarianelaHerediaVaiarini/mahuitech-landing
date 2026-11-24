import SiteHeader from '../site-header';

export default function GuidesLayout({ children }) {
  return (
    <div className="site guides-site">
      <div className="wrap"><SiteHeader /></div>
      {children}
    </div>
  );
}
