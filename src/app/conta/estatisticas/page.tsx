import statsGet from "@/src/actions/stats-get";
import AccountStatsLoader from "@/src/components/account-stats/account-stats-loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs | Estatísticas | Minha conta",
  description:
    "Página de estatísticas do site Dogs desenvolvido por Lucas Bargas.",
};

const StatisticsPage = async () => {
  const { data } = await statsGet();

  if (!data) return null;

  return (
    <section>
      <AccountStatsLoader data={data} />
    </section>
  );
};

export default StatisticsPage;
