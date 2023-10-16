import { createApp } from 'airx'

function App() {
  return () => <span>app</span>
}

createApp(<App></App>).mount(document.getElementById('app')!)
