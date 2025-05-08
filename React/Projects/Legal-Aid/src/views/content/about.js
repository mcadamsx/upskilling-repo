import 'aos/dist/aos.css';
function About() {
    return (
          <div className='grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
            <div className=''>
            </div>
            <div className='text-white tracking-wider leading-loose z-30 '>
             <div data-aos-duration='2000' data-aos="fade-right" data-aos-delay="200" className='bg-blue-800 p-8 2xl:p-16 xl:p-16 lg:p-16 md:p-16 '>
             <p className='font-bold'>ABOUT US</p>
            <p className="text-left">Scottish Legal Aid Board Building, is a progressive reputable medium sized firm dedicated to providing 
                exceptional legal services to individuals, businesses, and organizations. With a team of highly skilled 
                and experienced lawyers, we bring together a dynamic team, with multifaceted skill sets which create 
                an unrivaled force, capable of tackling the most complex legal challenges with finesse and precision.</p>
             </div>
          </div>
          </div>
    );
}

export default About;