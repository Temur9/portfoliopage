import './App.scss'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Work/>
    </div>
  );
}

export default App;
