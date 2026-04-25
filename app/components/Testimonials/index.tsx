"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Ahmed Al Mansouri",
        profession: 'Project Manager, Luxury Villas Dubai',
        comment: 'AMT delivered exceptional results on our interior fit-out project. Their HVAC installation and MEP works were perfectly executed on time and within budget. Highly professional team!',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Fatima Khan",
        profession: 'Operations Manager, Hotel Chain',
        comment: 'We hired AMT for hotel renovation works and were impressed with their efficiency and quality. The plumbing, tiling, and painting works exceeded our expectations. Great communication throughout!',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Mohammed Al Ketbi",
        profession: 'Real Estate Developer',
        comment: 'AMT has been our trusted partner for multiple commercial projects. Their expertise in MEP systems and interior finishing is unmatched. Always reliable and professional.',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Noor Al Zaabi",
        profession: 'Building Owner, Business District',
        comment: 'Outstanding service from AMT! They completed our office fit-out perfectly with false ceiling, electrical works, and interior finishing. Couldn\'t have asked for better.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Hassan Al Maktoum",
        profession: 'Restaurant Owner, Dubai Marina',
        comment: 'AMT handled the complete restaurant fit-out including carpentry, plumbing, and electrical works. Their attention to detail and professionalism made all the difference!',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Laila Ahmed",
        profession: 'Maintenance Director, Shopping Mall',
        comment: 'Working with AMT for our regular maintenance needs has been seamless. Their HVAC maintenance and quick response to urgent repairs are exceptional.',
        imgSrc: '/images/testimonial/user3.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">Client testimonials & feedback.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">Client testimonials & feedback.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">Client testimonials & feedback.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
