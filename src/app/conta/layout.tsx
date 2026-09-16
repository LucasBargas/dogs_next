import { AccountHeader } from "@/src/components/account-header";

const AccountPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <AccountHeader />
      {children}
    </div>
  );
};

export default AccountPageLayout;
