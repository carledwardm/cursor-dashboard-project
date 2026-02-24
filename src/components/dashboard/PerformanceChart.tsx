"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  TooltipProps,
} from "recharts";
import type { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";
import { monthlyPerformance } from "@/data/dashboardData";
import styles from "./PerformanceChart.module.scss";

type PayloadItem = {
  name: string;
  value: number;
  color: string;
};

function CustomTooltip({ active, payload, label }: TooltipProps<ValueType, NameType>) {
  if (!active || !payload || !payload.length) return null;

  const revenue = payload.find((p) => p.dataKey === "revenue");
  const completed = payload.find((p) => p.dataKey === "completedJobs");
  const emergency = payload.find((p) => p.dataKey === "emergencyJobs");

  return (
    <div
      style={{
        padding: "8px 10px",
        borderRadius: 12,
        background:
          "radial-gradient(circle at top left, rgba(33, 44, 124, 0.96), rgba(7, 9, 26, 0.98))",
        border: "1px solid rgba(143, 159, 255, 0.9)",
        fontSize: 11,
      }}
    >
      <div style={{ marginBottom: 4, fontWeight: 500 }}>{label}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {revenue && (
          <TooltipRow
            color="#47e6b1"
            label="Revenue captured"
            value={(revenue as PayloadItem).value.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
          />
        )}
        {completed && (
          <TooltipRow
            color="#6f7cff"
            label="Jobs completed"
            value={(completed as PayloadItem).value.toString()}
          />
        )}
        {emergency && (
          <TooltipRow
            color="#ff5573"
            label="Emergency jobs"
            value={(emergency as PayloadItem).value.toString()}
          />
        )}
      </div>
    </div>
  );
}

function TooltipRow({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: color,
        }}
      />
      <span style={{ flex: 1, color: "rgba(184, 196, 255, 0.9)" }}>{label}</span>
      <span style={{ color: "#fff" }}>{value}</span>
    </div>
  );
}

export function PerformanceChart() {
  return (
    <section id="overview" className={styles.card} aria-label="Revenue and job performance over time">
      <div className={styles.headerRow}>
        <div>
          <div className={styles.title}>Portfolio performance</div>
          <div className={styles.subtitle}>Revenue, volume and emergencies by month</div>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendSwatch} ${styles.legendRevenue}`} />
            Revenue
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendSwatch} ${styles.legendJobs}`} />
            Completed jobs
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendSwatch} ${styles.legendEmergency}`} />
            Emergency jobs
          </div>
        </div>
      </div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={monthlyPerformance}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#47e6b1" stopOpacity={0.9} />
                <stop offset="85%" stopColor="#47e6b1" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="jobsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6f7cff" stopOpacity={0.85} />
                <stop offset="85%" stopColor="#6f7cff" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="emerGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff5573" stopOpacity={0.85} />
                <stop offset="85%" stopColor="#ff5573" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke="rgba(80, 97, 177, 0.45)"
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "rgba(164, 176, 230, 0.95)", fontSize: 11 }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "rgba(130, 145, 210, 0.9)", fontSize: 10 }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              width={44}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "rgba(130, 145, 210, 0.8)", fontSize: 10 }}
              width={32}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              content={() => null}
              verticalAlign="top"
              height={0}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#47e6b1"
              strokeWidth={2}
              fill="url(#revGradient)"
              yAxisId="left"
              name="Revenue"
            />
            <Area
              type="monotone"
              dataKey="completedJobs"
              stroke="#6f7cff"
              strokeWidth={1.6}
              fill="url(#jobsGradient)"
              yAxisId="right"
              name="Completed jobs"
            />
            <Area
              type="monotone"
              dataKey="emergencyJobs"
              stroke="#ff5573"
              strokeWidth={1.3}
              fill="url(#emerGradient)"
              yAxisId="right"
              name="Emergency jobs"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

