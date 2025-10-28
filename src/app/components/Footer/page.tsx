import Link from "next/link";
import LinkedInIcon from "../Icon/LinkedInIcon";
import FacebookIcon from "../Icon/FacebookIcon";
import InstagramIcon from "../Icon/InstagramIcon";
import MailIcon from "../Icon/MailIcon";
import PhoneCallIcon from "../Icon/PhoneCallIcon";
import ClockIcon from "../Icon/ClockIcon";
import MapMarkIcon from "../Icon/MapMarkIcon";

export default function Footer() {

    const navigation = [
        { label: "Home", href: "/" },
        { label: "Sobre Nós", href: "/sobre-nos" },
        { label: "Blog", href: "/blog" },
        { label: "Contato", href: "/contato" },
        { label: "Solicite um orçamento", href: "/" },
    ];

    const services = [
        { label: "Contabilidade", href: "/servicos/contabilidade" },
        { label: "Fiscal", href: "/servicos/fiscal" },
        { label: "Folha", href: "/servicos/folha" },
        { label: "Societário", href: "/servicos/societario" },
    ];

      const navbar = {
    background: "./header-background.webp",
    logo: "./logo.webp",
    img: "./footer-img.webp"
  };

    return (
        <footer className="w-full flex justify-center items-center pb-[202px] pt-[73px] bg-[var(--seccondary-second)]">
            <div className="w-full max-w-[1140px] flex flex-col max-[1190px]:px-6 ">
                <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-10">
                    <img src={navbar.logo} alt="Logo" className="cursor-pointer w-[140px]" />
                    <div className="flex gap-[29.51px]">
                        <InstagramIcon fillColor="fill-[var(--primary-tree)]" className="w-4.5" />
                        <FacebookIcon fillColor="fill-[var(--primary-tree)]" className="w-4.5" />
                        <LinkedInIcon fillColor="fill-[var(--primary-tree)]" className="w-4.5" />
                    </div>
                    <div className="flex items-center gap-5 ">
                        <img src={navbar.img} alt="" width={75} height={75}/>
                        <p className="max-w-[245px] font-sora text-[16px] font-normal text-[var(--primary-tree)]">Olá! Sou o Allysson, <span className="font-semibold">estou aguardando seu contato.</span></p>
                    </div>
                    <button className="font-montserrat cursor-pointer py-3 px-8 rounded-full text-[16px] font-bold leading-6 text-[var(--seccondary-second)] bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)] transition-all duration-500 hover:bg-[linear-gradient(275deg,#31DFFA_15.72%,#0084CB_105.26%)]">Fale com a Absolute</button>
                </div>
                <span className="w-full h-[1px] bg-[var(--primary-tree)] mb-[50px] mt-[44px]"></span>
                <div className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-10">
                    <div className="max-w-[268px]">
                        <p className="font-sora text-[18px] font-bold leading-[24px] text-[var(--primary-tree)] pb-7">Absolute Contábil</p>
                        <p className="font-montserrat text-[16px] font-normal leading-[22px] text-[var(--color-black)]">Absolute Contábil a contabilidade em Maceió que une tecnologia e consultoria para transformar números em resultados reais.</p>
                    </div>
                    <div className="flex flex-col max-lg:w-[268px]">
                        <p className="font-sora text-[18px] font-bold leading-[24px] text-[var(--primary-tree)] pb-7">Navegação</p>
                        <div className="flex flex-col gap-3.5 font-montserrat text-[16px] font-normal leading-[22px] text-[var(--color-black)]">
                            {navigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                >{item.label}</Link>
                            ))}
                        </div>

                    </div>
                    <div className="flex flex-col max-lg:w-[268px]">
                        <p className=" font-sora text-[18px] font-bold leading-[24px] text-[var(--primary-tree)] pb-7">Serviços</p>
                        <div className="flex flex-col gap-3.5 font-montserrat text-[16px] font-normal leading-[22px] text-[var(--color-black)]">
                            {services.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}>{item.label}</Link>
                            ))}
                        </div>

                    </div>
                    <div className="">
                        <p className="font-sora text-[18px] font-bold leading-[24px] text-[var(--primary-tree)] pb-7">Encontre-nos</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 items-center font-montserrat text-[16px] font-normal leading-[22px] text-[var(--color-black)]">
                            <MapMarkIcon fillColor="fill-[var(--color-black)]" className="w-[15px]"/>
                            <p className="">LoremIpsulândia - SP <br/>Rua Ipsum  dolor, 000 - <br/>Jardim das Lorens</p>
                        </div>
                        <div className="flex gap-4 items-center font-montserrat text-[16px] font-normal leading-[22px] text-[var(--color-black)]">
                            <ClockIcon fillColor="fill-[var(--color-black)]" className="w-[15px]"/>
                            <p className="">De segunda à sexta-feira <br/>das 00h às 00h</p>
                        </div>
                        <div className="flex gap-4 items-center font-montserrat text-[16px] font-normal leading-[22px] text-[var(--color-black)]">
                            <PhoneCallIcon fillColor="fill-[var(--color-black)]" className="w-[15px]" />
                            <p>+00 00 0000-0000</p>
                        </div>
                        <div className="flex gap-4 items-center font-montserrat text-[16px] font-normal leading-[22px] text-[var(--color-black)]">
                            <MailIcon fillColor="fill-[var(--color-black)]" rectColor="fill-[var(--color-black)]" className="w-[15px]"/>
                            <p>LoremIpsum@lorem.com.br</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}