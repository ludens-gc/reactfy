import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import style from "./style.module.scss";

const QuickHelpSection = ({ item }) => {
  const [activeButton, setActiveButton] = useState(false);

  console.log(activeButton);
  return (
    <section>
      <button
        onClick={() => setActiveButton(!activeButton)}
        className={!activeButton ? style.collapsible : style.active}
      >
        {item.title}
      </button>
      <div
        className={!activeButton ? style.contentDisabled : style.contentActive}
      >
        <ReactMarkdown>{item.text}</ReactMarkdown>
      </div>
    </section>
  );
};

export default QuickHelpSection;
