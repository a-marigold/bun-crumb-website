'use static';
//

import NavLink from '@/UI/NavLink';

import IconLink from '@/UI/IconLink';

import footerStyles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={footerStyles['footer']}>
            <NavLink
                href='/docs'
                title='Get started'
                aria-label='Get started with documentation'
            />

            <IconLink
                href='https://github.com/a-marigold/bun-crumb'
                iconHref='#github-icon'
                iconWidth={20}
                iconHeight={20}
                iconColor='var(--icon-color)'
                aria-label='Open Bun Crumb github repository'
            />
        </footer>
    );
}
