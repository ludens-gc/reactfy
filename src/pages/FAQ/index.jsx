import axios from "axios";
import { useEffect, useState } from "react";
import QuickHelpSection from "../../components/QuickHelpSection";

const FAQ = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/faq/")
      .then((res) => {
        console.log(res);
        setQuestions(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => console.log(questions));
  }, []);

  const res = questions.map((item) => {
    return <QuickHelpSection key={item.id} item={item} />;
  });

  return (
    <main>
      <h1>FAQ - Ajuda rápida</h1>
      {res}
    </main>
  );
};

export default FAQ;
