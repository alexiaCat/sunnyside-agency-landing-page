
import Arrow from '../assets/images/icon-arrow-down.svg';

export const Header = () => {
    return (
        <div className="header w-screen mt-[72px] h-[450px] md:h-[700px] text-neutral-white">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-fraunces font-extrabold text-[40px] text-center md:text-[56px] tracking-[5px] md:tracking-[10px] mt-[40px] md:mt-[150px]">WE ARE CREATIVES</h1>
                <img
                    src={Arrow}
                    alt="Arrow"
                    className="mt-[30px] md:mt-[80px]"
                />
            </div>
        </div>
    )
}
