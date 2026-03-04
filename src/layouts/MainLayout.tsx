import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background-dark text-text-dark">
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
