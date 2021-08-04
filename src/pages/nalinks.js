import React from "react";
import {nalinks} from "../data/nalinks";

const NALinks = () => {
  return (
    <main className="page">
      {nalinks.map((link) => {
        return (
          <article>
            <a href={link.url}>
              <h3>{link.name}</h3>
            </a>
          </article>
        );
      })}
    </main>
  );
};

export default NALinks;
