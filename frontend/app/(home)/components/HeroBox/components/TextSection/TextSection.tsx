import { GITHUB_REPO_URL } from '@/constants/githubRepoUrl';

import AccentLink from '@/UI/AccentLink';

import textStyles from './TextSection.module.scss';

export default function TextSection() {
    return (
        <section className={textStyles['text-section']}>
            <div className={textStyles['text-block']}>
                <h1 className={textStyles['title']}> Bun Crumb </h1>

                <p className={textStyles['description']}>
                    Library for creating HTTP servers with Bun
                </p>
            </div>

            <AccentLink
                href={GITHUB_REPO_URL}
                title='Star on GitHub'
                aria-label='Give a star on GitHub'
                icon={{
                    iconHref: '#star-icon',
                    iconWidth: 16,

                    iconHeight: 16,

                    iconColor: 'var(--font-color)',
                }}
            />
        </section>
    );
}
