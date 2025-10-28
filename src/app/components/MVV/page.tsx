import BriefCaseIcon from "../Icon/BriefCaseIcon"
import BulbLightIcon from "../Icon/BulbLightIcon"
import HandHoldingHeartIcon from "../Icon/HandHoldingHeartIcon"

export default function MVV() {
    return(
        <div className="w-full flex items-center justify-center ">
            <div className="w-full max-w-[1140px] flex flex-col justify-center items-center">
                <span className="w-full h-[1px] bg-[var(--primary-tree)] mb-[48px]"></span>
                <div className="flex gap-4.5 justify-center">
                    <div className="w-fit max-w-[369px] flex gap-6 bg-[#FCFCFC] rounded-[30px] py-4 px-8 items-center">
                        <div className="p-6 rounded-full bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)]">
                        <BriefCaseIcon fillColor="fill-[var(--color-white)]" fillColorHover="fill-[var(--color-white)]" className="w-6 h-6"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-montserrat text-[16px] font-medium leading-6 text-[var(--primary-tree)]">Missão</p>
                            <p className="font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)]">Transformar dados contábeis em estratégias que geram crescimento, economia e decisões seguras.</p>
                        </div>
                    </div>
                    <div className="w-fit max-w-[369px] flex gap-6 bg-[#FCFCFC] rounded-[30px] py-4 px-8 items-center">
                        <div className="p-6 rounded-full bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)]">
                        <BulbLightIcon fillColor="fill-[var(--color-white)]" fillColorHover="fill-[var(--color-white)]" className="w-6 h-6"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-montserrat text-[16px] font-medium leading-6 text-[var(--primary-tree)]">Visão</p>
                            <p className="font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)]">Ser referência em consultoria contábil estratégica, inovando e impactando positivamente empresas.</p>
                        </div>
                    </div>
                    <div className="w-fit max-w-[369px] flex gap-6 bg-[#FCFCFC] rounded-[30px] py-4 px-8 items-center">
                        <div className="p-6 rounded-full bg-[linear-gradient(275deg,#002D4B_15.72%,#09F_137.99%)]">
                        <HandHoldingHeartIcon fillColor="fill-[var(--color-white)]" fillColorHover="fill-[var(--color-white)]" className="w-6 h-6"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-montserrat text-[16px] font-medium leading-6 text-[var(--primary-tree)]">Valores</p>
                            <p className="font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)]">Transparência e integridade; Excelência e inovação; Parceria com o cliente; Crescimento contínuo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
