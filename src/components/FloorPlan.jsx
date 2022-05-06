import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import BedRoom from "./BedRoom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return (
    <div className="FloorPlan">
      <BedRoom bedNum={1} />
      <BedRoom bedNum={2} />
      <Bath size="Full" />
      <BedRoom bedNum={3} />
      <Bath size="Half" />
      <Kitchen />
      <LivingRoom />
    </div>
  );
};

export default FloorPlan;
