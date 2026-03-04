import Hero from '../components/services/Hero';
import IntakeForm from '../components/services/IntakeForm';
import CoreServices from '../components/services/CoreServices';
import Process from '../components/services/Process';
import FinalCTA from '../components/services/FinalCTA';

const Services = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <Hero />
            <IntakeForm />
            <CoreServices />
            <Process />
            <FinalCTA />
        </div>
    );
};

export default Services;
