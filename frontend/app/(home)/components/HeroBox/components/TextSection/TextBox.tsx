import AccentLink from '@/UI/AccentLink';

import textStyles from './TextBox.module.scss';

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
                href='https://github.com/a-marigold/bun-crumb'
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
