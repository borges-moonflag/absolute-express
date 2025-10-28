"use client";
import { BuildingIcon, CalculatorIcon, Laptop } from "lucide-react";
import { useState } from "react";

export default function Abas() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: <CalculatorIcon />, label: "Contábil e fiscal", header: "Folha de Pagamento e Obrigações Trabalhistas", title: "Segurança trabalhista e tranquilidade para sua equipe.", content: "Administramos sua folha com eficiência, garantindo conformidade legal e tranquilidade para gestores e colaboradores. Da admissão à rescisão, cuidamos de todos os detalhes para que sua empresa foque no crescimento sem se preocupar com burocracia." },
    { icon: <Laptop />, label: "Folha de pagamento", header: "Legalização e Societário", title: "Pague apenas o que é justo, com estratégia e segurança.", content: "Muito além de cálculos, criamos estratégias personalizadas para reduzir carga tributária de forma legal e inteligente. Identificamos oportunidades, simulamos cenários e orientamos decisões para que você pague apenas o necessário." },
    { icon: <BuildingIcon />, label: "Legalização", header: "Planejamento e Recuperação Tributária", title: "Menos impostos, mais economia para sua empresa.", content: "Unimos estratégia e revisão para reduzir a carga tributária e recuperar valores pagos indevidamente. Atuamos de forma legal e inteligente para que sua empresa pague apenas o necessário e transforme tributos em oportunidades de economia real." },
    { icon: <CalculatorIcon />, label: "Planejamento tributário", header: "Consultoria Financeira e Fiscal", title: "Gestão financeira e fiscal integrada para decisões seguras.", content: "Oferecemos um olhar completo sobre a saúde financeira e fiscal da sua empresa. Organizamos o fluxo de caixa, reduzimos riscos, ajustamos enquadramentos e criamos planos de ação estratégicos para impulsionar resultados sustentáveis." },
    { icon: <CalculatorIcon />, label: "Consultoria Financeira e Fiscal", header: "Certificação Digital", title: "Agilidade e segurança na sua certificação digital.", content: "Emitimos e renovamos certificados digitais com praticidade e segurança, garantindo que sua empresa tenha acesso a serviços online e cumpra todas as exigências legais." },
    { icon: <CalculatorIcon />, label: "Certificação Digital", header: "Contábil e fiscal", title: "Clareza e precisão para que você confie nos seus números.", content: "Cuidamos da escrituração contábil, apuração de impostos e emissão de guias com precisão e responsabilidade. Mais do que cumprir obrigações, entregamos relatórios claros e análises estratégicas para que você tenha total controle sobre sua empresa e possa tomar decisões seguras." },
    { icon: <CalculatorIcon />, label: "Revisão Tributária para Comércio e Serviços", header: "Revisão Tributária para Comércio e Serviços", title: "Tributação revisada para reduzir custos e eliminar riscos.", content: "Reavaliamos a estrutura tributária da sua empresa para identificar inconsistências, corrigir erros e garantir o melhor enquadramento, gerando economia e segurança jurídica." },
    { icon: <CalculatorIcon />, label: "Desenvolvimento de BI Estratégico", header: "Desenvolvimento de BI Estratégico", title: "BI exclusivo para decisões inteligentes e de alto impacto.", content: "Criamos projetos de Business Intelligence personalizados para clientes que buscam gestão em outro nível. Com relatórios inteligentes e dados organizados, você tem clareza total sobre a performance do seu negócio." },
    { icon: <CalculatorIcon />, label: "BPO Fiscal", header: "BPO Fiscal", title: "Fiscal no piloto automático: apuração correta, prazos em dia e zero surpresas", content: "Terceirizamos toda a rotina fiscal com precisão e transparência: conferência de notas (entrada/saída/serviços), parametrização tributária (CFOP, CST, NCM), apuração de impostos (ICMS, ISS, PIS/COFINS), geração e entrega de obrigações (SPED Fiscal, EFD-Contribuições, EFD-Reinf), acompanhamento de prazos e auditoria preventiva." },
  ];

  return (
    <section className="w-full max-w-[1140px] flex flex-col gap-[60px] pb-[50px]">
      {/* Cabeçalho das abas */}
      <div className="flex border-b-[5px] border-[var(--primary-four)] flex-wrap gap-7 ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex gap-4 items-center  pb-5 font-montserrat text-[16px] font-normal leading-6 transition-all duration-300 ${activeTab === index
                ? "border-b-[5px] border-[var(--primary-four)] text-[var(--primary-four)]"
                : "text-gray-500 hover:text-[var(--primary-four)]"
              }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon}{tab.label}
          </button>
        ))}
      </div>

      {/* Conteúdo da aba ativa */}
      <div className="flex justify-between transition-all duration-500">
        <img src="./nossos-servicos-imagem.webp" alt="servicos-imagem" />
        <div className="max-w-[650px]">
          <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--primary-four)] pb-2">{tabs[activeTab].header}</h1>
          <h2 className="font-sora text-[24px] font-normal leading-8 text-[var(--color-black)}] pb-8">{tabs[activeTab].title}</h2>
          <p className="font-montserrat text-[16px] font-normal text-[var(--color-black)}] leading-6 pb-7">
            {tabs[activeTab].content}</p>
          <button className="py-3 px-8 rounded-4xl cursor-pointer bg-[var(--primary-four)] font-montserrat text-base font-bold leading-6 text-[var(--seccondary-one)] hover:bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)] transition-all duration-500 max-sm:text-[14px]">Solicite um orçamento HOJE</button>
        </div>
      </div>
    </section>
  );
}
