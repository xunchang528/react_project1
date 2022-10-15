import Counter from  "./counter"
import CounterHook from "./countHook";
import React, { useState } from "react";

export const ThemeContext = React.createContext()

function App() {
  console.log("APP");
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ background: theme} }>
      <div>Class Counter</div> 
      <Counter initialCount = {2} />
      <div>Function Counter</div>
      <CounterHook initialCount = {14} />
      <br></br>
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'green' : "red"
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}
//不知道怎么从外面传进来？

export default App; 