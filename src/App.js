
import { BrowserRouter as Router, Route,NavLink as Link,Switch} from 'react-router-dom';
import Artist from './components/homechild/atrists';
import Home from './components/home';
import ArtistDetels from './components/artistDete';

const App=() =>{
   return(
    <div> 
        <Router >
              <Switch>
                <Route exact  path='/' component={Home} />
                <Route   path='/artist/:id' component={ArtistDetels} /> 
              </Switch>
        </Router>
    </div>
   )
}
export default App;