'use static';

import { GITHUB_REPO_URL } from '@/constants/githubRepoUrl';

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
                href={GITHUB_REPO_URL}
                iconHref='#github-logo-icon'
                iconWidth={20}
                iconHeight={20}
                iconColor='var(--icon-color)'
                aria-label='Open Bun Crumb github repository'
            />
        </footer>
    );
}
