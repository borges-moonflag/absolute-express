import CarouselCasesDeSucesso from "../CarouselCasesDeSucesso/page";

export default function CasesDeSucesso() {
    return(
        <section className="w-full flex py-[185px] justify-center items-center [background:radial-gradient(108.25%_27.71%_at_9.3%_99.98%,rgba(0,140,194,0.10)_0%,rgba(255,255,255,0)_100%),radial-gradient(40.87%_66.75%_at_96.17%_-9.78%,rgba(0,140,194,0.10)_0%,rgba(255,255,255,0)_100%),#FDFDFF]">
            <div className="w-full max-w-[1140px] flex justify-between items-start max-[1160px]:px-5 max-[1080px]:flex-col max-[1080px]:items-center max-[1080px]:justify-center max-[1080px]:gap-8">
                <div className="max-w-[385px] max-[1080px]:text-center">
                    <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--primary-four)] pb-2">Cases de Sucesso</h1>
                    <h2 className="font-sora text-[36px] font-normal leading-11 text-[var(--color-black)]">Olha o que <span className="font-bold">fizemos</span> com esses clientes:</h2>
                </div>
                <div className="max-w-[658px]">
                    <CarouselCasesDeSucesso/>
                </div>
            </div>
        </section>
    )
}