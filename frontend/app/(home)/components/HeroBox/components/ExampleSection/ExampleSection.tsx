import Link from 'next/link';

import CodeBox from './components/CodeBox';

import exampleStyles from './ExampleSection.module.scss';

export default function ExampleSection() {
    return (
        <section className={exampleStyles['example-section']}>
            <CodeBox />

            <p className={exampleStyles['hint']}>
                Get more examples in&nbsp;
                <Link
                    href='/docs'
                    className={exampleStyles['highlighted-link']}
                >
                    docs
                </Link>
            </p>
        </section>
    );
}
