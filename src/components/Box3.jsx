import Guinda from '/images/desktop/image-graphic-design.jpg';
import Naranja from '/images/desktop/image-photography.jpg';


export const Box3 = () => {
    return (
        <div className="flex flex-col md:flex-row w-screen h-auto md:h-[600px] font-fraunces">
            <div className="relative w-full md:w-1/2">
                <img
                    src={Guinda}
                    className='max-w-full md:h-auto w-full h-[600px] max-h-[600px]'
                    alt="guinda"
                />
                <div className="absolute inset-0 flex flex-col justify-end items-center">
                    <h2 className="text-[27px] md:text-3xl font-extrabold text-primary-dark-desaturated-cyan">Graphic Design</h2>
                    <p className="text-[16px] md:text-lg text-center font-barlow px-3 md:px-[24%] pb-14 pt-6 text-primary-dark-desaturated-cyan">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
            </div>


            <div className="relative w-full md:w-1/2">
                <img
                    src={Naranja}
                    className='max-w-full md:h-auto w-full h-[600px] max-h-[600px]'
                    alt="Naranja"
                />

                <div className="absolute inset-0 flex flex-col justify-end items-center text-neutral-very-dark-desaturated-blue">
                    <h2 className="text-[27px] md:text-3xl font-extrabold">Photography</h2>
                    <p className="text-[16px] md:text-lg text-center font-barlow px-3 md:px-[24%] pb-14 pt-6 text-primary-dark-blue">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>

        </div>
    )
}
