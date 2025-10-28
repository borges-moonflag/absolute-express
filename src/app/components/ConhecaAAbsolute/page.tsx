export default function ConhecaAAbsolute(){


    const image = "./conheca-a-absolute-imagem.webp"

    const conheca ={
        grupo1: "./sobreNois-grupo1.webp",
        grupo2: "./sobreNois-grupo2.webp",
        grupo3: "./sobreNois-grupo3.webp",
    }

    return(
        <section className="w-full flex items-center justify-center py-[102.5px] max-xl:px-5">
            <div className="w-full max-w-[1140] flex justify-between max-[1150px]:gap-5 max-[1150px]:justify-center">
                <div className="max-w-[563px] max-[1150px]:text-center">
                    <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--primary-four)] pb-2">Conheça a Absolute</h1>
                    <h2 className="font-sora text-[36px] font-normal leading-[42px] text-[var(--primary-second)] pb-8 max-[612px]:text-[28px] max-[612px]:leading-[36px] max-[340px]:text-center">Absolutamente diferentes na forma de fazer contabilidade</h2>
                    <p className="font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)] max-sm:text-center">A Absolute Contabilidade nasceu em 2024 em Maceió, unindo experiência, tecnologia e visão consultiva. Criada por Allysson e Márcio, com o apoio de Laura, a empresa cresceu rápido, estruturou processos e conquistou clientes de diferentes segmentos. Hoje, com ferramentas digitais e expertise em operações complexas, seguimos com o propósito de entregar transparência e resultados reais para cada cliente.</p>
                    <span className="block w-[80px] h-[3px] bg-[var(--primary-tree)] mt-[32px] mb-[45px] rounded-full"></span>
                    <div className="flex gap-10 pb-[50px] max-[1150px]:justify-center max-sm:flex-col max-sm:items-center max-sm:text-center">
                        <div className="flex">
                            <img src={conheca.grupo3} alt="" width={80} />
                            <img src={conheca.grupo2} alt="" width={80} className="ml-[-20px]"/>
                            <img src={conheca.grupo1} alt="" width={80} className="ml-[-20px]"/>
                        </div>
                        <div>
                            <p className="font-sora text-[50px] font-bold leading-[58px] text-[var(--color-black)]">+40</p>
                            <p className="font-sora text-[20px] font-bold leading-7 text-[var(--color-black)]">Clientes satisfeitos</p>
                        </div>
                    </div>
                    <button className="py-3 px-8 rounded-4xl cursor-pointer bg-[var(--primary-four)] font-montserrat text-base font-bold leading-6 text-[var(--seccondary-one)] hover:bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)] transition-all duration-500 max-sm:text-[14px]">Conte com a nossa expertise</button>
                </div>
                <img src={image} alt="" className="max-[1150px]:hidden"/>
            </div>
        </section>
    )
}