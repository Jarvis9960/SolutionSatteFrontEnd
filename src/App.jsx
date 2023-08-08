import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";


import Home from './pages/Home';
import Personal from './components/formdata/Personal';
import PersonalLoan from './components/formdashborad/PersonalLoan';
import BusinessLoan from './components/formdashborad/BusinessLoan';
import MortgageLoan from './components/formdashborad/MortgageLoan';
import CreditCardLoan from './components/formdashborad/CreditCardLoan';
import GoldLoan from './components/formdashborad/GoldLoan';
import HomeLoan from './components/formdashborad/HomeLoan';
import Updateempolyee from './pages/Updateempolyee';
import Carloan from './components/formdashborad/Carloan';
import GstApplication from './components/formdashborad/GstApplication';
import Dashboard from "./pages/Dashboard";
import AddClient from "./pages/AddClient";
import Addleads from "./pages/Addleads";
import Mylead from "./pages/Mylead";
import Myclient from "./pages/Myclients";
import Transferlead from "./pages/Transferlead";
import Allemployees from "./pages/Allemployees";
import Services from "./pages/Services";
import Leadform from "./pages/Leadform";
import Myprofile from "./pages/Myprofile";
import Login from "./pages/Login";
import Addemployee from "./pages/Addemployee";
import HomeLonelp from "./components/servicespages/HomeLonelp";
import BusinessLonelp from "./components/servicespages/BusinessLonelp";
import PersonalLoanlp from "./components/servicespages/PersonalLonelp";
import MortageLoanlp from "./components/servicespages/MortageLonelp";
import GoldLoanlp from "./components/servicespages/GoldLoanlp";
import Balancetransferlp from "./components/servicespages/BalanceTransferlp";
import Passportlp from "./components/servicespages/Passportlp";
import PanApplicationlp from "./components/servicespages/PanApplicationlp";
import PFwithdrawallp from "./components/servicespages/PFwithdrawallp";
import GSTregFormlp from "./components/servicespages/GSTRegFormlp";
import UdyamCertificatelp from "./components/servicespages/UdyamCertificatelp";
import Foodlicenselp from "./components/servicespages/Foodlicenselp";
import Aboutus from "../src/pages/Aboutus";
import Career from '../src/pages/Career';
import Contactus from "../src/pages/Contactus";
import MortgageLoanlp from "./components/servicespages/MortageLonelp";
import CreditCardlp from "./components/servicespages/CreditCardlp";
import GSTRegFormlp from "./components/servicespages/GSTRegFormlp";
import Applyloanlp from "./components/servicespages/Applyloanlp";
import PassportSchema from "./components/formdashborad/PassportSchema";
import ShopActSchema from "./components/formdashborad/ShopActSchema";
import FoodLicience from "./components/formdashborad/FoodLicience";
import UdyamCertificate from "./components/formdashborad/UdyamCertificate";
import Myleadtbloutter from "./pages/Myleadtbloutter";
import UpdateLeadForHomeLoan from "./pages/UpdateLeadForHomeLoan";
import Updateclient from "./pages/Updateemployee";
import Updateallempolyee from "./pages/Updateallempoye";

import AllLead from "./pages/AllLead";
import AllLeadtable from "./pages/AllLeadtable";
import AllClient from "./pages/AllClient";
import UpdateLeadForBusinessLoan from "./pages/UpdateLeadForBusinessLoan";
import UpdateLeadForPersonalLoan from "./pages/UpdateLeadForPersonalLoan";
import UpdateLeadForMortgageLoan from "./pages/UpdateLeadForMortgageLoan";

import UpdateLeadForCreditCard from "./pages/UpdateLeadForCreditCard";
import UpdateLeadForCarLoan from "./pages/UpdateLeadForCarLoan";
import UpdateLeadForGSTLoan from "./pages/UpdateLeadForGST";
import UpdateLeadForPassport from "./pages/UpdateLeadForPassport";
import UpdateLeadForGoldLoan from "./pages/UpdateLeadForGoldLoan";
import UpdateLeadForShopAct from "./pages/UpdateLeadForShopAct";
import UpdateLeadForUdyamCertificate from "./pages/UpdateLeadForUdyam";
import UpdateLeadForFoodLisece from "./pages/UpdateLeadForFoodLisence";
import FormCorrection from "./components/formdashborad/FormCorrection";
import UpdateCorrectionForm from "./pages/UpdateCorrectionForm";

import ErrorPage from "./pages/ErrorPage";
import Updateemployeepass from "./pages/Updateemployeepass";
function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/addclient" element={<AddClient />} />
        <Route exact path="/updateclient/:id" element={<Updateclient />} />
        <Route exact path="/addlead" element={<Addleads />} />
        <Route exact path="/mylead" element={<Mylead />} />
        <Route exact path="/allLead" element={<AllLead />} />
        <Route exact path="/myclient" element={<Myclient />} />
        <Route exact path="/Allclient" element={<AllClient />} />
        <Route exact path="/mylead/service/:service" element={<Myleadtbloutter />} />
        <Route exact path="/allLead/service/:service" element={<AllLeadtable />} />
        <Route exact path="/transferlead/:id" element={<Transferlead />} />
        <Route exact path="/allemployee" element={<Allemployees />} />
        <Route exact path="/updateallemployee/:id" element={<Updateallempolyee />} />
        <Route exact path="/leadform" element={<Leadform />} />
        <Route exact path="/myprofile" element={<Myprofile />} />
        <Route exact path="/update" element={<Updateempolyee />} />
        <Route exact path="/Personal Loan" element={<PersonalLoan/>} />
        <Route exact path="/Business Loan" element={<BusinessLoan/>} />
        <Route exact path="/Mortgage  Loan" element={<MortgageLoan/>} />
        <Route exact path="/Credit Card" element={<CreditCardLoan/>} />
        <Route exact path="/Gold Loan" element={<GoldLoan/>} />
        <Route exact path="/Home  Loan" element={<HomeLoan/>} />
        <Route exact path="/car Loan" element={<Carloan/>} />
        <Route exact path="/GST registration application" element={<GstApplication/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/addemployee" element={<Addemployee />} />
        <Route exact path="/homeloan" element={<HomeLonelp />} />
        <Route exact path="/businessloan" element={<BusinessLonelp />} />
        <Route exact path="/personalloan" element={<PersonalLoanlp />} />
        <Route exact path="/mortageloan" element={<MortgageLoanlp />} />
        <Route exact path="/goldloan" element={<GoldLoanlp />} />
        <Route exact path="/HomeLoanBalanceTransfer" element={<Balancetransferlp />}/>
        <Route exact path="/creditcard" element={<CreditCardlp />}/>
        <Route exact path="/passportlp" element={<Passportlp />}/>
        <Route exact path="/panapplication" element={<PanApplicationlp />}/>
        <Route exact path="/pfwithdrawal" element={<PFwithdrawallp />}/>
        <Route exact path="/gstregistration" element={<GSTRegFormlp />}/>
        <Route exact path="/udyamcertificate" element={<UdyamCertificatelp />}/>
        <Route exact path="/foodlicense" element={<Foodlicenselp/>}/>
        <Route exact path="/aboutus" element={<Aboutus/>}/>
        <Route exact path="/contactus" element={<Contactus/>}/>
        <Route exact path="/career" element={<Career/>}/>

        <Route exact path="/applyloanlp" element={<Applyloanlp/>}/>
        <Route exact path="/passport" element={<PassportSchema/>}/>
        <Route exact path="/Shop Act" element={<ShopActSchema/>}/>
        <Route exact path="/Food Lisence" element={<FoodLicience/>}/>
        <Route exact path="/UDYAM Registration" element={<UdyamCertificate/>}/>
        <Route exact path="/updatelead/Home  Loan" element={<UpdateLeadForHomeLoan/>}/>
        <Route exact path="/updatelead/Business Loan" element={<UpdateLeadForBusinessLoan/>}/>
        <Route exact path="/updatelead/personal loan" element={<UpdateLeadForPersonalLoan/>}/>
        <Route exact path="/updatelead/Gold loan" element={<UpdateLeadForGoldLoan/>}/>
        <Route exact path="/updatelead/Mortgage  Loan" element={<UpdateLeadForMortgageLoan/>}/>
        <Route exact path="/updatelead/Credit Card" element={<UpdateLeadForCreditCard/>}/>
        <Route exact path="/updatelead/car Loan" element={<UpdateLeadForCarLoan/>}/>
        <Route exact path="/updatelead/GST registration application" element={<UpdateLeadForGSTLoan/>}/>
        <Route exact path="/updatelead/UDYAM Registration" element={<UpdateLeadForUdyamCertificate/>}/>
        <Route exact path="/updatelead/Shop Act" element={<UpdateLeadForShopAct/>}/>
        <Route exact path="/updatelead/passport" element={<UpdateLeadForPassport/>}/>
        <Route exact path="/updatelead/Food Lisence" element={<UpdateLeadForFoodLisece/>}/>
        <Route exact path="/updatemployeepassword/:id" element={<Updateemployeepass/>}/>
        <Route exact path="/New Correction Pan application" element={<FormCorrection/>} />
        <Route exact path="/updatelead/New Correction Pan application" element={<UpdateCorrectionForm/>} />
        <Route exact path="/*" element={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
