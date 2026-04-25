"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        time: "Read",
        heading: 'Interior Fit-Out Best',
        heading2: 'Practices in Dubai',
        name: "Published on AMT Blog",
        date: 'April 2025',
        imgSrc: '/images/articles/article.png',
    },
    {
        time: "Read",
        heading: 'HVAC Systems: Maintenance',
        heading2: 'Tips for Longevity',
        name: "Published on AMT Blog",
        date: 'March 2025',
        imgSrc: '/images/articles/article2.png',
    },
    {
        time: "Read",
        heading: 'MEP Installation Standards',
        heading2: 'in UAE Construction',
        name: "Published on AMT Blog",
        date: 'February 2025',
        imgSrc: '/images/articles/article3.png',
    },
    {
        time: "Read",
        heading: 'Commercial Office Fit-Out',
        heading2: 'Guide & Timeline',
        name: "Published on AMT Blog",
        date: 'January 2025',
        imgSrc: '/images/articles/article.png',
    },
    {
        time: "Read",
        heading: 'Plumbing Renovation',
        heading2: 'for Modern Homes',
        name: "Published on AMT Blog",
        date: 'December 2024',
        imgSrc: '/images/articles/article2.png',
    },
    {
        time: "Read",
        heading: 'Carpentry & Flooring',
        heading2: 'Excellence Tips',
        name: "Published on AMT Blog",
        date: 'November 2024',
        imgSrc: '/images/articles/article3.png',
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
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
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
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">RESOURCES</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Latest industry insights.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" />

                                    <Link href="/">
                                        <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">{items.time} read</h3>
                                    </Link>
                                    <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                    <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                    <div>
                                        <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{items.name}</h3>
                                        <h3 className='text-base font-normal pb-1 opacity-75'>{items.date}</h3>
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
