import Emily from '/images/image-emily.jpg';
import Thomas from '/images/image-thomas.jpg';
import Jennie from '/images/image-jennie.jpg';

export const Testimonials = () => {
    return (
        <div >
            <h1 className="text-center text-neutral-grayish-blue font-fraunces font-extrabold text-[16px] md:text-[20px] tracking-[4px] md:tracking-[8px] pt-[60px] md:pt-[140px]">CLIENT TESTIMONIALS</h1>

            <div className="flex flex-col md:flex-row w-screen md:px-[100px] pt-[80px] pb-[80px] md:pb-[120px] font-barlow">

                <div className="flex flex-col items-center w-full md:w-1/3 ">
                    <img
                        src={Emily}
                        className='inline-block h-[72px] w-[72px] rounded-full ring-2 ring-white'
                        alt="emily"
                    />

                    <p className="px-6 text-neutral-very-dark-grayish-blue text-center text-[18px] py-12">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <h3 className="text-[19px] text-neutral-very-dark-desaturated-blue font-fraunces font-extrabold">Emily R.</h3>
                    <h4 className="text-neutral-grayish-blue text-[13px]">Marketing Director</h4>
                </div>

                <div className="flex flex-col items-center w-full md:w-1/3 py-[80px] md:py-0">
                    <img
                        src={Thomas}
                        className='inline-block h-[72px] w-[72px] rounded-full ring-2 ring-white'
                        alt="thomas"
                    />
                    <p className="px-6 text-neutral-very-dark-grayish-blue text-center text-[18px] py-12">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                    <h3 className="text-[19px] text-neutral-very-dark-desaturated-blue font-fraunces font-extrabold">Thomas S.</h3>
                    <h4 className="text-neutral-grayish-blue text-[13px]">Chief Operating Officer</h4>
                </div>

                <div className="flex flex-col items-center w-full md:w-1/3">
                    <img
                        src={Jennie}
                        className='inline-block h-[72px] w-[72px] rounded-full ring-2 ring-white'
                        alt="jennie"
                    />
                    <p className="px-6 text-neutral-very-dark-grayish-blue text-center text-[18px] py-12">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <h3 className="text-[19px] text-neutral-very-dark-desaturated-blue font-fraunces font-extrabold">Jennie F.</h3>
                    <h4 className="text-neutral-grayish-blue text-[13px]">Business Owner</h4>
                </div>

            </div>
        </div>
    )
}
