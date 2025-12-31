import Link from 'next/link';

import NavPanel from './components/NavPanel';
import ToolBlock from './components/ToolBlock/ToolBlock';

import headerStyles from './Header.module.scss';

export default function Header() {
    return (
        <header className={headerStyles['header']}>
            <Link
                href='/'
                aria-label='Go to home page'
                prefetch={false}
                className={headerStyles['logo-link']}
            >
                <svg
                    width={89}
                    height={20}
                    aria-hidden='true'
                    color='var(--icon-color)'
                >
                    <use href='#crumb-logo-icon' />
                </svg>
            </Link>

            <div className={headerStyles['nav-block']}>
                <NavPanel />

                <ToolBlock />
            </div>
        </header>
    );
}
