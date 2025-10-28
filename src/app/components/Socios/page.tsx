import LinkedInIRoundedIcon from "../Icon/LinkedInIRoundedIcon"
import NossaEstrutura from "../NossaEstrutura/page"


export default function Socios() {

    const socios = {
        imagem: "./socios-imagem.webp"
    }

    return (
        <section className="w-full flex flex-col items-center justify-center py-[78px] [background:radial-gradient(108.25%_27.71%_at_9.3%_99.98%,rgba(0,140,194,0.10)_0%,rgba(255,255,255,0)_100%),radial-gradient(40.87%_66.75%_at_96.17%_-9.78%,rgba(0,140,194,0.10)_0%,rgba(255,255,255,0)_100%),#FDFDFF]">
            <div className="w-full max-w-[1140px] flex flex-col justify-center items-center gap-10">
                <div className="w-full">
                    <div className="w-full flex justify-between items-center">
                    <div className="max-w-[563px]">
                        <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--primary-four)] pb-2">Sócio</h1>
                        <h2 className="font-sora text-[36px] font-normal leading-11 text-[var(--color-black)] pb-8">Quem está por trás da <span className="font-bold">Absolute Contábil?</span></h2>
                        <p className="font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)] pb-8">Lorem ipsum dolor sit amet consectetur. Magna sed integer suspendisse auctor mauris tristique. Imperdiet tellus laoreet leo quis sapien. Consequat neque in etiam ligula est elit. Potenti natoque blandit volutpat rhoncus in facilisis. Sed venenatis convallis elit posuere. In vel nec cursus bibendum leo leo scelerisque. Morbi vitae et sociis velit vitae dignissim condimentum scelerisque sit. Non lacinia scelerisque sit semper et dolor. Ut ut habitasse quisque ac auctor mi et ut. Mattis commodo etiam sit.</p>
                        <div className="flex gap-4">
                            <LinkedInIRoundedIcon />
                            <div>
                                <p className="font-sora text-[20px] font-semibold leading-7 text-[var(--primary-four)] pb-[13px]">Márcio de Oliveira Silva</p>
                                <p className="font-montserrat text-[14px] font-normal leading-4.5">Sócio Fundador da Absolute Contábil</p>
                            </div>
                        </div>
                    </div>
                    <img src={socios.imagem} alt="" />
                </div>

                <div className="w-full flex justify-between items-center">
                    <img src={socios.imagem} alt="" />
                    <div className="max-w-[563px]">
                        <p className="font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)] pb-8">Lorem ipsum dolor sit amet consectetur. Magna sed integer suspendisse auctor mauris tristique. Imperdiet tellus laoreet leo quis sapien. Consequat neque in etiam ligula est elit. Potenti natoque blandit volutpat rhoncus in facilisis. Sed venenatis convallis elit posuere. In vel nec cursus bibendum leo leo scelerisque. Morbi vitae et sociis velit vitae dignissim condimentum scelerisque sit. Non lacinia scelerisque sit semper et dolor. Ut ut habitasse quisque ac auctor mi et ut. Mattis commodo etiam sit.</p>
                        <div className="flex gap-4">
                            <LinkedInIRoundedIcon />
                            <div>
                                <p className="font-sora text-[20px] font-semibold leading-7 text-[var(--primary-four)] pb-[13px]">Allysson da Silva Oliveira</p>
                                <p className="font-montserrat text-[14px] font-normal leading-4.5">Sócia Fundadora da Absolute Contábil</p>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                <span className="w-full max-w-[1140px] h-[1px] bg-[rgba(0,132,203,0.20)] my-[110px]"></span>
            </div>
            <NossaEstrutura/>
        </section>
    )
}