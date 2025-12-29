'use client';

import { usePathname } from 'next/navigation';

import NavLink from '@/UI/NavLink';
import type { NavLinkProps } from '@/UI/NavLink';

import navStyles from './NavPanel.module.scss';

const navLinks: NavLinkProps[] = [
    { href: '/about', title: 'About', 'aria-label': 'Go to "about" page' },

    { href: '/docs', title: 'Docs', 'aria-label': 'Go to documentation page' },
];

export default function NavPanel() {
    const pathname = usePathname();

    return (
        <nav className={navStyles['nav-panel']}>
            {navLinks.map((linkProps, index) => (
                <NavLink
                    key={index}
                    {...linkProps}
                    isActive={linkProps.href === pathname}
                />
            ))}
        </nav>
    );
}
