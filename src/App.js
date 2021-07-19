import Navbar from './navbar';
import './App.css';
import Menu from './menu';
import Services from './services';
import Portfolio from './portfolio';
import Advices from './advices';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
          <div className="content">
            <div><Menu/></div>
            <div><Services/></div>
            <div><Portfolio/></div>
            <div><Advices/></div>
          </div>
    </div>
  );
}

export default App;
