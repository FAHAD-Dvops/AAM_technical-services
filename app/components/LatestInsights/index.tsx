"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';

interface Article {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    fullContent: string;
    image: string;
}

const articlesData: Article[] = [
    {
        id: 1,
        title: 'MEP Installation Best Practices in Dubai',
        excerpt: 'Discover the latest standards and techniques for MEP installation in commercial and residential projects.',
        date: 'April 2025',
        category: 'MEP Systems',
        image: '/images/articles/article.png',
        fullContent: 'Mechanical, Electrical, and Plumbing (MEP) systems are the backbone of any modern building. In Dubai\'s rapidly evolving construction landscape, following best practices ensures efficiency, safety, and compliance with local regulations.\n\nKey considerations include:\n• Proper coordination between trades\n• Using BIM technology for clash detection\n• Adhering to Dubai Municipality standards\n• Regular quality inspections\n• Preventive maintenance planning\n\nOur team at AMT specializes in delivering MEP solutions that meet the highest international standards while maintaining cost-effectiveness.'
    },
    {
        id: 2,
        title: 'HVAC Maintenance Tips for Longevity',
        excerpt: 'Learn essential maintenance strategies to extend the life of your HVAC systems and improve efficiency.',
        date: 'March 2025',
        category: 'HVAC Systems',
        image: '/images/articles/article2.png',
        fullContent: 'Regular HVAC maintenance is crucial for optimal performance and energy efficiency in Dubai\'s hot climate.\n\nEssential maintenance tips:\n• Change air filters every 30-90 days\n• Clean evaporator and condenser coils quarterly\n• Check refrigerant levels annually\n• Inspect ductwork for leaks\n• Schedule professional servicing twice yearly\n• Monitor thermostat accuracy\n\nProper maintenance can reduce energy consumption by up to 15% and prevent costly breakdowns. AMT provides comprehensive HVAC maintenance packages tailored to your facility\'s needs.'
    },
    {
        id: 3,
        title: 'Interior Fit-Out Trends 2025',
        excerpt: 'Explore the latest design trends and technologies shaping modern interior fit-outs.',
        date: 'February 2025',
        category: 'Interior Design',
        image: '/images/articles/article3.png',
        fullContent: 'The interior fit-out industry is evolving with sustainable materials and smart technologies taking center stage.\n\nKey trends for 2025:\n• Sustainable and eco-friendly materials\n• Smart building automation systems\n• Flexible workspace design\n• Enhanced indoor air quality solutions\n• Biophilic design elements\n• Open collaborative spaces\n\nThese trends not only enhance aesthetics but also improve productivity and well-being. AMT integrates these modern approaches into every project to create spaces that are both beautiful and functional.'
    },
    {
        id: 4,
        title: 'Electrical Safety Standards in Construction',
        excerpt: 'Understanding electrical safety requirements for residential and commercial installations.',
        date: 'January 2025',
        category: 'Electrical Works',
        image: '/images/articles/article.png',
        fullContent: 'Electrical safety is paramount in construction projects. Compliance with UAE electrical codes and standards is mandatory.\n\nCritical safety measures:\n• Proper grounding and bonding systems\n• RCD protection on all circuits\n• Cable sizing and protection\n• Fire-rated cable trays\n• Regular safety inspections\n• Staff training and certification\n\nAMT ensures all electrical installations meet or exceed Dubai Municipality and DEWA requirements, protecting your investment and occupants.'
    },
    {
        id: 5,
        title: 'Plumbing Solutions for Modern Homes',
        excerpt: 'Advanced plumbing technologies and solutions for contemporary residential properties.',
        date: 'December 2024',
        category: 'Plumbing',
        image: '/images/articles/article2.png',
        fullContent: 'Modern plumbing extends beyond basic functionality. Today\'s solutions focus on efficiency, sustainability, and reliability.\n\nModern plumbing innovations:\n• Water-saving fixtures and systems\n• Smart leak detection systems\n• Tankless water heaters\n• Advanced water filtration\n• Sustainable waste management\n• IoT-enabled monitoring\n\nAMT implements these advanced solutions to provide homeowners with efficient, reliable plumbing systems that reduce water consumption and maintenance costs.'
    },
    {
        id: 6,
        title: 'Carpentry & Flooring Excellence',
        excerpt: 'Premium materials and techniques for superior carpentry and flooring installations.',
        date: 'November 2024',
        category: 'Interior Finishing',
        image: '/images/articles/article3.png',
        fullContent: 'Quality carpentry and flooring create the foundation of a beautiful interior space. Selecting the right materials and installation techniques is essential.\n\nKey considerations:\n• High-quality material selection\n• Proper subfloor preparation\n• Climate acclimatization\n• Professional installation techniques\n• Protective sealing and finishing\n• Warranty and after-sales support\n\nAMT\'s expert craftsmen deliver exceptional results using premium materials and proven techniques to create stunning, durable flooring and carpentry work.'
    }
];

const LatestInsights = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const openArticle = (article: Article) => {
        setSelectedArticle(article);
        setIsOpen(true);
    };

    const closeArticle = () => {
        setIsOpen(false);
        setSelectedArticle(null);
    };

    return (
        <div className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-6xl font-bold text-darkpurple mb-4">Latest Industry Insights</h2>
                    <p className="text-lg text-lightblack">Stay updated with the latest trends and best practices in MEP and interior fit-out</p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articlesData.map((article) => (
                        <div key={article.id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                                <span className="absolute top-4 right-4 bg-blue text-white px-3 py-1 rounded-full text-xs font-semibold">{article.category}</span>
                            </div>

                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                                <h3 className="text-xl font-bold text-darkpurple mb-3 line-clamp-2">{article.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                                <button
                                    onClick={() => openArticle(article)}
                                    className="inline-block text-blue font-semibold hover:text-hoblue transition-colors"
                                >
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Article Modal */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeArticle}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {selectedArticle && (
                                        <>
                                            <div className="relative h-64 mb-6 -mx-6 -mt-6">
                                                <Image
                                                    src={selectedArticle.image}
                                                    alt={selectedArticle.title}
                                                    width={800}
                                                    height={400}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <span className="inline-block bg-blue text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">{selectedArticle.category}</span>

                                            <h2 className="text-3xl font-bold text-darkpurple mb-2">{selectedArticle.title}</h2>
                                            <p className="text-sm text-gray-500 mb-6">{selectedArticle.date}</p>

                                            <div className="prose prose-sm max-w-none text-gray-700 mb-6">
                                                {selectedArticle.fullContent.split('\n').map((paragraph, index) => (
                                                    paragraph.trim() && (
                                                        <p key={index} className="mb-4 whitespace-pre-wrap">
                                                            {paragraph}
                                                        </p>
                                                    )
                                                ))}
                                            </div>

                                            <button
                                                onClick={closeArticle}
                                                className="w-full bg-blue text-white py-3 rounded-lg font-semibold hover:bg-hoblue transition-colors"
                                            >
                                                Close
                                            </button>
                                        </>
                                    )}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default LatestInsights;
