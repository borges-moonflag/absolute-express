"use client"
import { useState } from "react";
import Abas from "../Abas/page"
import MediumArrowIcon from "../Icon/MediumArrowIcon";
import SmallArrowIcon from "../Icon/SmallArrowIcon";
import Accordion from "../Acordeon/page";

export default function NossosServicos() {

    const [hover, setHover] = useState(false);

    const servicos = {
        element: "./elemento.webp",
    }

    return (
        <section className="w-full flex justify-center items-center pt-[80px] pb-[104px]">
            <div className="w-full max-w-[1140px]">
                <div className="text-center pb-[101px]">
                    <div className="flex gap-3 items-center justify-center pb-[61px]">
                        <span className="block w-[70px] h-[1px] bg-[var(--primary-tree)]"></span>
                        <img src={servicos.element} alt="" width={39} />
                        <span className="block w-[70px] h-[1px] bg-[var(--primary-tree)]"></span>
                    </div>
                    <h1 className="font-montserrat text-[16px] font-medium leading-6 uppercase text-[var(--primary-tree)] pb-[23px]">nossos serviços</h1>
                    <h2 className="font-sora text-[36px] font-bold leading-11 text-[var(--color-black)]">Contabilidade completa <span className="font-normal">para você</span></h2>
                </div>
                <div>
                    <Abas />
                </div>
                <div className="flex justify-between pt-[52px] border-t-[5px] border-[var(--seccondary-second)]">
                    <div>
                        <p className="font-montserrat text-[16px] font-bold leading-6 text-[var(--primary-four)] border-l-3 border-[var(--primary-four)] pl-[13px] mb-6">Tire suas dúvidas:</p>
                        <p className="font-sora text-[36px] font-bold leading-11 text-[var(--color-black)] pb-10">Perguntas <br/>Frequentes</p>
                        <button
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            className="flex items-center gap-[5px] cursor-pointer font-montserrat text-base font-bold leading-6 text-[var(--primary-tree)] group transition-all duration-500 hover:text-[var(--color-black)]">Entre em contato via WhatsApp!
                            {hover ? <MediumArrowIcon fillColor="fill-[#0076C4]" fillColorHover="group-hover:fill-[var(--color-black)]" className="w-[15px] group-hover:w-[20px] group-hover:h-[15px]" /> : <SmallArrowIcon fillColor="fill-[#0076C4]" fillColorHover="group-hover:fill-[var(--color-black)]" className="w-[15px] group-hover:w-[20px] group-hover:h-[15px]" />}
                        </button>
                    </div>
                    <div>
                        <Accordion/>
                    </div>
                </div>
            </div>
        </section>
    )
}