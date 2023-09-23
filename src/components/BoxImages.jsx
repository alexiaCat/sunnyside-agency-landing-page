
export const BoxImages = () => {
    return (
        <div className="flex flex-col md:flex-row">
        <div className="flex flex-row w-full md:w-1/2">
            <img src="/assets/images/desktop/image-gallery-milkbottles.jpg" alt="leche" className="max-w-full h-[180px] md:h-auto w-1/2 max-h-[600px]" />
            <img src="/assets/images/desktop/image-gallery-orange.jpg" alt="orange" className="max-w-full h-[180px] md:h-auto w-1/2 max-h-[600px]" />
        </div>
        <div className="flex flex-row w-full md:w-1/2">
            <img src="/assets/images/desktop/image-gallery-cone.jpg" alt="barquillo" className="max-w-full h-[180px] md:h-auto w-1/2 max-h-[600px]" />
            <img src="/assets/images/desktop/image-gallery-sugarcubes.jpg" alt="azucar" className="max-w-full h-[180px] md:h-auto w-1/2 max-h-[600px]" />
        </div>
    </div>
    )
}
