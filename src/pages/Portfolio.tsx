import Hero from '../components/portfolio/Hero';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import TechBanner from '../components/portfolio/TechBanner';
import FinalCTA from '../components/portfolio/FinalCTA';

const Portfolio = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-background-dark min-h-screen">
            <Hero />
            <ProjectGrid />
            <TechBanner />
            <FinalCTA />
        </div>
    );
};

export default Portfolio;
