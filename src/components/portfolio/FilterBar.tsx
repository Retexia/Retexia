import { useState } from 'react';

const FilterBar = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = [
        'All',
        'Web Development',
        'Mobile Apps',
        'UI/UX Design'
    ];

    return (
        <section className="sticky top-20 z-40 bg-background-dark/90 backdrop-blur-md border-y border-white/5 py-4 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 pb-2 md:pb-0">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(217,36,27,0.4)]'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FilterBar;
