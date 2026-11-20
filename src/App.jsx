import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Sidemenu from './Shared/Sidemenu';


function App() {

  return (
    <>
      <div className='app-main'>
        <div>
          <Sidemenu/>
        </div>
        <div>
          <Header />
          <Dashboard />
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
