import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Containers/Home/Home';
import BellatorMMA from './Component/BellatorMMA';
import Boxing from './Component/Boxing';
import UFC from './Component/UFC';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Boxing" component={Boxing}/>
          <Route exact path="/BellatorMMA" component={BellatorMMA}/>
          <Route exact path="/UFC-Fights" component={UFC}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
