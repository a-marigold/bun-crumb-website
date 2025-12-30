import CodeBox from './components/CodeBox';

import exampleStyles from './ExampleSection.module.scss';

export default function ExampleSection() {
    return (
        <section className={exampleStyles['example-section']}>
            <CodeBox />
        </section>
    );
}
