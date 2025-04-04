import React from "react";
import Styles from "../styles/Home.module.css";

function HomePage() {
  return (
    <div className={Styles.container}>
      <style jsx>
        {`
          .mySpan {
            color: green;
          }
        `}
      </style>

      <div>
        <span className="mySpan">NextJs Tutorial</span>
      </div>
    </div>
  );
}

export default HomePage;
