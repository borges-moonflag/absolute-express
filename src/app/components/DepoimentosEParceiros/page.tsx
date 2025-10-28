export default function DepoimentosEParceiros() {
  const parceirosImg = [
    { imagem: "./logoIpsum.png" },
    { imagem: "./logoIpsum.png" },
    { imagem: "./logoIpsum.png" },
    { imagem: "./logoIpsum.png" },
    { imagem: "./logoIpsum.png" },
  ];

  return (
    <section className="w-full flex items-center justify-center pt-[100px] bg-[var(--seccondary-second)]">
      <div className="max-w-[1151px] flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center max-[1170px]:flex-col max-[1170px]:text-center max-[1170px]:gap-3 ">
          <div className="flex flex-col">
            <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--primary-four)] pb-2">Depoimentos</h1>
            <h2 className="max-w-[562px] font-sora text-[36px] font-normal leading-[54px] text-[var(--primary-second)] max-[612px]:text-[28px] max-[612px]:leading-[36px] max-[340px]:text-center max-sm:text-[22px] max-sm:leading-7 max-sm:px-3">Saiba o que os nossos clientes estão <span className="font-bold">falando sobre nós</span></h2>
          </div>
          <button className="py-3 px-8 rounded-4xl cursor-pointer bg-[var(--primary-four)] font-montserrat text-base font-bold leading-6 text-[var(--seccondary-one)] hover:bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)] transition-all duration-500 max-sm:text-[14px]">Quero fazer parte dessa história</button>
        </div>
        <span className="max-w-[1140px] w-full h-[1px] bg-[rgba(0,132,203,0.20)] block mt-[100px]"></span>
        <div className="flex flex-wrap justify-center items-center gap-[70px] py-[115px] max-[1170px]:px-6">
          {parceirosImg.map((item, index) => (
            <img
              key={index}
              src={item.imagem}
              alt={`Parceiro ${index + 1}`}
              className="w-[174px] h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
