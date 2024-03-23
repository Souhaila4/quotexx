import logo from './logo.svg';
import './App.css';
import TradingViewWidget from './components/TradingViewWidget';
import Sidebar from './components/SideBarConfig';


function App() {
  return (
    <div className="App">

      <TradingViewWidget />
      <Sidebar />
    </div>
  );
}

export default App;
