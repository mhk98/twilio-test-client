import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import VoiceCall from "./VoiceCall";

const App = () => {
  return (
    <div>
      <VoiceCall />

      <Toaster />
    </div>
  );
};

export default App;
