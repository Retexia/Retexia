import { useParams, Link } from 'react-router-dom';

const CaseStudy = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="page-container">
            <h1>Single Case Study</h1>
            <p>Viewing project: <strong>{id}</strong></p>
            <Link to="/portfolio">← Back to Portfolio</Link>
        </div>
    );
};

export default CaseStudy;
