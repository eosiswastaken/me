import Card from './components/Card'
import Desk from './components/Desk'
import Footer from './components/Footer'
import './App.css'
import { inject } from '@vercel/analytics';
 
function App() {

  inject();
  return (
    <div className="app">
        <Desk></Desk>
        <Card></Card>
        <Footer></Footer>
    </div>
  )
}

export default App
