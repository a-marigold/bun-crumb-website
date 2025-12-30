import HeroBox from './components/HeroBox';

import homeStyles from './Home.module.scss';

export default function Home() {
    return (
        <main className={homeStyles['home-page']}>
            <HeroBox />
        </main>
    );
}
