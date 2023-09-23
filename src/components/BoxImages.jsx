import Leche from '/images/desktop/image-gallery-milkbottles.jpg';
import Orange from '/images/desktop/image-gallery-orange.jpg';
import Barquillo from '/images/desktop/image-gallery-cone.jpg';
import Azucar from '/images/desktop/image-gallery-sugarcubes.jpg';

export const BoxImages = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-row w-full md:w-1/2">
                <img
                    src={Leche}
                    className='max-w-full h-[180px] md:h-auto w-1/2 max-h-[600px]'
                    alt="leche"
                />
                <img
                    src={Orange}
                    className='max-w-full h-[180px] md:h-auto w-1/2 max-h-[600px]'
                    alt="orange"
                />
            </div>
            <div className="flex flex-row w-full md:w-1/2">
                <img
                    src={Barquillo}
                    className='max-w-full h-[180px] md:h-auto w-1/2 max-h-[600px]'
                    alt="barquillo"
                />
                <img
                    src={Azucar}
                    className='max-w-full h-[180px] md:h-auto w-1/2 max-h-[600px]'
                    alt="azucar"
                />
            </div>
        </div>
    )
}
