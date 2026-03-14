import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleBlock}>
        <div className={styles.metaRow}>
          <span className={styles.dot} />
          <span>Command Center · Live dispatch view</span>
        </div>
        <h1 className={styles.title}>
          Facility Ops <span className={styles.highlight}>Health</span>
        </h1>
        <p className={styles.subtitle}>
          Monitoring work orders, field utilization and SLA risk across your portfolio.
        </p>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            placeholder="Search jobs, sites or clients"
            aria-label="Search jobs, sites or clients"
          />
          <span className={styles.searchIcon}>⌕</span>
        </div>
        
        <div className={styles.iconButtons}>
          <button className={styles.iconButton} aria-label="Messages">
            ✉
            <span className={styles.iconBadge}>3</span>
          </button>
          <button className={styles.iconButton} aria-label="Notifications">
            🔔
            <span className={styles.iconBadge}>9</span>
          </button>
          <button className={`${styles.iconButton} ${styles.iconButtonSubtle}`} aria-label="Command palette">
            ⌘K
          </button>
        </div>
      </div>
    </header>
  );
}

