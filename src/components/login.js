import React,{ Component } from 'react';
import ReactRouterDOM,{BrowserRouter,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import '../css/login.css'

export class InputFiled extends Component{
    render(){

        return(
        <div className={''}>
            <div className="htmleaf-container">
                <div id="wrapper" className="login-page">
                    <div id="login_form" className="form">
                        <form className="login-form">
                            <input type="text" placeholder="用户名" id="user_name"/>
                            <input type="password" placeholder="密码" id="password"/>
                        </form>
                        <BrowserRouter>
                            <div>
                                <Link to={'/register.js'}><button id="login"> 登　录</button></Link>
                                <p className="message">还没有账户? 立刻创建</p>
                            </div>
                        </BrowserRouter>
                    </div>
                </div>
            </div>


        </div>
        );
    }
}
