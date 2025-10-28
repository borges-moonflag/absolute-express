"use client"
import { useState } from "react";
import MediumArrowIcon from "../Icon/MediumArrowIcon";
import SmallArrowIcon from "../Icon/SmallArrowIcon";

export default function AberturaDeEmpresas() {

    const [hover, setHover] = useState(false);

    const imagemEmpresas = "./abertura-de-empresa-image.webp"

    return (
        <div className="w-full flex">
            <div className="w-full flex">
                <div className="w-1/2 bg-[var(--primary-tree)] flex items-center justify-end max-[1160px]:w-full max-[1160px]:justify-center">
                    <div className="max-w-[580px] flex flex-col py-[60px] pr-8.5 max-sm:text-center max-sm:items-center max-sm:px-3.5">
                        <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--color-white)] pb-2 max-sm:text-[16px]">Contabilidade em Maceió com atendimento nacional</h1>
                        <h2 className="font-sora text-[36px] font-normal leading-11 text-[var(--color-white)] pb-4 max-[612px]:text-[28px] max-[612px]:leading-[36px] max-[340px]:text-center max-sm:text-[22px]">Estamos prontos para caminhar junto com você</h2>
                        <p className="font-montserrat text-[16px] font-medium leading-6 text-[var(--color-white)] pb-4 max-sm:text-[14px]">Escolher a Absolute Contabilidade é ter ao seu lado uma equipe que vai além da entrega de guias.<br />Aqui, você encontra tecnologia, consultoria estratégica e experiência prática para transformar números em clareza, planejamento e crescimento real.</p>
                        <button
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            className="flex items-center gap-[5px] cursor-pointer font-montserrat text-base font-bold leading-6 text-[var(--color-white)] group transition-all duration-500 max-sm:text-[14px]">Fale com nossos especialistas
                            {hover ? <MediumArrowIcon fillColor="fill-[var(--color-white)]" fillColorHover="group-hover:fill-[var(--color-white)]" className="w-[15px] group-hover:w-[20px] group-hover:h-[15px]" /> : <SmallArrowIcon fillColor="fill-[var(--color-white)]" fillColorHover="group-hover:fill-[var(--color-white)]" className="w-[15px] group-hover:w-[20px] group-hover:h-[15px]" />}
                        </button>
                    </div>
                </div>
                <div
                    className="w-1/2 bg-no-repeat bg-cover bg-center max-[1160px]:hidden"
                    style={{ backgroundImage: `url(${imagemEmpresas})` }}
                ></div>
            </div>
        </div>
    )
}