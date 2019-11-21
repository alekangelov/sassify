import React, { createContext, useEffect } from "react";
import Input from "./components/Input";
import Print from "./components/Print";
import { useDebounce } from "./lib/useDebounce";
import { CLAPS, MANICURES } from "./lib/consts";
import Footer from "./components/Footer";

export const AppContext = createContext({});

function App() {
  const [input, setInput] = useDebounce({});
  const [emoji, setEmoji] = useDebounce({ initialState: CLAPS[0] });
  const [lastEmoji, setLastEmoji] = useDebounce({ initialState: "" });
  useEffect(() => {
    console.log(input, emoji, lastEmoji);
  }, [input, emoji, lastEmoji]);
  return (
    <div className="wrapper">
      <div className="title">
        <h1>
          <span>SASSIFY</span> 💅
        </h1>
        <h2>MAKE 👏 IT 👏 CLAP 👏</h2>
        <AppContext.Provider
          value={{
            input,
            emoji,
            lastEmoji,
            set: {
              input: setInput,
              emoji: setEmoji,
              lastEmoji: setLastEmoji
            }
          }}
        >
          <Input />
          <Print />
        </AppContext.Provider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
