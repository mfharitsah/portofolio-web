import { navItems, siteConfig } from '@/app/data/portfolio';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-white/10">
      <div className="section-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-xl font-bold tracking-[-0.04em]">
            HARRIS<span className="text-blue-600 dark:text-blue-300">.</span>
          </Link>
          <p className="mt-2 text-sm text-slate-500 dark:text-white/45">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-sm text-slate-500 transition hover:text-blue-700 dark:text-white/45 dark:hover:text-blue-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
