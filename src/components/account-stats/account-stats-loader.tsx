"use client";

import dynamic from "next/dynamic";

const AccountStatsLoader = dynamic(
  () =>
    import("@/src/components/account-stats").then(
      (module) => module.AccountStats,
    ),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  },
);

export default AccountStatsLoader;
