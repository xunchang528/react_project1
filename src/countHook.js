import { useState,useContext,  } from "react"
import { ThemeContext } from "./App"

export default function CounterHook({initialCount}) {

  const [count, setCount] = useState(initialCount)

  const style = useContext(ThemeContext)

  console.log("Func component")
  return (
    
    <>
    <button style={style} onClick={()=>{ setCount( prevCount => prevCount-1)
    }}>-</button>
    <span>{count}</span>
    <button style={style} onClick={()=>{ setCount( prevCount => prevCount+1)
    }}>+</button>
    </>
  )
}