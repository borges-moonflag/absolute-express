"use client"
import { useState } from "react";
import SmallArrowIcon from "../Icon/SmallArrowIcon"
import MediumArrowIcon from "../Icon/MediumArrowIcon";
import Dores from "../Dores/page";

export default function ContabilidadeEmMaceio() {

      const [hover, setHover] = useState(false);

    const image = "./contabilidade-image.webp"

    return (
        <section className="w-full flex items-center justify-center pb-[91px]">
            <div className="max-w-[1440] flex flex-col justify-center items-center px-5">
                <div className="flex justify-between">
                    <div className="max-w-[572px] pt-[325px] pb-7 flex flex-col gap-[23px] max-[1015px]:pt-[60px]">
                        <h1 className="font-montserrat text-base font-medium leading-6 text-[var(--primary-tree)] max-[340px]:text-center">contabilidade em maceió</h1>
                        <h2 className="font-sora text-[46px] font-bold leading-[54px] text-[var(--color-black)] max-[612px]:text-[28px] max-[612px]:leading-[36px] max-[340px]:text-center">Transforme números em decisões que fazem sua empresa crescer</h2>
                        <p className="font-montserrat text-base font-normal leading-6 text-[var(--color-black)] max-[340px]:text-center">Mais do que contabilidade, entregamos análises, tecnologia e visão estratégica para o seu negócio.</p>
                        <div className="flex gap-9 max-[612px]:flex-col">
                            <button className="py-3 px-8 rounded-4xl cursor-pointer bg-[var(--primary-four)] font-montserrat text-base font-bold leading-6 text-[var(--seccondary-one)] hover:bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)] transition-all duration-500">Conheça as nossas soluções</button>
                            <button 
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            className="flex items-center gap-[5px] cursor-pointer font-montserrat text-base font-bold leading-6 text-[var(--primary-tree)] group transition-all duration-500 hover:text-[var(--color-black)]">Fale com um especialista 
                                
                                {hover ? <MediumArrowIcon fillColor="fill-[#0076C4]" fillColorHover="group-hover:fill-[var(--color-black)]" className="w-[15px] group-hover:w-[20px] group-hover:h-[15px]"/> : <SmallArrowIcon fillColor="fill-[#0076C4]" fillColorHover="group-hover:fill-[var(--color-black)]" className="w-[15px] group-hover:w-[20px] group-hover:h-[15px]"/>}
                                </button>
                        </div>
                    </div>
                    <img src={image} alt="Banner home" className="object-contain max-[1210]:w-[520px] max-[1120]:w-[420px] max-[1015px]:hidden"/>
                </div>
                <Dores/>
            </div>
        </section>
    )
}