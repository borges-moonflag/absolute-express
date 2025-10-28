import Beneficios from "../components/Beneficios/page";
import Breadcrumb from "../components/Breadcrumb/page";
import ConhecaAAbsolute from "../components/ConhecaAAbsolute/page";
import Especialidades from "../components/Especialidades/page";
import Footer from "../components/Footer/page";
import Formulario from "../components/Formulario/page";
import MVV from "../components/MVV/page";
import Navbar from "../components/Navbar/page";
import Servicos from "../components/Servicos/page";
import Socios from "../components/Socios/page";


export default function SobreNosPage() {
    return(
        <>
        <Navbar/>
        <Breadcrumb/>
        <ConhecaAAbsolute/>
        <MVV/>
        <Beneficios/>
        <Socios/>
        <Servicos/>
        <Especialidades/>
        <Formulario/>
        <Footer/>
        </>
    )
}