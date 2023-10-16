import { createApp } from 'airx'

import { Home } from './pages/home'

function App() {
  return () => <Home />
}

createApp(<App></App>).mount(document.getElementById('app')!)
