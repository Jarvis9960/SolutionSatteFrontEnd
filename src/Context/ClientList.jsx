import { createContext, useEffect, useReducer } from "react";
import { clientReducer } from "../reducer/clientReducer";
import { clientAdminReducer } from "../reducer/clientAdminReducer";

export const ClientListContext = createContext();
export const ClientAdminContext = createContext();

const ClientListProvider = ({ children }) => {
  const [clientState, dispatch] = useReducer(clientReducer, {
    isLoading: false,
    isError: false,
    clients: [],
  });

  const [clientAdminState, adminDispatch] = useReducer(clientAdminReducer, {
    isLoading: false,
    isError: false,
    clientAdmin: [],
  });

  return (
    <ClientListContext.Provider value={{ clientState, dispatch }}>
      <ClientAdminContext.Provider value={{ clientAdminState, adminDispatch }}>
        {children}
      </ClientAdminContext.Provider>
    </ClientListContext.Provider>
  );
};

export default ClientListProvider;
