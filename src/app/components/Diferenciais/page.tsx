import BankIcon from "../Icon/Bankicon";
import ChartHistogramIcon from "../Icon/ChartHistogramIcon";
import CommentIcon from "../Icon/CommentIcon";
import MonitorPulseIcon from "../Icon/MonitorPulseIcon";
import SmallArrowIcon from "../Icon/SmallArrowIcon";

export default function Diferenciais() {

    const image = "./foto-diferenciais-home.webp";

    return(
        <section className="w-full flex items-center justify-center pb-[91px] max-xl:px-5">
            <div className="max-w-[1440px] flex justify-center items-center px-5 gap-[84px] max-lg:flex-col">
                <div className="flex max-[612px]:items-center max-[612px]:justify-center">
                    <img src={image} alt="" width={518} height={557} />
                </div>
                <div className="max-w-[563px]">
                    <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--primary-four)] pb-2 max-[340px]:text-center">Diferenciais</h1>
                    <h2 className=" font-sora text-[36px] font-bold leading-11 text-[var(--primary-second)] pb-8 max-[612px]:text-[28px] max-[612px]:leading-[36px] max-[340px]:text-center">Muito além da contabilidade tradicional</h2>
                    <p className="font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)] pb-8 max-sm:text-center">Nosso diferencial está em transformar dados em estratégias, aproximando tecnologia e consultoria para entregar transparência, clareza e resultados reais.</p>
                    <div className="flex flex-col gap-6">
                        <div className="w-fit flex items-center gap-4 py-4 px-12 bg-[var(--seccondary-second)] rounded-full font-sora text-[16px] font-normal leading-6 transition-all duration-300 group hover:bg-[var(--primary-four)] hover:px-16 max-sm:px-6 max-sm:rounded-2xl max-sm:text-center">
                            <CommentIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className="" /> 
                            <p className="text-[var(--primary-tree)] group-hover:text-[var(--seccondary-second)]">Consultoria além dos números</p>
                            <SmallArrowIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className="w-5 h-5 hidden group-hover:block"/>
                            </div>
                        <div className="w-fit flex items-center gap-4 py-4 px-12 bg-[var(--seccondary-second)] rounded-full font-sora text-[16px] font-normal leading-6 transition-all duration-300 group hover:bg-[var(--primary-four)] hover:px-16 max-sm:px-6 max-sm:rounded-2xl max-sm:text-center">
                            <ChartHistogramIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className=""/>
                            <p className="text-[var(--primary-tree)] group-hover:text-[var(--seccondary-second)]">Experiência em operações complexas</p>
                            <SmallArrowIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className="w-5 h-5 hidden group-hover:block"/>
                            </div>
                        <div className="w-fit flex items-center gap-4 py-4 px-12 bg-[var(--seccondary-second)] rounded-full font-sora text-[16px] font-normal leading-6 transition-all duration-300 group hover:bg-[var(--primary-four)] hover:px-16 max-sm:px-6 max-sm:rounded-2xl max-sm:text-center">
                            <MonitorPulseIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className="" />
                            <p className="text-[var(--primary-tree)] group-hover:text-[var(--seccondary-second)]">Tecnologia a favor da gestão</p>
                            <SmallArrowIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className="w-5 h-5 hidden group-hover:block"/>
                            </div>
                        <div className="w-fit flex items-center gap-4 py-4 px-12 bg-[var(--seccondary-second)] rounded-full font-sora text-[16px] font-normal leading-6 transition-all duration-300 group hover:bg-[var(--primary-four)] hover:px-16 max-sm:px-6 max-sm:rounded-2xl max-sm:text-center">
                            <BankIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className=""/>
                            <p className="text-[var(--primary-tree)] group-hover:text-[var(--seccondary-second)]">Expertise na área advocatícia</p>
                            <SmallArrowIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className="w-5 h-5 hidden group-hover:block"/>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}