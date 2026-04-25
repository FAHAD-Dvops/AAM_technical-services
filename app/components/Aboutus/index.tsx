import Image from "next/image";

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "About us.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Abdul Malik Technical Services (AMT) is a leading technical services provider based in Dubai, UAE. We specialize in comprehensive MEP works, interior fit-out, and maintenance solutions for residential, commercial, and hospitality projects.',
    },
    {
        heading: "Our Expertise.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'With extensive experience in the UAE market, we deliver high-quality HVAC, plumbing, electrical, and interior finishing works. Our skilled team ensures projects are completed on time with precision, professionalism, and adherence to international standards.',
    },
    {
        heading: "Our Commitment.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'We are committed to excellence, safety, and customer satisfaction. Every project reflects our dedication to quality craftsmanship and sustainable construction practices in the UAE.',
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Who we are.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;