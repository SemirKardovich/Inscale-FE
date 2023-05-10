
import { AppContainer } from "./App.style"
import Navbar from "./ui/components/Navbar"
import Home from "./ui/pages/Home"

function App() {
  return (
    <>
      <AppContainer>
        <Navbar />
        <Home />
      </AppContainer>
    </>
  )
}

export default App
