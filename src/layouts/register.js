import React,{ Component } from 'react';
import ReactRouterDOM,{Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import '../css/login.css'

export class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            againPass: ''
        };

    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render(){

        return(

            <div className="htmleaf-container">
                <div id="wrapper" className="login-page">
                    <div id="login_form" className="form">


                        <form onSubmit={this.handleSubmit} method="POST" className="login-form">
                            <input type="text" onChange={e=>this.logChange(e)} placeholder="用户名" name={'name'}/>
                            <input type="password" onChange={e=>this.logChange(e)} placeholder="密码" name="password"/>
                            <input type="password" onChange={e=>this.logChange(e)} placeholder="再次输入密码" name="againPass"/>
                            <button  type={'submit'}>注 册</button>
                            <p className="message">已经有了一个账户? <Link to={''}>立刻登录</Link></p>
                        </form>


                    </div>
                </div>
            </div>


        );
    }
}


export default Register;
