import React,{ Component } from 'react';
import ReactRouterDOM,{BrowserRouter,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import '../css/login.css'

export class InputFiled extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            msg: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = {
            name: this.state.name,
            password: this.state.password
        };
        console.log(data);
        fetch("/users/new", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
                BrowserRouter.push('/home');
                /*throw new Error("Bad response from server");*/
            }
            return response.json();
        }).then(function(data) {
            console.log(data)
            if(data === "success"){
                this.setState({msg: "Thanks for registering"});
            }
        }).catch(function(err) {
            console.log(err)
        });
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

                            <input type="text" onChange={e=>this.logChange(e)} placeholder='用户名' name='name'/>
                            <input type={'password'} onChange={e=>this.logChange(e)} placeholder='密码' name='password' />
                            <div>
                                <Link to={'menu'}/>
                                <button type={'submit'} id="login"> 登　录</button>
                                <p className="message">还没有账户?<Link to={'register'} > 立刻创建</Link></p>
                            </div>
                        </form>


                    </div>
                </div>
            </div>


        );
    }
}

