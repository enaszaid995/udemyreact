
import { BrowserRouter ,Route ,Switch} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Header from './Header/Header';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/Home" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
