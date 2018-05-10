import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import 'react-bootstrap/dist/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import App from './App';
import Register from './layouts/register';
import {Main} from "./layouts/main";
import registerServiceWorker from './registerServiceWorker';
import Table from "./components/table";
import {StaffList} from "./layouts/staffList";


ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/register" component={Register}/>
            <Route exact path={'/main'} component={Main}/>
            <Route exact path={'/staffList'} component={StaffList}/>
        </div>
    </BrowserRouter>

    ), document.getElementById('root'));

registerServiceWorker();
