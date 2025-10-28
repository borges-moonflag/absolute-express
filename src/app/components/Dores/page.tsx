"use client";
import { useState } from "react";
import DocumentIcon from "../Icon/DocumentIcon";
import DollarIcon from "../Icon/DollarIcon";
import NetworkIcon from "../Icon/NetworkIcon";
import MediumArrowIcon from "../Icon/MediumArrowIcon";
import SmallArrowIcon from "../Icon/SmallArrowIcon";

export default function Dores() {
  const cards = [
    {
      Icon: NetworkIcon,
      title: "Investimento constante em inovação",
      text: "A Absolute utiliza sistemas de Power BI para facilitar a gestão de nossos clientes.",
    },
    {
      Icon: DollarIcon,
      title: "+ de R$ 80 milhões administrados",
      text: "Não é apenas sobre volume, mas sobre confiança.",
    },
    {
      Icon: DocumentIcon,
      title: "+ de R$ 3 milhões em folha de pagamento",
      text: "A Absolute atua para que cada detalhe seja feito com precisão e responsabilidade.",
    },
  ];

  return (
    <div className="max-w-[1083px] flex flex-wrap items-center justify-center gap-[27px] py-[18.5px] px-[19.5px] rounded-[40px] bg-[var(--color-white)] shadow-[0_28px_50px_0_rgba(0,0,0,0.05)]">
      {cards.map(({ Icon, title, text }, index) => (
        <Card key={index} Icon={Icon} title={title} text={text} />
      ))}
    </div>
  );
}

function Card({ Icon, title, text }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="max-w-[330px] py-[16px] px-[45px] flex flex-col gap-[17px] rounded-3xl group transition-all duration-500 hover:bg-[var(--primary-four)] max-sm:items-center">
      <Icon
        fillColor="fill-[#0076C4]"
        fillColorHover="group-hover:fill-[var(--color-white)]"
        className="w-[30px]"
      />

      <p className="min-h-[56px] font-sora text-[20px] font-normal leading-[28px] text-[var(--primary-tree)] group-hover:text-[var(--color-white)]">
        {title}
      </p>

      <p className="min-h-[66px] font-montserrat text-[14px] font-normal leading-[22px] text-[var(--color-black)] group-hover:text-[var(--color-white)]">
        {text}
      </p>

      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex items-center gap-[5px] cursor-pointer font-montserrat self-start text-[16px] font-bold leading-[24px] text-[var(--primary-tree)] group-hover:text-[var(--color-white)]"
      >
        Fale conosco
        {hover ? (
          <MediumArrowIcon
            fillColor="fill-[var(--primary-tree)]"
            fillColorHover="group-hover:fill-[var(--color-white)]"
            className="w-[15px] transition-all group-hover:w-[20px] group-hover:h-[15px]"
          />
        ) : (
          <SmallArrowIcon
            fillColor="fill-[#0076C4]"
            fillColorHover="group-hover:fill-[var(--color-white)]"
            className="w-[15px] transition-all group-hover:w-[20px] group-hover:h-[15px]"
          />
        )}
      </button>
    </div>
  );
}
