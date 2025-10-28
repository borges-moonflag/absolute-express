import AberturaDeEmpresasServicos from "../components/AberturaDeEmpresasServicos/page";
import Beneficios from "../components/Beneficios/page";
import BreadcrumbServicos from "../components/BreadcrumbServicos/page";
import CasesDeSucesso from "../components/CasesDeSucesso/page";
import DepoimentosEParceiros from "../components/DepoimentosEParceiros/page";
import Footer from "../components/Footer/page";
import Formulario from "../components/Formulario/page";
import Navbar from "../components/Navbar/page";
import NossosServicos from "../components/NossosServicos/page";

export default function ServicosPage() {
    return(
        <>
        <Navbar/>
        <BreadcrumbServicos/>
        <NossosServicos/>
        <Formulario/>
        <CasesDeSucesso/>
        <Beneficios/>
        <DepoimentosEParceiros/>
        <AberturaDeEmpresasServicos/>
        <Footer/>
        </>
    )
}