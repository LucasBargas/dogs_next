"use client";

import React from "react";
import { IUser } from "../types/user";

interface IUserContext {
  user: IUser | null;
  setUserState: React.Dispatch<React.SetStateAction<IUser | null>>;
}

interface IUserContextProviderProps {
  children: React.ReactNode;
  user: IUser | null;
}

export const UserContext = React.createContext<IUserContext | null>(null);

export const UserContextProvider = ({
  children,
  user,
}: IUserContextProviderProps) => {
  const [userState, setUserState] = React.useState<IUser | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};
