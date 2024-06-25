import { useState } from 'react'
import './App.css'
import {NextUIProvider} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";
import Router from './navigation/Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NextUIProvider>
        <Button>Start Game</Button>
        <Router />
      </NextUIProvider>
    </>
  )
}

export default App
