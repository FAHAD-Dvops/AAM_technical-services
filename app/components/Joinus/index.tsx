
const Join = () => {
    return (
        <div id='contact-section' className="bg-joinus my-32">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">GET IN TOUCH</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10"> Reach out to AMT for your <br /> technical service requirements.</h2>
                    
                    <div className="mt-12 space-y-6">
                        <div>
                            <p className="text-lightblack text-lg font-normal mb-2">Email:</p>
                            <p className="text-xl font-semibold text-blue">info@abdulmaliktech.com</p>
                        </div>
                        
                        <div>
                            <p className="text-lightblack text-lg font-normal mb-2">Phone:</p>
                            <p className="text-xl font-semibold text-blue">+971-04-2716464</p>
                        </div>
                        
                        <div>
                            <p className="text-lightblack text-lg font-normal mb-2">Mobile:</p>
                            <p className="text-xl font-semibold text-blue">+971-50-5383062</p>
                        </div>
                        
                        <div>
                            <p className="text-lightblack text-lg font-normal mb-2">Address:</p>
                            <p className="text-xl font-semibold text-blue">Office No. 10A, Salah Al Ansari Building,<br /> Naif, Deira, Dubai, UAE</p>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:info@abdulmaliktech.com" className="bg-blue text-white font-semibold py-3 px-8 rounded-full hover:bg-hoblue transition-colors">
                            Contact Us
                        </a>
                        <a href="mailto:info@abdulmaliktech.com?subject=Quote Request" className="bg-darkpurple text-white font-semibold py-3 px-8 rounded-full hover:bg-blue transition-colors">
                            Get a Quote
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;
