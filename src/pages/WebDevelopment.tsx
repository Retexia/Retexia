import Hero from '../components/services/web/Hero';
import WebIntakeForm from '../components/services/web/WebIntakeForm';

const WebDevelopment = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-background-dark min-h-screen">
            <Hero />
            <WebIntakeForm />
        </div>
    );
};

export default WebDevelopment;
