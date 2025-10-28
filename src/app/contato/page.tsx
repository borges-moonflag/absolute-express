import Beneficios from "../components/Beneficios/page";
import BreadcrumbContato from "../components/BreadcrumbContato/page";
import DepoimentosEParceiros from "../components/DepoimentosEParceiros/page";
import Footer from "../components/Footer/page";
import FormularioContato from "../components/FormularioContato/page";
import Navbar from "../components/Navbar/page";

export default function ContatoPage() {
    return(
        <>
        <Navbar/>
        <BreadcrumbContato/>
        <FormularioContato/>
        <DepoimentosEParceiros/>
        <Beneficios/>
        <Footer/>
        </>
    )
}