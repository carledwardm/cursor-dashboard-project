import { customerFeedback } from "@/data/dashboardData";
import styles from "./FeedbackPanel.module.scss";

export function FeedbackPanel() {
  const avgScore =
    customerFeedback.reduce((sum, f) => sum + f.score, 0) / customerFeedback.length;

  return (
    <section
      id="feedback"
      className={styles.card}
      aria-label="Recent customer feedback"
    >
      <div className={styles.headerRow}>
        <div>
          <div className={styles.title}>Client feedback</div>
          <div className={styles.subtitle}>Post-job sentiment and commentary</div>
        </div>
        <div>
          <div className={styles.score}>{avgScore.toFixed(1)} ★</div>
          <div className={styles.scoreMeta}>Rolling 7-day average</div>
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
              <span className={styles.scorePill}>{feedback.score.toFixed(1)} ★</span>
            </div>
            <p className={styles.comment}>{feedback.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

