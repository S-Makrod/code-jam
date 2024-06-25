import { useState } from 'react'
import './App.css'
import {NextUIProvider} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NextUIProvider>
        <Button>Start Game</Button>
      </NextUIProvider>
    </>
  )
}

export default App
