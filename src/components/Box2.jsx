import Huevo from '/images/desktop/image-transform.jpg';
import Copa from '/images/desktop/image-stand-out.jpg';

export const Box2 = () => {
    return (
        <div className="flex flex-col w-screen h-auto md:h-[1200px] font-fraunces">
            <div className="flex  md:flex-row flex-col-reverse md:h-1/2 h-[740px]">
                <div className=" w-full md:w-1/2 px-7 md:text-left text-center md:px-[150px] flex flex-col md:h-auto h-[440px] justify-center">
                    <h1 className="text-neutral-very-dark-desaturated-blue text-[30px] md:text-[44px] font-extrabold leading-tight">Transform your brand</h1>
                    <p className="font-barlow text-neutral-dark-grayish-blue text-[16.5px] my-9">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <a className="underline decoration-primary-yellow/[.25] decoration-8 font-extrabold" href=""> LEARN MORE</a>
                </div>

                <div className="w-full md:w-1/2 md:h-auto h-[300px]">
                <img
                        src={Huevo}
                        alt="Huevo"
                        className="max-w-full h-auto w-full max-h-[600px]"
                    />
                </div>
            </div>


            <div className="flex  flex-col md:flex-row md:h-1/2 h-[740px]">
                <div className="w-full md:w-1/2 md:h-auto h-[300px]">
                    <img
                        src={Copa}
                        alt="Copa"
                        className="max-w-full h-auto w-full max-h-[600px]"
                    />
                </div>

                <div className=" w-full md:w-1/2 px-7 md:text-left text-center md:px-[150px] flex flex-col md:h-auto h-[440px] justify-center">
                    <h1 className="text-neutral-very-dark-desaturated-blue text-[30px] md:text-[44px] font-extrabold leading-tight">Stand out to the right audience</h1>
                    <p className="font-barlow text-neutral-dark-grayish-blue text-[16.5px] my-9">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                    <a className="underline decoration-primary-soft-red/[.25] decoration-8 font-extrabold" href="">LEARN MORE</a>
                </div>
            </div>
        </div>
    )
}
