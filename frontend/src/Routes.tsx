import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';

const Routes = () => 
    <BrowserRouter>
        <Switch>
            <Route path='/' exact>
                <Home></Home>
            </Route>
            <Route path='/dashboard'>
                <Dashboard></Dashboard>
            </Route>
        </Switch>
    </BrowserRouter>


export default Routes;