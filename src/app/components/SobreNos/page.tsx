export default function SobreNos() {

    const image = "./foto-sobre-home.webp"

    const sobreNoisGrupo ={
        grupo1: "./sobreNois-grupo1.webp",
        grupo2: "./sobreNois-grupo2.webp",
        grupo3: "./sobreNois-grupo3.webp",
    }

    return (
        <section className="w-full flex items-center justify-center py-[102.5px] max-xl:px-5">
            <div className="w-full max-w-[1140] flex justify-between items-center max-[1150px]:flex-col max-[1150px]:gap-5">
                <img src={image} alt="" />
                <div className="max-w-[563px] max-sm:text-center">
                    <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--primary-four)] pb-2">Sobre nós</h1>
                    <h2 className="font-sora text-[36px] font-normal leading-[42px] text-[var(--primary-second)] pb-8 max-[612px]:text-[28px] max-[612px]:leading-[36px] max-[340px]:text-center">Conheça um pouco mais <span className="font-bold">sobre nós</span></h2>
                    <p className="font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)] max-sm:text-center">A Absolute nasceu em 2024 com o propósito de entregar uma contabilidade diferente: próxima, consultiva e baseada em tecnologia. Mais do que administrar números, ajudamos empresas a compreenderem seus resultados, reduzirem custos e tomarem decisões estratégicas com segurança. Nosso compromisso é gerar impacto real no dia a dia dos clientes, atuando lado a lado para transformar desafios em crescimento.</p>
                    <span className="block w-[80px] h-[3px] bg-[var(--primary-tree)] mt-[32px] mb-[45px] rounded-full"></span>
                    <div className="flex gap-10 pb-[50px] max-sm:flex-col max-sm:items-center max-sm:text-center">
                        <div className="flex">
                            <img src={sobreNoisGrupo.grupo3} alt="" width={80} />
                            <img src={sobreNoisGrupo.grupo2} alt="" width={80} className="ml-[-20px]"/>
                            <img src={sobreNoisGrupo.grupo1} alt="" width={80} className="ml-[-20px]"/>
                        </div>
                        <div>
                            <p className="font-sora text-[50px] font-bold leading-[58px] text-[var(--color-black)]">+40</p>
                            <p className="font-sora text-[20px] font-bold leading-7 text-[var(--color-black)]">Clientes satisfeitos</p>
                        </div>
                    </div>
                    <button className="py-3 px-8 rounded-4xl cursor-pointer bg-[var(--primary-four)] font-montserrat text-base font-bold leading-6 text-[var(--seccondary-one)] hover:bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)] transition-all duration-500 max-sm:text-[14px]">Saiba mais sobre a Absolute</button>
                </div>
            </div>
        </section>
    )
}