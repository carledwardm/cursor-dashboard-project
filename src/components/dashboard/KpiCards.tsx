import { kpiSummary, jobsByStatus } from "@/data/dashboardData";
import styles from "./KpiCards.module.scss";

export function KpiCards() {
  return (
    <section className={styles.grid} aria-label="Key performance indicators">
      <article className={styles.card}>
        <div className={styles.labelRow}>
          <span>Revenue captured</span>
          <span className={styles.pill}>This month</span>
        </div>
        <div className={styles.valueRow}>
          <span className={styles.value}>
            {kpiSummary.revenueThisMonth.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            })}
          </span>
          <span className={styles.unit}>across all jobs</span>
        </div>
        <div className={styles.trend}>↑ 12.4% vs last month</div>
        <div className={styles.sparkTrack}>
          <div className={styles.sparkBar} style={{ transform: "scaleX(0.86)" }} />
          <div className={styles.sparkOverlay} />
        </div>
        <div className={styles.badge}>
          <span className={`${styles.badgeDot} ${styles.badgeDotGreen}`} />
          97% invoiced within 24h
        </div>
      </article>

      <article className={styles.card}>
        <div className={styles.labelRow}>
          <span>Jobs status</span>
          <span className={styles.pill}>Field workload</span>
        </div>
        <div className={styles.valueRow}>
          <span className={styles.value}>{jobsByStatus.completed}</span>
          <span className={styles.unit}>completed</span>
        </div>
        <div className={styles.trend}>
          {jobsByStatus.inProgress} in progress · {jobsByStatus.undispatched} awaiting dispatch
        </div>
        <div className={styles.sparkTrack}>
          <div className={styles.sparkBar} style={{ transform: "scaleX(0.7)" }} />
          <div className={styles.sparkOverlay} />
        </div>
        <div className={styles.badge}>
          <span className={`${styles.badgeDot} ${styles.badgeDotAmber}`} />
          {jobsByStatus.emergency} emergency tickets
        </div>
      </article>

      <article className={styles.card}>
        <div className={styles.labelRow}>
          <span>Response time</span>
          <span className={styles.pill}>SLA performance</span>
        </div>
        <div className={styles.valueRow}>
          <span className={styles.value}>{kpiSummary.avgResponseMinutes}</span>
          <span className={styles.unit}>min avg response</span>
        </div>
        <div className={styles.trend}>
          ↑ 6.2 mins faster ·{" "}
          <span className={styles.trendDown}>3 jobs at risk window</span>
        </div>
        <div className={styles.sparkTrack}>
          <div className={styles.sparkBar} style={{ transform: "scaleX(0.64)" }} />
          <div className={styles.sparkOverlay} />
        </div>
        <div className={styles.badge}>
          <span className={`${styles.badgeDot} ${styles.badgeDotRed}`} />
          Escalations auto-routed
        </div>
      </article>

      <article className={styles.card}>
        <div className={styles.labelRow}>
          <span>Customer sentiment</span>
          <span className={styles.pill}>Post-job CSAT</span>
        </div>
        <div className={styles.valueRow}>
          <span className={styles.value}>4.7</span>
          <span className={styles.unit}>/ 5.0</span>
        </div>
        <div className={styles.trend}>↑ 0.3 vs 30-day average</div>
        <div className={styles.sparkTrack}>
          <div className={styles.sparkBar} style={{ transform: "scaleX(0.8)" }} />
          <div className={styles.sparkOverlay} />
        </div>
        <div className={styles.badge}>
          <span className={`${styles.badgeDot} ${styles.badgeDotGreen}`} />
          82% jobs rated 5★
        </div>
      </article>
    </section>
  );
}

