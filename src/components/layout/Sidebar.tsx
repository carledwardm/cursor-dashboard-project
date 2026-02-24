import styles from "./Sidebar.module.scss";

const navItems = [
  { label: "Overview", icon: "◎", meta: "Today", active: true, href: "#overview" },
  { label: "Jobs", icon: "⧉", meta: "32 open", active: false, href: "#jobs" },
  { label: "Unassigned Queue", icon: "☰", meta: "9 waiting", active: false, href: "#unassigned" },
  { label: "Dispatch Board", icon: "⚑", meta: "7 SLA risk", active: false, href: "#dispatch" },
  { label: "Assets", icon: "▦", meta: "184 sites", active: false, href: "#assets" },
  { label: "Vendors", icon: "⚙", meta: "42 technicians", active: false, href: "#vendors" },
  { label: "External Portals", icon: "⇱", meta: "Client access", active: false, href: "#portals" },
  { label: "Clients", icon: "✦", meta: "26 key", active: false, href: "#clients" },
  { label: "Feedback", icon: "☻", meta: "Outcomes", active: false, href: "#feedback" },
  { label: "Settings", icon: "☼", meta: "Workspace", active: false, href: "#settings" },
];

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brandRow}>
        <div className={styles.brandMark}>
          <div className={styles.brandLogo}>
            <div className={styles.brandLogoInner}>FM</div>
          </div>
          <div>
            <div className={styles.brandTextPrimary}>FlowGrid</div>
            <div className={styles.brandTextSecondary}>Facility Maintenance Cloud</div>
          </div>
        </div>

        <div className={styles.badge}>Demo Dashboard</div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navSectionLabel}>Navigation</div>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`${styles.navItem} ${item.active ? styles.navItemActive : ""}`}
              >
                <span className={styles.navItemIcon}>{item.icon}</span>
                <span className={styles.navItemPrimary}>{item.label}</span>
                <span className={styles.navItemMeta}>{item.meta}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.bottom}>
        <div className={styles.utilizationCard}>
          <div className={styles.utilizationHeader}>
            <span className={styles.utilizationTitle}>Field utilization</span>
            <span className={styles.utilizationBadge}>Live</span>
          </div>
          <div className={styles.utilizationValue}>84%</div>
          <div className={styles.sparklineTrack}>
            <div className={styles.sparklineFill} style={{ width: "84%" }} />
            <div className={styles.sparklineGlow} />
          </div>
          <div className={styles.utilizationMetaRow}>
            <span>38 techs dispatched</span>
            <span>7 on emergency</span>
          </div>
        </div>

        <div className={styles.profileRow}>
          <div className={styles.profileAvatar}>AO</div>
          <div className={styles.profileMeta}>
            <div className={styles.profileName}>Avery Ortega</div>
            <div className={styles.profileRole}>Operations Director</div>
            <div className={styles.profileStatus}>Online · Command Center</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

