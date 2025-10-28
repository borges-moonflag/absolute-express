import AberturaDeEmpresas from "./components/AberturaDeEmpresas/page";
import ContabilidadeEmMaceio from "./components/ContabilidaEmMaceio/page";
import Diferenciais from "./components/Diferenciais/page";
import Footer from "./components/Footer/page";
import Navbar from "./components/Navbar/page";
import DepoimentosEParceiros from "./components/DepoimentosEParceiros/page";
import SobreNos from "./components/SobreNos/page";
import Especialidades from "./components/Especialidades/page";
import Servicos from "./components/Servicos/page";
import Formulario from "./components/Formulario/page";


export default function Home() {

  return (
    <>
    <Navbar/>
    <ContabilidadeEmMaceio/>
    <Diferenciais/>
    <Especialidades/>
    <Servicos/>
    <Formulario/>
    <SobreNos/>
    <DepoimentosEParceiros/>
    <AberturaDeEmpresas/>
    <Footer/>
    </>
  );
}
