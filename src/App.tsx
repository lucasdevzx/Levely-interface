import './App.css'
import {Outlet} from "react-router";

function App() {

  return (
    <div className={"flex flex-col justify-between h-full"}>
      <main className={"flex flex-col h-[90%] p-lg"}>
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>

      <nav className={"flex flex-row h-[10%] component-background-transparent text-white p-4"}>

      </nav>
    </div>
  )
}

export default App
