import ContactButton from '../components/ContactButton'
import ContactImage from '../assets/contact.png'
import DataSteps from '../assets/number.png'

const ContactUs = () => {
    return (
        <>
            {/*SECTION 1*/}
            <div className="w-full h-screen bg-black p-4 flex flex-col items-center justify-between">
                <ContactButton />
                {/*Images */}
                <img src={ContactImage} alt="engranaje" className='w-[65vw]' />
                <span className='text-white font-semibold text-2xl text-center'>
                    We combine experience, innovation, and a strategic approach to drive your brand’s <br />
                    growth in the digital environment, achieving results that surpass your expectations. <br />
                    This is what sets us apart.
                </span>

                {/*STEPS  */}
            </div>
            <div className='h-[60vh] w-full flex flex-col justify-center items-center'>
                <img className='w-[70vw]' src={DataSteps} alt="data_steps" />
            </div>



            {/*SECTION 3*/}
            <div className="w-full h-screen bg-black p-8 flex flex-col items-center justify-between text-white">
                <div className='h-[30vh] w-[60vw]  grid grid-cols-3 place-content-center gap-x-8'>
                    <div className=' flex flex-col tracking-wide'>
                        <span className='text-center text-2xl font-semibold mb-2 bg-gradient-to-r from-black from-10% to-gray-700 p-2 rounded-xl'>
                            MULTIDISCIPLINARY
                            EXPERTISE
                        </span>

                        <span className='text-xl text-center '>
                            Our team of strategists, creatives, content specialists, SEO experts, digital advertisers, and analysts
                        </span>
                    </div>
                    <div className='flex flex-col text-center  tracking-wide'>
                        <span className=' text-center text-2xl font-semibold mb-2 bg-gradient-to-r from-black from-10% to-gray-700 p-2 rounded-xl'>
                            TRANSPARENCY AND
                            ACCESSIBILITY
                        </span>

                        <span className='text-xl text-center '>
                            We maintain open, consistent communication, keeping you informed every step of the way with progress updates
                        </span>
                    </div>
                    <div className='flex flex-col text-center  tracking-wide'>
                        <span className=' text-center text-2xl font-semibold mb-2 bg-gradient-to-r from-black from-10% to-gray-700 p-2 rounded-xl'>
                            CONSTANT INNOVATION
                        </span>

                        <span className='text-xl text-center '>
                            We stay ahead of the curve on the latest trends, tools, and platforms.
                        </span>
                    </div>


                </div>

                <div>
                    <span className=' font-bold text-5xl text-center tracking-wide'>Tell us, what do you need?</span>
                    <ContactButton />
                </div>
            </div>
        </>
    )
}

export default ContactUs