import TextSection from './components/TextSection';

import heroStyles from './HeroBox.module.scss';

export default function HeroBox() {
    return (
        <div className={heroStyles['hero-box']}>
            <TextSection />
        </div>
    );
}
