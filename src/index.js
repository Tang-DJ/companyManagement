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
import {StaffList} from "./layouts/staffList";
import {PositionList} from "./layouts/positionList";
import {RoleList} from "./layouts/roleList";
import {DepartmentList} from "./layouts/departmentList";
import {UserList} from "./layouts/userList";


ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path={"/"} component={App}/>
            <Route exact path={"/register"} component={Register}/>
            <Route exact path={'/main'} component={Main}/>
            <Route exact path={'/userList'} component={UserList}/>
            <Route exact path={'/positionList'} component={PositionList}/>
            <Route exact path={'/roleList'} component={RoleList}/>
            <Route exact path={'/departmentList'} component={DepartmentList} />
            <Route exact path={'/staffList'} component={StaffList} />
        </div>
    </BrowserRouter>

    ), document.getElementById('root'));

registerServiceWorker();
