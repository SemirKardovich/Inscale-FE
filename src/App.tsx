
import { AppContainer } from "./App.style"
import Navbar from "./ui/components/Navbar"
import Home from "./ui/pages/Home"
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { api } from "./services/api"

function App() {
  return (
    <ApiProvider api={api}>
      <AppContainer>
        <Navbar />
        <Home />
      </AppContainer>
    </ApiProvider>
  )
}

export default App
