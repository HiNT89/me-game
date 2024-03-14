import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./admin.module.scss";
const NAVS = [
  { id: 0, name: "nav 1", path: "nav1" },
  { id: 1, name: "nav 2", path: "nav2" },
  { id: 2, name: "nav 3", path: "nav3" },
  { id: 3, name: "nav 4", path: "nav4" },
];
export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.nav_logo}>
          <Link href={"/"}>me game</Link>
        </div>
        <ul className={styles.nav_list}>
          {NAVS.map((nav) => (
            <li
              key={nav.path}
              className={clsx(
                styles.nav_item,
                nav.id === 0 ? styles.active : "",
              )}
            >
              <Link href={nav.path}>{nav.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.nav_footer}>Website by hint</div>
      </nav>
      <section className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.header_title}>title page</h2>
          <div className={styles.header_right}>
            <div>
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} />
              hello, admin
            </div>
          </div>
        </header>
        <article className={styles.content_center}>content</article>
      </section>
    </main>
  );
}
