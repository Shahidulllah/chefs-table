import banner from '../../assets/banner.webp'
const Banner = () => {
    return (
        <div className='mt-14'>
            <div className='relative text-white space-y-10 '>
                <img className='w-full rounded-2xl h-[600px]' src={banner} alt="" />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                    <h1 className='text-5xl font-bold mb-10 -mt-24'>Discover an exceptional cooking <br />
                        class tailored for you!</h1>
                    <p className='text-xl mb-10'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
                        problems to become an exceptionally well world-class Programmer.</p>

                        <button className='font-bold text-xl bg-green-500 px-7 py-4 rounded-full text-black'>Explore Now</button>
                        <button className='font-bold text-xl border-2 ml-5 px-7 py-4 rounded-full'>Explore Now</button>
                        

                </div>
            </div>
        </div>
    );
};

export default Banner;