import Link from 'next/link';

import NavPanel from './components/NavPanel';

import headerStyles from './Header.module.scss';

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

            <NavPanel />
        </header>
    );
}
