import BriefCaseIcon from "../Icon/BriefCaseIcon";
import ShoppingCartIcon from "../Icon/ShoppingCartIcon";
import StethoscopeIcon from "../Icon/StethoscopeIcon";
import UserIcon from "../Icon/UserIcon";

export default function Especialidades() {
    return (
        <section className="w-full flex items-center justify-center bg-radial-especialidades py-[100px] max-xl:px-5">
            <div className="w-full max-w-[1140] flex flex-col justify-center items-center gap-4.5">
                <div className="w-full flex justify-between items-center max-[1150px]:flex-col max-[1150px]:gap-5">
                    <div className="flex flex-col max-[1150px]:text-center">
                        <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--primary-four)] pb-2">Nossas Especialidades</h1>
                        <h2 className="max-w-[727px] font-sora text-[36px] font-normal leading-[54px] text-[var(--primary-second)] max-[612px]:text-[28px] max-[612px]:leading-[36px] max-[340px]:text-center">Segmentos em que nossa experiência faz a diferença</h2>
                    </div>
                    <button className="py-3 px-8 rounded-4xl cursor-pointer bg-[var(--primary-four)] font-montserrat text-base font-bold leading-6 text-[var(--seccondary-one)] hover:bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)] transition-all duration-500">Fale conosco</button>
                </div>
                <div className="w-full flex flex-wrap justify-center items-center gap-[65px]">
                    <div className="w-[235px] min-h-[343px] flex flex-col items-center justify-center bg-[var(--seccondary-second)] rounded-[45px] font-montserrat text-center group transition-colors duration-500 hover:bg-[var(--primary-tree)]">
                        <p className="text-[20px] font-semibold leading-7 text-[var(--primary-tree)] pb-[47px] transition-all duration-500 group-hover:pb-[24px] group-hover:text-[var(--color-white)]">
                            Prestadores de <br />serviço e comércio
                        </p>
                        <p className="opacity-0 translate-y-2 text-[14px] font-normal leading-[22px] text-[var(--primary-tree)] pb-[23px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[var(--color-white)]">
                            Estamos prontos para atender diversos segmentos de prestadores de serviço e comércio
                        </p>
                        <UserIcon
                            fillColor="fill-[var(--primary-tree)]"
                            fillColorHover="group-hover:fill-[var(--color-white)]"
                            className=""
                        />
                    </div>
                    <div className="w-[235px] min-h-[343px] flex flex-col items-center justify-center bg-[var(--seccondary-second)] rounded-[45px] font-montserrat text-center group transition-colors duration-500 hover:bg-[var(--primary-tree)]">
                        <p className="text-[20px] font-semibold leading-7 text-[var(--primary-tree)] pb-[47px] transition-all duration-500 group-hover:pb-[24px] group-hover:text-[var(--color-white)]">
                            Supermercados
                        </p>
                        <p className="opacity-0 translate-y-2 text-[14px] font-normal leading-[22px] text-[var(--primary-tree)] pb-[23px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[var(--color-white)]">
                            Temos experiência no segmento, apostando em soluções personalizadas para o setor<br/><br/><br/>
                        </p>
                        <ShoppingCartIcon
                            fillColor="fill-[var(--primary-tree)]"
                            fillColorHover="group-hover:fill-[var(--color-white)]"
                            className=""
                        />
                    </div>
                    <div className="w-[235px] min-h-[343px] flex flex-col items-center justify-center bg-[var(--seccondary-second)] rounded-[45px] font-montserrat text-center group transition-colors duration-500 hover:bg-[var(--primary-tree)]">
                        <p className="text-[20px] font-semibold leading-7 text-[var(--primary-tree)] pb-[47px] transition-all duration-500 group-hover:pb-[24px] group-hover:text-[var(--color-white)]">
                            Advocatício
                        </p>
                        <p className="opacity-0 translate-y-2 text-[14px] font-normal leading-[22px] text-[var(--primary-tree)] pb-[23px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[var(--color-white)]">
                            Escritórios e advogados autônomos podem contar com nossa expertise no setor<br/><br/><br/>
                        </p>
                        <BriefCaseIcon
                            fillColor="fill-[var(--primary-tree)]"
                            fillColorHover="group-hover:fill-[var(--color-white)]"
                            className=""
                        />
                    </div>
                    <div className="w-[235px] min-h-[343px] flex flex-col items-center justify-center bg-[var(--seccondary-second)] rounded-[45px] font-montserrat text-center group transition-colors duration-500 hover:bg-[var(--primary-tree)]">
                        <p className="text-[20px] font-semibold leading-7 text-[var(--primary-tree)] pb-[47px] transition-all duration-500 group-hover:pb-[24px] group-hover:text-[var(--color-white)]">
                            Área da saúde
                        </p>
                        <p className="opacity-0 translate-y-2 text-[14px] font-normal leading-[22px] text-[var(--primary-tree)] pb-[23px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[var(--color-white)]">
                            Profissionais da saúde podem contar com a Absolute para cuidar da sua gestão contábil<br/><br/><br/>
                        </p>
                        <StethoscopeIcon
                            fillColor="fill-[var(--primary-tree)]"
                            fillColorHover="group-hover:fill-[var(--color-white)]"
                            className=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}