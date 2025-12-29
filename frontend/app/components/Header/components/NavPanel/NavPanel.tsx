'use client';

import { usePathname } from 'next/navigation';

import NavLink from '@/UI/NavLink';
import type { NavLinkProps } from '@/UI/NavLink';
import IconButton from '@/UI/IconButton';

import IconLink from '@/UI/IconLink';

import navStyles from './NavPanel.module.scss';

const navLinks: NavLinkProps[] = [
    { href: '/about', title: 'About', 'aria-label': 'Go to "about" page' },
    {
        href: '/docs',
        title: 'Docs',
        'aria-label': 'Go to the documentation page',
    },
];
// TODO: divide nav and tools
export default function NavPanel() {
    const pathname = usePathname();

    return (
        <nav className={navStyles['nav-panel']}>
            {navLinks.map((linkProps) => (
                <NavLink
                    key={linkProps.href}
                    {...linkProps}
                    isActive={linkProps.href === pathname}
                />
            ))}

            <IconButton
                iconHref='#theme-icon'
                iconWidth={24}
                iconHeight={24}
                iconColor='var(--icon-color)'
                aria-label='Toggle theme'
            />

            <IconLink
                href='https://github.com/a-marigold/bun-crumb'
                target='_blank'
                rel='noopener norefferer'
                iconHref='#github-icon'
                iconWidth={20}
                iconHeight={20}
                iconColor='var(--icon-color)'
                aria-label='Open Bun Crumb github repository'
            />
        </nav>
    );
}
