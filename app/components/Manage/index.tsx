"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';


const names = [
    {
        heading: "Basic Maintenance",
        price: "Upon Request",
        user: 'for small projects',
        button: "Request Quote",
        profiles: '• Plumbing Works',
        posts: '• Painting Services',
        templates: "• Basic Repairs",
        view: "• Site Assessment",
        support: 'Professional Support',
        category: 'yearly'
    },
    {
        heading: "Interior Fit-Out",
        price: "Custom",
        user: 'complete project',
        button: "Request Quote",
        profiles: '• MEP Installation',
        posts: '• Carpentry Works',
        templates: "• Tiling & Flooring",
        view: "• Project Management",
        support: '24/7 Professional Support',
        category: 'yearly'
    },
    {
        heading: "Premium Solutions",
        price: "Custom",
        user: 'enterprise solutions',
        button: "Request Quote",
        profiles: '• HVAC Systems',
        posts: '• Full Interior Design',
        templates: "• MEP Complete Works",
        view: "• Ongoing Maintenance",
        support: 'Dedicated Support Team',
        category: 'yearly'
    },
    {
        heading: "Premium Solutions",
        price: "Custom",
        user: 'enterprise solutions',
        button: "Request Quote",
        profiles: '• HVAC Systems',
        posts: '• Full Interior Design',
        templates: "• MEP Complete Works",
        view: "• Ongoing Maintenance",
        support: 'Dedicated Support Team',
        category: 'monthly'
    },
    {
        heading: "Basic Maintenance",
        price: "Upon Request",
        user: 'for small projects',
        button: "Request Quote",
        profiles: '• Plumbing Works',
        posts: '• Painting Services',
        templates: "• Basic Repairs",
        view: "• Site Assessment",
        support: 'Professional Support',
        category: 'monthly'
    },
    {
        heading: "Interior Fit-Out",
        price: "Custom",
        user: 'complete project',
        button: "Request Quote",
        profiles: '• MEP Installation',
        posts: '• Carpentry Works',
        templates: "• Tiling & Flooring",
        view: "• Project Management",
        support: '24/7 Professional Support',
        category: 'monthly'
    },


]

const Manage = () => {

    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Our Service Packages & <br /> Solutions.</h3>


                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Customized Solutions</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Professional Team</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Guaranteed Quality</h4>
                    </div>
                </div>


                <div className='mt-6 relative'>
                    <div className='dance-text mb-5'>talk to our experts</div>
                    <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="toggleImage" />
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>View Options</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`${enabled ? 'bg-darkpurple' : 'bg-darkpurple'
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only text-black">Enable notifications</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>All Services</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>{items.price}</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <Link href="#contact-section" className='inline-block text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'>{items.button}</Link>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.posts}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.templates}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.view}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.support}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;
