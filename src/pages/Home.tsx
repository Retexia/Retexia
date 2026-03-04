import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Services from '../components/home/Services';
import FeaturedWork from '../components/home/FeaturedWork';
import Advantage from '../components/home/Advantage';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <Hero />
            <TrustBar />
            <Services />
            <FeaturedWork />
            <Advantage />
            <FinalCTA />
        </div>
    );
};

export default Home;
