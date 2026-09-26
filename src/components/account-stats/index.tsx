"use client";

import { IStatsData } from "@/src/actions/stats-get";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";
import styles from "./styles.module.css";

interface IGraphData {
  x: string;
  y: number;
}

export const AccountStats = ({ data }: { data: IStatsData[] }) => {
  const graph: IGraphData[] = data.map((item) => ({
    x: item.title,
    y: Number(item.acessos),
  }));

  const total = data.reduce((total, item) => total + Number(item.acessos), 0);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>

      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
};
