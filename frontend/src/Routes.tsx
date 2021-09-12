import Dasboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Dashboard">
                    <Dasboard />
                </Route>
            </switch>

        </BrowserRouter>
    );
}

export default Routes;