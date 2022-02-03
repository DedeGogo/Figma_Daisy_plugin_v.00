import React, { createContext, useState } from "react";

// Type definitions
export type AuthUser = {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

//create a context, with createContext api
export const userContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  // this state will be shared with all components
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    // this is the provider providing state
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
