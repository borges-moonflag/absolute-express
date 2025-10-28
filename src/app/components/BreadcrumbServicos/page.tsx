import Link from "next/link";
import HomeIcon from "../Icon/HomeIcon";
import SmallArrowIcon from "../Icon/SmallArrowIcon";

export default function BreadcrumbServicos() {

    const sobreNos = {
        background: "./servicos-background.webp"
    }

    return (
        <section className="w-full flex">
            <div className="w-full flex">
                <div className="w-1/2 bg-[var(--primary-tree)] flex items-center justify-end max-[1160px]:w-full max-[1160px]:justify-start max-[1160px]:px-7.5">
                    <div className="w-fit flex flex-col gap-[23px] pr-[168px] py-[104px] max-[1160px]:pr-0">
                        <h1 className="font-montserrat text-[16px] font-medium leading-6 uppercase text-[var(--color-white)]">Contabilidade para comércio e outros</h1>
                        <h2 className="font-sora text-[36px] font-normal leading-[44px] text-[var(--color-white)]">Somos o braço <span className="font-bold">direito <br />do seu negócio</span></h2>
                        <div className="w-fit px-6 py-2 border border-[var(--seccondary-one)] rounded-full bg-[rgba(255,255,255,0.10)]">
                            <ul className="flex items-center gap-4 font-montserrat text-[16px] font-normal leading-6 text-[var(--color-white)] max-sm:text-[14px]">
                                <Link href="/" className="flex items-center gap-4">
                                    <HomeIcon fillColor="fill-[var(--color-white)]" fillColorHover="fill-[var(--color-white)]" className="" />
                                    Home
                                </Link>
                                <li>
                                    <SmallArrowIcon fillColor="fill-[var(--color-white)]" fillColorHover="fill-[var(--color-white)]" className="w-[15px]" />
                                </li>
                                <li className="font-bold">
                                    Serviços
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="w-1/2 bg-no-repeat bg-cover bg-center max-[1160px]:hidden"
                    style={{ backgroundImage: `url(${sobreNos.background})` }}
                ></div>
            </div>
        </section>
    )
}