"use client";

import { useUser } from "@/src/hooks/use-user";

const AccountPage = () => {
  const { user } = useUser();
  return <div>Conta: {user?.username}</div>;
};

export default AccountPage;
