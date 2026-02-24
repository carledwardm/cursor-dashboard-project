import { customerFeedback } from "@/data/dashboardData";
import type { FeedbackOutcome } from "@/data/dashboardData";
import styles from "./FeedbackPanel.module.scss";

export function FeedbackPanel() {
  const total = customerFeedback.length;
  const confirmed = customerFeedback.filter(
    (f) => f.outcome === "Confirmed Complete",
  ).length;

  return (
    <section
      id="feedback"
      className={styles.card}
      aria-label="Recent customer feedback"
    >
      <div className={styles.headerRow}>
        <div>
          <div className={styles.title}>Client feedback</div>
          <div className={styles.subtitle}>Post-job outcomes from client portals</div>
        </div>
        <div className={styles.summary}>
          <div className={styles.summaryPrimary}>
            {confirmed}/{total} confirmed complete
          </div>
          <div className={styles.summaryMeta}>Remaining jobs need review or follow-up</div>
        </div>
      </div>

      <div className={styles.list}>
        {customerFeedback.map((feedback) => (
          <article key={feedback.jobId} className={styles.item}>
            <div className={styles.clientRow}>
              <div>
                <div className={styles.client}>{feedback.client}</div>
                <div className={styles.jobId}>{feedback.jobId}</div>
              </div>
              <span
                className={`${styles.outcomePill} ${outcomeClass(feedback.outcome)}`}
              >
                {feedback.outcome}
              </span>
            </div>
            <p className={styles.comment}>{feedback.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function outcomeClass(outcome: FeedbackOutcome) {
  if (outcome === "Confirmed Complete") return styles.outcomePositive;
  if (outcome === "Unsatisfactory with Feedback") return styles.outcomeNegative;
  return styles.outcomeFollowup;
}

