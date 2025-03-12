import React from "react";

import styles from "./Tests.module.css";

import tests from "../../data/tests.json";
import { TestCard } from "./TestCard";

export const Tests = () => {
  return (
    <section className={styles.container} id="tests">
      <h2 className={styles.title}>Tests</h2>
      <div className={styles.tests}>
        {tests.map((test, id) => {
          return <TestCard key={id} test={test} />;
        })}
      </div>
    </section>
  );
};
