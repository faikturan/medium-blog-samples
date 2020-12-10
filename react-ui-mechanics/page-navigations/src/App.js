import './App.css';
import React from 'react';
import {LoginPage} from "./components/LoginPage";
import {MainPage} from "./components/MainPage";
import {SettingsPage} from "./components/SettingsPage";
import {createBrowserHistory} from 'history';


import {
    Switch,
    Route,
    Router,
    Link,
    Redirect,
} from "react-router-dom";


const history = createBrowserHistory();


class App extends React.Component {

    constructor(props) {
        super(props);
    }


    handlePageChange = (activePage) => {
        history.push(activePage);
    }


    renderNavMenu = () => {
        return (
            <>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/main">Main</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>

                <hr/>
            </>


        )
    }

    render() {
        return (
            <div className="App">


                <Router history={history}>
                    {this.renderNavMenu()}
                    <Switch>
                        <Route exact path="/">
                            <LoginPage handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route path="/main">
                            <MainPage handlePageChange={this.handlePageChange}/>
                        </Route>
                        <Route path="/settings">
                            <SettingsPage handlePageChange={this.handlePageChange}/>
                        </Route>
                    </Switch>
                </Router>

            </div>);
    }
}


export default App;


