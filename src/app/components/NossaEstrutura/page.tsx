import CarouselCards from "../CarouselSection/CaroulseCards";


export default function NossaEstrutura() {
    return(
        <div className="w-full flex items-center justify-center ">
            <div className="flex flex-col justify-center items-center overflow-hidden">
                <div className="w-full max-w-[1140px] text-center pb-[100px]">
                    <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--primary-four)] pb-2">Nossa estrutura</h1>
                    <h2 className="font-sora text-[36px] font-normal leading-11 text-[var(--color-black)]">Nosso <span className="font-bold">escritório</span></h2>
                </div>
                <CarouselCards/>
            </div>
        </div>
    )
}