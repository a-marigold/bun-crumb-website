// tw

// component

import TextSection from './components/TextSection';

import ExampleSection from './components/ExampleSection';

import heroStyles from './HeroBox.module.scss';

export default function HeroBox() {
    return (
        <div className={heroStyles['hero-box']}>
            <ExampleSection />

            <TextSection />
        </div>
    );
}
