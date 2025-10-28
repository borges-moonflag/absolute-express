"use client";
import MailIcon from "../Icon/MailIcon";
import PhoneCallIcon from "../Icon/PhoneCallIcon";
import InstagramIcon from "../Icon/InstagramIcon";
import LinkedInIcon from "../Icon/LinkedInIcon";
import FacebookIcon from "../Icon/FacebookIcon";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navbar = {
    background: "./header-background.webp",
    logo: "./logo.webp",
  };

  const services = [
    { label: "Contabilidade", href: "/servicos/contabilidade" },
    { label: "Fiscal", href: "/servicos/fiscal" },
    { label: "Folha", href: "/servicos/folha" },
    { label: "Societário", href: "/servicos/societario" },
  ];

  return (
    <header
      className="w-full flex flex-col items-center justify-center font-montserrat max-[585px]:pb-3"
      style={{ backgroundImage: `url(${navbar.background})` }}
    >
      {/* Top Bar */}
      <div className="w-full max-w-[1140px] px-6 pt-4.5 pb-[19px] flex justify-between items-center max-[585px]:flex-col gap-3">
        <div className="flex items-center gap-[23px] max-[585px]:flex-col max-[585px]:gap-2">
          <div className="flex items-center gap-2">
            <MailIcon fillColor="fill-[var(--primary-tree)]" rectColor="fill-[var(--primary-tree)]" className="w-[15px]" />
            <p className="text-[14px] font-normal leading-[24px] text-[var(--color-black)]">
              LoremIpsum@lorem.com.br
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCallIcon fillColor="fill-[var(--primary-tree)]" className="w-[15px]" />
            <p className="text-[14px] font-normal leading-[24px] text-[var(--color-black)]">
              +00 00 0000-0000
            </p>
          </div>
        </div>
        <div className="flex gap-[29.51px]">
          <InstagramIcon fillColor="fill-[var(--primary-tree)]" className="w-4.5" />
          <FacebookIcon fillColor="fill-[var(--primary-tree)]" className="w-4.5" />
          <LinkedInIcon fillColor="fill-[var(--primary-tree)]" className="w-4.5" />
        </div>
      </div>

      <span className="w-full h-[1px] bg-[var(--primary-tree)]"></span>

      {/* Navbar Principal */}
      <div className="w-full max-w-[1140px] px-6 pt-[17px] pb-3 flex items-center justify-between mx-auto">
        {/* Logo */}
        <img src={navbar.logo} alt="Logo" className="cursor-pointer w-[140px]" />

        {/* Menu Desktop */}
        <ul className="hidden min-[880px]:flex items-center">
          <li className="flex gap-[30px] items-center text-[16px] font-normal leading-[24px] text-[var(--color-black)] relative">
            <Link href="/">Home</Link>
            <Link href="/sobre-nos">Sobre nós</Link>

{/*             
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Serviços 
                <span className={`transition-transform duration-300 font-bold text-[var(--primary-tree)] ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}>+</span>
              </button>

              
              <ul
                className={`absolute top-full left-0 mt-2 w-[230px] bg-[#f2fbfd] shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-tl-[0px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] py-3 flex flex-col gap-2 z-50 transition-all duration-200 ${
                  dropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {services.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-[15px] Hover:text-[16px] hover:font-bold hover:text-[var(--primary-tree)] group"
                    >
                      {item.label} <span className="hidden font-bold text-[var(--primary-tree)] group-hover:inline">+</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            <Link href="/servicos">Serviços</Link>
            <Link href="/contato">Contato</Link>
            <Link
              href="/orcamento"
              className="bg-[var(--primary-four)] rounded-4xl py-3 px-8 text-[var(--color-white)] font-bold hover:bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)] transition-all duration-500"
            >
              Solicite um orçamento
            </Link>
          </li>
        </ul>

        {/* Botão Hamburguer */}
        <button
          className="min-[880px]:hidden p-2 text-[var(--color-black)]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`w-full min-[880px]:hidden flex flex-col items-center gap-6 bg-white transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] py-4 border-t border-gray-200" : "max-h-0 py-0"
        }`}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link href="/sobre-nos" onClick={() => setOpen(false)}>
          Sobre nós
        </Link>

{/*         
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1"
          >
            Serviços
            <span className={`transition-transform duration-300 font-bold text-[var(--primary-tree)] ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}>+</span>
          </button>
          {dropdownOpen && (
            <div className="flex flex-col gap-2 mt-2">
              {services.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-[15px]"
                  onClick={() => {
                    setOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div> */}

        <Link href="/servicos" onClick={() => setOpen(false)}>
          Serviços
        </Link>
        <Link href="/contato" onClick={() => setOpen(false)}>
          Contato
        </Link>
      </div>
    </header>
  );
}
