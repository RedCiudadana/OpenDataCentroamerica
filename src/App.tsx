import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { DataCatalogPage } from './pages/DataCatalogPage';
import { ThemesPage } from './pages/ThemesPage';
import { RegionalIndexPage } from './pages/RegionalIndexPage';
import { FormacionPage } from './pages/FormacionPage';
import { AboutPage } from './pages/AboutPage';
import { FiscalObservatoryPage } from './pages/FiscalObservatoryPage';
import { ContractingAnalysisPage } from './pages/ContractingAnalysisPage';
import { ParityStudyPage } from './pages/ParityStudyPage';
import { InclusionDigitalPage } from './pages/InclusionDigitalPage';
import { ClimateActionPage } from './pages/ClimateActionPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="datos" element={<DataCatalogPage />} />
          <Route path="temas" element={<ThemesPage />} />
          <Route path="indice-regional" element={<RegionalIndexPage />} />
          <Route path="formacion" element={<FormacionPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="acerca" element={<AboutPage />} />
          <Route path="red-regional" element={<div className="min-h-screen flex items-center justify-center"><p className="text-gray-600">Red Regional - Próximamente</p></div>} />
          <Route path="productos/observatorio-fiscal" element={<FiscalObservatoryPage />} />
          <Route path="productos/banderas-rojas" element={<ContractingAnalysisPage />} />
          <Route path="productos/estudio-paridad" element={<ParityStudyPage />} />
          <Route path="productos/inclusion-digital" element={<InclusionDigitalPage />} />
          <Route path="productos/accion-climatica" element={<ClimateActionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
