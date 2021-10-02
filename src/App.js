
import { BrowserRouter ,Route ,Switch} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import SingleCourse from './Component/SingleCourse';
import Web from './Component/Web';
import Footer from './Footer/Footer';
import Header from './Header/Header';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/Home" component={Home} exact/>
        <Route path="/Course/:a" component={SingleCourse} exact/>
        <Route path="/Web" component={Web} exact/>        
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
