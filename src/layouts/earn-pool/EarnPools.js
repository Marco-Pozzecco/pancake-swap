import React from "react";
import { EarnPoolItems } from "../../components/card/EarnPoolItems";
import "./_earn-pool.scss";

export function EarnPools() {
  return (
    <section className="earn-pool-section earn-pool-section-list">
      <EarnPoolItems />
      <EarnPoolItems />
      <EarnPoolItems />
      {/* ------- */}
      <EarnPoolItems />
      <EarnPoolItems />
      <EarnPoolItems />
    </section>
  );
}
