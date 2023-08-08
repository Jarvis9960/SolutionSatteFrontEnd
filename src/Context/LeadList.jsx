import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { leadReducer } from "../reducer/leadReducer";

export const LeadListContext = createContext();

const tokenData = localStorage.getItem("token");
let token;
if (tokenData) {
   token = JSON.parse(tokenData).usertoken;
}

const LeadListProvider = ({ children }) => {
  const [leadState, dispatch] = useReducer(leadReducer, {
    isLoading: false,
    isError: false,
    leads: [],
  });

  
  return (
    <LeadListContext.Provider value={leadState}>
      {children}
    </LeadListContext.Provider>
  );
};

export default LeadListProvider;
