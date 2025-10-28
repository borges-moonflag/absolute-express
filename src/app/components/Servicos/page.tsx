"use client"
import { useState } from "react";
import AddressBookIcon from "../Icon/AddressBookIcon";
import MediumArrowIcon from "../Icon/MediumArrowIcon";
import SmallArrowIcon from "../Icon/SmallArrowIcon";

export default function Servicos() {


    const servicos = {
        element: "./elemento.webp",
        imagem: "./sobre-nos-imagem.webp"
    }

    const cards = [
        {
            Icon: AddressBookIcon,
            title: "Contábil e fiscal",
            button: "Saiba mais",
        },
        {
            Icon: AddressBookIcon,
            title: "Consultoria",
            button: "Saiba mais",
        },
        {
            Icon: AddressBookIcon,
            title: "BPO Fiscal",
            button: "Saiba mais",
        },
        {
            Icon: AddressBookIcon,
            title: "Planejamento tributário",
            button: "Saiba mais",
        },
    ];

    return (
        <section className="w-full flex items-center justify-center py-[100px] max-xl:px-5">
            <div className="w-full max-w-[1231px] flex flex-col justify-center items-center">
                <div className="flex gap-3 items-center justify-center pb-[61px]">
                    <span className="block w-[70px] h-[1px] bg-[var(--primary-tree)]"></span>
                    <img src={servicos.element} alt="" width={39}/>
                    <span className="block w-[70px] h-[1px] bg-[var(--primary-tree)]"></span>
                </div>
                <div className="flex flex-col gap-[23px] text-center pb-[94px]">
                    <h1 className="font-montserrat text-[16px] font-medium leading-[24px] text-[var(--primary-tree)] uppercase">Serviços de nossa contabilidade em maceió</h1>
                    <h2 className="max-w-[788px] font-sora text-[36px] font-bold leading-[44px] text-[var(--color-black)] max-[612px]:text-[28px] max-[612px]:leading-[36px] max-[340px]:text-center">Nossa contabilidade, do jeito que sua empresa precisa</h2>
                </div>
                <div className="flex justify-between gap-[53px] max-[1200px]:flex-col ">
                    <img src={servicos.imagem} alt="" width={620} className="max-sm:w-[310px]" />
                    <div className="flex max-w-[630px] gap-[15px] flex-wrap justify-center items-center max-sm:flex-col">
                        {cards.map(({ Icon, title, button }, index) => (
                            <Card key={index} Icon={Icon} title={title} button={button} />
                        ))}
                        <button className="mt-[35px] py-3 px-8 rounded-4xl cursor-pointer bg-[var(--primary-four)] font-montserrat text-base font-bold leading-6 text-[var(--seccondary-one)] hover:bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)] transition-all duration-500 max-sm:text-[14px]">Conheça Todos os Serviços</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Card({ Icon, title, button }) {

    const [hover, setHover] = useState(false);

    return (
        <div className="min-w-[270px] flex flex-col justify-center items-center gap-6 p-8 bg-[var(--seccondary-second)] rounded-[20px]">
            <Icon className="" />
            <p className="w-[206px] h-[56px] text-center font-montserrat text-[20px] font-normal leading-7 text-[var(--primary-four)]">{title}</p>
            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="flex items-center gap-[5px] cursor-pointer font-montserrat text-base font-bold leading-6 text-[var(--primary-tree)] group transition-all duration-500 hover:text-[var(--color-black)]">{button}

                {hover ? <MediumArrowIcon fillColor="fill-[#0076C4]" fillColorHover="group-hover:fill-[var(--color-black)]" className="w-[15px] group-hover:w-[20px] group-hover:h-[15px]" /> : <SmallArrowIcon fillColor="fill-[#0076C4]" fillColorHover="group-hover:fill-[var(--color-black)]" className="w-[15px] group-hover:w-[20px] group-hover:h-[15px]" />}
            </button>
        </div>
    )
}