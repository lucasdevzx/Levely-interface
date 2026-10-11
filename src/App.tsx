import './App.css'
import {Outlet} from "react-router";

function App() {

  return (
    <>
      <main>
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>

      <nav>

      </nav>
    </>
  )
}

export default App
