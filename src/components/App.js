import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ProgressBar from "./ProgressBar/ProgressBar";
import ResetStyle from "./style/Reset";
import GlobalStyle from "./style/Global";

const App = () => {
  const [progressValue, setProgressValue] = useState(0);
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <ProgressBar value={progressValue.toFixed(2)} max={100} />
      <ContactForm
        progressValue={progressValue}
        setProgressValue={setProgressValue}
      />
    </>
  );
};

export default App;
