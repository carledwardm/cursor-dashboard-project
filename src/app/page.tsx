import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { KpiCards } from "@/components/dashboard/KpiCards";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { JobsTable } from "@/components/dashboard/JobsTable";
import { FeedbackPanel } from "@/components/dashboard/FeedbackPanel";
import styles from "./Dashboard.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <main className={styles.main}>
        <Header />
        <KpiCards />
        <section className={styles.content}>
          <div className={styles.leftColumn}>
            <PerformanceChart />
            <JobsTable />
          </div>
          <div className={styles.rightColumn}>
            <FeedbackPanel />
          </div>
        </section>
      </main>
    </div>
  );
}

