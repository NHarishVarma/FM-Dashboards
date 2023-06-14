import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FundManagerDashboard from "./pages/FundManagerDashboard";
import InvestorProfile2 from "./pages/InvestorProfile2";
import InvestorProfile1 from "./pages/InvestorProfile1";
import InvestorProfile from "./pages/InvestorProfile";
import InvestorProfile6 from "./pages/InvestorProfile6";
import InvestorProfile5 from "./pages/InvestorProfile5";
import InvestorProfile4 from "./pages/InvestorProfile4";
import InvestorProfile3 from "./pages/InvestorProfile3";
import FundDetailCompliance from "./pages/FundDetailCompliance";
import FundDetailInvestorRelatio from "./pages/FundDetailInvestorRelatio";
import DashboardInterfaceLookFe from "./pages/DashboardInterfaceLookFe";
import DashboardInterfaceLookFe1 from "./pages/DashboardInterfaceLookFe1";
import CapitalCallDetailSaved from "./pages/CapitalCallDetailSaved";
import CapitalCallDetail14 from "./pages/CapitalCallDetail14";
import CapitalCallDetail12 from "./pages/CapitalCallDetail12";
import CapitalCallDetail13 from "./pages/CapitalCallDetail13";
import CapitalCallDetail1 from "./pages/CapitalCallDetail1";
import CompanyDetail from "./pages/CompanyDetail";
import FundDetailPortfolioCompan from "./pages/FundDetailPortfolioCompan";
import FundDetailPerformance from "./pages/FundDetailPerformance";
import FundDetailPortfolioCompan1 from "./pages/FundDetailPortfolioCompan1";
import FundDetail1 from "./pages/FundDetail1";
import FundDetailServices1 from "./pages/FundDetailServices1";
import FundDetailServices from "./pages/FundDetailServices";
import FirmWideDashboard from "./pages/FirmWideDashboard";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile-2":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile-1":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile-6":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile-5":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile-4":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile-3":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-compliance":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-investor-relations":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-interface-look-feel-6":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-interface-look-feel-5":
        title = "";
        metaDescription = "";
        break;
      case "/capital-call-detail-saved":
        title = "";
        metaDescription = "";
        break;
      case "/capital-call-detail-1-4":
        title = "";
        metaDescription = "";
        break;
      case "/capital-call-detail-1-2":
        title = "";
        metaDescription = "";
        break;
      case "/capital-call-detail-1-3":
        title = "";
        metaDescription = "";
        break;
      case "/capital-call-detail-1":
        title = "";
        metaDescription = "";
        break;
      case "/company-detail":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-portfolio-companies-open":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-performance":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-portfolio-companies":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-1":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-services-1":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-services":
        title = "";
        metaDescription = "";
        break;
      case "/firmwide-dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FundManagerDashboard />} />
      <Route path="/investor-profile-2" element={<InvestorProfile2 />} />
      <Route path="/investor-profile-1" element={<InvestorProfile1 />} />
      <Route path="/investor-profile" element={<InvestorProfile />} />
      <Route path="/investor-profile-6" element={<InvestorProfile6 />} />
      <Route path="/investor-profile-5" element={<InvestorProfile5 />} />
      <Route path="/investor-profile-4" element={<InvestorProfile4 />} />
      <Route path="/investor-profile-3" element={<InvestorProfile3 />} />
      <Route
        path="/fund-detail-compliance"
        element={<FundDetailCompliance />}
      />
      <Route
        path="/fund-detail-investor-relations"
        element={<FundDetailInvestorRelatio />}
      />
      <Route
        path="/dashboard-interface-look-feel-6"
        element={<DashboardInterfaceLookFe />}
      />
      <Route
        path="/dashboard-interface-look-feel-5"
        element={<DashboardInterfaceLookFe1 />}
      />
      <Route
        path="/capital-call-detail-saved"
        element={<CapitalCallDetailSaved />}
      />
      <Route
        path="/capital-call-detail-1-4"
        element={<CapitalCallDetail14 />}
      />
      <Route
        path="/capital-call-detail-1-2"
        element={<CapitalCallDetail12 />}
      />
      <Route
        path="/capital-call-detail-1-3"
        element={<CapitalCallDetail13 />}
      />
      <Route path="/capital-call-detail-1" element={<CapitalCallDetail1 />} />
      <Route path="/company-detail" element={<CompanyDetail />} />
      <Route
        path="/fund-detail-portfolio-companies-open"
        element={<FundDetailPortfolioCompan />}
      />
      <Route
        path="/fund-detail-performance"
        element={<FundDetailPerformance />}
      />
      <Route
        path="/fund-detail-portfolio-companies"
        element={<FundDetailPortfolioCompan1 />}
      />
      <Route path="/fund-detail-1" element={<FundDetail1 />} />
      <Route path="/fund-detail-services-1" element={<FundDetailServices1 />} />
      <Route path="/fund-detail-services" element={<FundDetailServices />} />
      <Route path="/firmwide-dashboard" element={<FirmWideDashboard />} />
    </Routes>
  );
}
export default App;
