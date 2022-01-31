import React from "react";
import styles from "./styles.module.scss";

const CustomTabs = ({
  children,
  activeTab,
  clicked,
  headers,
  headersSpaced,
  dot,
}) => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tabsHeader}>
        <ul
          className={`hide-scrollbar ${styles.tabsHeaderList} ${
            headersSpaced ? styles.horizontalPadding : ""
          }`}
        >
          {headers.map((item) => {
            return (
              <li
                onClick={() => clicked(item.id)}
                key={item.id}
                className={`${activeTab === item.id ? styles.active : ""}`}
              >
                <button onClick={() => clicked(item.id)}>
                  <div className={styles.buttonIcon}>
                    {dot && <span className={styles.dot}></span>}
                    {<img src={item.icon} alt='' />}
                    {item.name}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {children}
    </div>
  );
};

export default CustomTabs;
