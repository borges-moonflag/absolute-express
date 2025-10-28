"use client"
import { useState } from "react";
import WhatsAppIcon from "../Icon/WhatsAppIcon";
import InstagramIcon from "../Icon/InstagramIcon";
import FacebookIcon from "../Icon/FacebookIcon";
import LinkedInIcon from "../Icon/LinkedInIcon";

export default function FormularioContato() {

    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Enviando...");

        const formData = new FormData(e.target);

        const res = await fetch(
            "https://seusite.com/wp-json/contact-form-7/v1/contact-forms/123/feedback",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await res.json();

        if (data.status === "mail_sent") {
            setStatus("Mensagem enviada com sucesso!");
        } else {
            setStatus("Erro ao enviar. Tente novamente.");
        }
    };

    return (
        <section className="w-full flex items-center justify-center pt-[100px] pb-[121px]">
            <div className="max-w-[1140px] gap-[43px] flex justify-between items-center max-[1150px]:flex-col">
                <div className="flex flex-col gap-8 max-[1150px]:items-center max-[1150px]:text-center ">
                    <h2 className="max-w-[496px] font-sora text-[36px] font-bold leading-[44px] text-[var(--primary-tree)] max-[612px]:text-[28px] max-[612px]:leading-[36px] max-sm:text-center">Vamos falar sobre o futuro da sua empresa?</h2>
                    <p className="max-w-[425px] font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)] max-sm:px-4 ">Na Absolute, cada contato é o primeiro passo para criar soluções sob medida. Preencha os campos abaixo e conte um pouco da sua realidade — queremos entender seus desafios para apresentar caminhos claros, transparentes e estratégicos.</p>
                    <div className="w-fit flex gap-8 items-center px-8 py-2 bg-[var(--seccondary-second)] rounded-full">
                        <p className="font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)]">Acompanhe nas redes:</p>
                        <div className="flex gap-8">
                            <InstagramIcon fillColor="fill-[var(--primary-four)]" className=""/>
                            <FacebookIcon fillColor="fill-[var(--primary-four)]" className=""/>
                            <LinkedInIcon fillColor="fill-[var(--primary-four)]" className=""/>
                        </div>
                    </div>
                    <button className="w-fit cursor-pointer gap-4 items-center flex font-montserrat text-[16px] font-bold leading-6 py-3 px-8 bg-[#25D366] text-[var(--color-white)] rounded-full max-sm:text-[14px] transition-all duration-500  hover:bg-[radial-gradient(111.2%_129.58%_at_40.48%_-26.04%,#89E8AC_0%,#25D366_100%)]"><WhatsAppIcon fillColor="fill-[var(--color-white)]" fillColorHover="fill-[var(--color-white)]" className="fill-[var(--color-white)]" /> Ou fale agora via Whats!</button>
                </div>
                <form className="max-w-[466px] flex flex-col gap-8 py-16 px-8 bg-[rgba(246,250,255,0.80)] rounded-4xl border border-[#E4E4E4] max-sm:px-4 max-sm:mx-4"
                    onSubmit={handleSubmit}>
                    <input type="text" name="your-name" placeholder="Digite seu nome" required className="h-[42px] w-full bg-[#FDFDFF] border border-[#999] rounded-full px-[20px] font-monserrat text-[16px] font-normal leading-6" />
                    <input type="tel" name="your-telphone" placeholder="Digite seu telefone" required className="h-[42px] w-full bg-[#FDFDFF] border border-[#999] rounded-full px-[20px] font-monserrat text-[16px] font-normal leading-6" />
                    <input type="email" name="your-email" placeholder="exemplo@exemplo.com.br" required className="h-[42px] w-full bg-[#FDFDFF] border border-[#999] rounded-full px-[20px] font-monserrat text-[16px] font-normal leading-6" />
                    <div className="checkbox-form flex  gap-2 text-sm">
                        <input
                            type="checkbox"
                            name="checkbox-867"
                            value="Aceito receber e-mails com ofertas e conteúdos. Prometemos não utilizar suas informações para spam, clique aqui e veja nossa Política de Dados"
                            required
                        />
                        <span className="font-montserrat text-[14px] font-normal leading-[22px] text-[var(--color-black)]">
                            Aceito receber e-mails com ofertas e conteúdos. Prometemos não utilizar suas informações para spam, clique aqui e veja nossa Política de Dados
                        </span>
                    </div>
                    <button type="submit" className="py-3 px-8 rounded-4xl cursor-pointer bg-[var(--primary-four)] font-montserrat text-base font-bold leading-6 text-[var(--seccondary-one)] hover:bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)] transition-all duration-500 max-sm:text-[14px]">Quero falar com a Absolute</button>
                    <p>{status}</p>
                </form>
            </div>
        </section>
    )
}