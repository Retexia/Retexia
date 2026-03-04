import Hero from '../components/services/mobile/Hero';
import MobileIntakeForm from '../components/services/mobile/MobileIntakeForm';

const MobileDevelopment = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-background-dark min-h-screen">
            <Hero />
            <MobileIntakeForm />
        </div>
    );
};

export default MobileDevelopment;
