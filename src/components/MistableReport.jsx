import React from "react";
import { CSVLink, CSVDownload } from "react-csv";

const MistableReport = ({ mistabledata }) => {
  return (
    <div className="bg-white">
    <table className="table-fixed w-full h-32 overflow-y-auto bg-white">
      <thead>
        <tr>
          <th className="px-2 py-2">All Services</th>
          <th className="px-2 py-2">Count Of Services</th>
          <th className="px-2 py-2">Sum Of Amount</th>
        </tr>
      </thead>
      {mistabledata ?
      <tbody>
        <tr>
          <td className="border  text-center">Business Loan</td>
          <td className="border  text-center">
            {mistabledata.businessLoan.businessLoanLeadCount}
          </td>
          <td className="border text-center">
            {mistabledata.businessLoan.businessLoanLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">Car Loan</td>
          <td className="border  text-center">
            {mistabledata.carLoan.carLoanLeadCount}
          </td>
          <td className="border text-center">
            {mistabledata.carLoan.carLoanLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">Credit Card Loan</td>
          <td className="border  text-center">
            {mistabledata.creditLoan.creditLoanLeadCount}
          </td>
          <td className="border text-center">
            {mistabledata.creditLoan.creditLoanLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">Food Lisence Loan</td>
          <td className="border  text-center">
            {mistabledata.foodLisenceLoan.foodLisenceLoanLeadCount}
          </td>
          <td className="border text-center">
            {mistabledata.foodLisenceLoan.foodLisenceLoanLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">Gold Loan</td>
          <td className="border text-center">
            {mistabledata.goldLoan.goldLoanLeadCount}
          </td>
          <td className="border  text-center">
            {mistabledata.goldLoan.goldLoanLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">GST Loan</td>
          <td className="border text-center">
            {mistabledata.gstLoan.gstLoanLeadCount}
          </td>
          <td className="border  text-center">
            {mistabledata.gstLoan.gstLoanLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">Home Loan</td>
          <td className="border text-center">
            {mistabledata.homeLoan.homeLoanLeadCount}
          </td>
          <td className="border  text-center">
            {mistabledata.homeLoan.homeLoanLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">Mortgage Loan</td>
          <td className="border text-center">
            {mistabledata.mortgageLoan.mortgageLoanLeadCount}
          </td>
          <td className="border  text-center">
            {mistabledata.mortgageLoan.mortgageLoanLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">
            New Correction Pan Application
          </td>
          <td className="border text-center">
            {
              mistabledata.newCorrectionPanApplica
                .newCorrectionPanApplicationCount
            }
          </td>
          <td className="border  text-center">
            {mistabledata.newCorrectionPanApplica.newCorrectionPanApplication}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">Passport Loan</td>
          <td className="border text-center">
            {mistabledata.passportLoan.passportLoanLeadCount}
          </td>
          <td className="border  text-center">
            {mistabledata.passportLoan.passportLoanLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">personal Loan</td>
          <td className="border text-center">
            {mistabledata.personalLoan.personalLoanLeadCount}
          </td>
          <td className="border  text-center">
            {mistabledata.personalLoan.personalLoanLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">Shop Act</td>
          <td className="border text-center">
            {mistabledata.shopAct.shopActLeadCount}
          </td>
          <td className="border  text-center">
            {mistabledata.shopAct.shopActLeadAmout}
          </td>
        </tr>
        <tr>
          <td className="border  text-center">Udyam Certificate Loan</td>
          <td className="border text-center">
            {mistabledata.udyamCertificateLoan.udyamCertificateLoanLeadCount}
          </td>
          <td className="border  text-center">
            {mistabledata.udyamCertificateLoan.udyamCertificateLoanLeadAmout}
          </td>
        </tr>
      </tbody>
      : <></>}
    </table>
    </div>
  );
};

export default MistableReport;
