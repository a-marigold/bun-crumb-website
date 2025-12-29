import Link from 'next/link';

import headerStyles from './Header.module.scss';

export default function Header() {
    return (
        <header>
            <Link
                href='/'
                prefetch={false}
                className={headerStyles['logo-link']}
            >
                Crumb
            </Link>

            <nav className={headerStyles['nav-panel']}> </nav>
        </header>
    );
}
