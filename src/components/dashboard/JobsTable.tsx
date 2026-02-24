import { jobs } from "@/data/dashboardData";
import type { JobPriority, JobStatus } from "@/data/dashboardData";
import styles from "./JobsTable.module.scss";

function priorityClass(priority: JobPriority) {
  switch (priority) {
    case "Emergency":
      return styles.priorityEmergency;
    case "High":
      return styles.priorityHigh;
    case "Normal":
      return styles.priorityNormal;
    case "Low":
    default:
      return styles.priorityLow;
  }
}

function statusClass(status: JobStatus) {
  switch (status) {
    case "Completed":
      return styles.statusCompleted;
    case "In Progress":
      return styles.statusInProgress;
    case "Undispatched":
      return styles.statusUndispatched;
    case "On Hold":
    default:
      return styles.statusOnHold;
  }
}

export function JobsTable() {
  return (
    <section id="jobs" className={styles.card} aria-label="Live jobs list">
      <div className={styles.headerRow}>
        <div>
          <div className={styles.title}>Live work orders</div>
          <div className={styles.subtitle}>Emergencies, in-progress and undispatched jobs</div>
        </div>
        <div className={styles.filters}>
          <button className={`${styles.filterChip} ${styles.filterChipActive}`}>Today</button>
          <button className={styles.filterChip}>This week</button>
          <button className={styles.filterChip}>Only emergencies</button>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Job</th>
              <th className={styles.th}>Client & site</th>
              <th className={styles.th}>Type</th>
              <th className={styles.th}>Priority</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Schedule</th>
              <th className={styles.th}>Technician</th>
              <th className={styles.th}>Revenue</th>
              <th className={styles.th}>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className={styles.row}>
                <td className={`${styles.td} ${styles.idCell}`}>{job.id}</td>
                <td className={styles.td}>
                  <div>{job.client}</div>
                  <div className={styles.subtitle}>{job.site}</div>
                </td>
                <td className={styles.td}>{job.type}</td>
                <td className={styles.td}>
                  <span className={`${styles.priorityPill} ${priorityClass(job.priority)}`}>
                    {job.priority === "Emergency" ? "●" : "○"} {job.priority}
                  </span>
                </td>
                <td className={styles.td}>
                  <span className={`${styles.statusPill} ${statusClass(job.status)}`}>
                    {job.status}
                  </span>
                  {job.slaBreached && <div className={styles.slaBadge}>SLA breached</div>}
                </td>
                <td className={styles.td}>{job.scheduledFor}</td>
                <td className={styles.td}>{job.technician}</td>
                <td className={`${styles.td} ${styles.revenue}`}>
                  {job.revenue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}
                </td>
                <td className={styles.td}>
                  {job.feedbackScore ? (
                    <span className={`${styles.feedback} ${styles.feedbackStrong}`}>
                      {job.feedbackScore.toFixed(1)} ★
                    </span>
                  ) : (
                    <span className={styles.feedback}>Awaiting review</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

