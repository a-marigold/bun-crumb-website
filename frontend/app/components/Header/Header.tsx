import Link from 'next/link';

import NavLink from '@/UI/NavLink/NavLink';
import type { NavLinkProps } from '@/UI/NavLink/NavLink';

import headerStyles from './Header.module.scss';

const navLinkList: NavLinkProps[] = [
    { href: '/about', title: 'About', 'aria-label': 'Go to "about" page' },

    { href: '/docs', title: 'Docs', 'aria-label': 'Go to documentation page' },
];

export default function Header() {
    return (
        <header className={headerStyles['header']}>
            <Link
                href='/'
                prefetch={false}
                className={headerStyles['logo-link']}
            >
                <svg width={67} height={16} color='var(--font-color)'>
                    <use href='#crumb-logo' />
                </svg>
            </Link>
            <nav className={headerStyles['nav-panel']}>
                {navLinkList.map((props) => (
                    <NavLink {...props} />
                ))}
            </nav>
        </header>
    );
}
