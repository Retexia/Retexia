
import Hero from '../components/services/design/Hero';
import DesignIntakeForm from '../components/services/design/DesignIntakeForm';

const Design = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-background-dark min-h-screen">
            <Hero />
            <DesignIntakeForm />
        </div>
    );
};

export default Design;
