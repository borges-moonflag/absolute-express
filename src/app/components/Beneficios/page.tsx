import SmallArrowIcon from "../Icon/SmallArrowIcon";
import AddressBookIcon2 from '../Icon/AddressBookIcon2'

export default function Beneficios() {

    const beneficios = {
        imagem: "./beneficios-imagem.webp"
    }

    return (
        <div className="w-full flex items-center justify-center pt-[145px] pb-[51px]">
            <div className="max-w-[1146px] flex justify-center items-center ">
                <div className="min-w-[1146px] w-full flex items-center gap-11.5 bg-[var(--primary-tree)] rounded-t-[140px] rounded-r-[25px] rounded-b-[140px] rounded-l-[140px] max-[1160px]:justify-center  max-[1160px]:items-center max-[1160px]:py-10 max-[1160px]:min-w-dvw max-[430px]:rounded-2xl max-[430px]:text-center">
                    <img src={beneficios.imagem} alt="" className="mt-[-74px] max-[1160px]:hidden"/>
                    <div className="max-w-[563px]">
                        <h1 className="font-sora text-[20px] font-normal leading-7 text-[var(--color-white)] pb-2 max-[340px]:text-center">Benefícios em contar com a Absolute</h1>
                        <h2 className=" font-sora text-[36px] font-bold leading-11 text-[var(--color-white)] pb-8 max-[612px]:text-[28px] max-[612px]:leading-[36px] max-[340px]:text-center">Por que escolher a <br/>Absolute Contabilidade?</h2>
                        <div className="flex flex-col gap-6">
                            <div className="w-fit flex items-center gap-4 py-4 px-12 bg-[var(--seccondary-second)] rounded-full font-sora text-[16px] font-normal leading-6 transition-all duration-300 group hover:bg-[linear-gradient(276deg,#002D4B_3.23%,#09F_92.04%)] hover:px-16 max-sm:px-6 max-sm:rounded-2xl max-sm:text-center max-[430px]:gap-1.5">
                                <AddressBookIcon2 fillColor="fill-[var(--primary-four)]" fillColorHover="group-hover:fill-[var(--primary-four)]" className="" />
                                <p className="text-[var(--primary-tree)] group-hover:text-[var(--seccondary-second)]">Decisões mais seguras e assesrtivas</p>
                                <SmallArrowIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className="w-5 h-5 hidden group-hover:block" />
                            </div>
                            <div className="w-fit flex items-center gap-4 py-4 px-12 bg-[var(--seccondary-second)] rounded-full font-sora text-[16px] font-normal leading-6 transition-all duration-300 group hover:bg-[linear-gradient(276deg,#002D4B_3.23%,#09F_92.04%)] hover:px-16 max-sm:px-6 max-sm:rounded-2xl max-sm:text-center max-[430px]:gap-1.5">
                                <AddressBookIcon2 fillColor="fill-[var(--primary-four)]" fillColorHover="group-hover:fill-[var(--primary-four)]" className="" />
                                <p className="text-[var(--primary-tree)] group-hover:text-[var(--seccondary-second)]">Economia real para seu negócio</p>
                                <SmallArrowIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className="w-5 h-5 hidden group-hover:block" />
                            </div>
                            <div className="w-fit flex items-center gap-4 py-4 px-12 bg-[var(--seccondary-second)] rounded-full font-sora text-[16px] font-normal leading-6 transition-all duration-300 group hover:bg-[linear-gradient(276deg,#002D4B_3.23%,#09F_92.04%)] hover:px-16 max-sm:px-6 max-sm:rounded-2xl max-sm:text-center max-[430px]:gap-1.5">
                                <AddressBookIcon2 fillColor="fill-[var(--primary-four)]" fillColorHover="group-hover:fill-[var(--primary-four)]" className="" />
                                <p className="text-[var(--primary-tree)] group-hover:text-[var(--seccondary-second)]">Atendimento próximo e tecnológico</p>
                                <SmallArrowIcon fillColor="fill-[var(--primary-tree)]" fillColorHover="group-hover:fill-[var(--seccondary-second)]" className="w-5 h-5 hidden group-hover:block" />
                            </div>
                            <button className="w-fit cursor-pointer border-2 rounded-full border-[var(--color-white)] mt-[17px] py-3 px-8 font-montserrat text-[16px] font-bold leading-6 text-[var(--seccondary-one)] transition-all duration-300 hover:bg-[var(--color-white)] hover:text-[var(--color-black)]">Conte com a nossa expertise</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}