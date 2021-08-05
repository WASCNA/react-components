import React from "react";
import { Timeline } from "react-twitter-widgets";

const Events = () => {
  return (
    <main className="page">
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "TSRSCNA",
        }}
        options={{
          height: "70vh",
        }}
      />
    </main>
  );
};

export default Events;
