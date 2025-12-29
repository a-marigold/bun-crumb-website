'use static';
//

import NavLink from '@/UI/NavLink';

import IconButton from '@/UI/IconButton';

import footerStyles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={footerStyles['footer']}>
            <NavLink
                href='/docs'
                title='Get started'
                aria-label='Get started with documentation'
            />

            <IconButton
                iconHref='#github-icon'
                iconWidth={20}
                iconHeight={20}
                iconColor='var(--icon-color)'
                aria-label='Open Bun Crumb github repository'
            />
        </footer>
    );
}
