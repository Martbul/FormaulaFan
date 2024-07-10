'use client'

import { createContext, useContext, useState } from 'react'

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});


export function AppWrapper({ children }: { children: React.ReactNode }) {
 const [user, setUser] = useState<User | null>(null);

 const contextValue: AuthContextType = {
   user,
   setUser,
 };

   return (
      <AuthContext.Provider value={contextValue}>
         {children}
      </AuthContext.Provider>
   )
}


export function useAuthContext() {
   return useContext(AuthContext)
}

