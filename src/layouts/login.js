import React,{ Component } from 'react';
import ReactRouterDOM,{BrowserRouter,Link,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import '../css/login.css'

class InputFiled extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            msg: '',
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = {
            userAccount: this.state.name,
            passwrod: this.state.password
        };
        fetch("/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function (response) {
            return response.json();
        }).then((data)=> {
            console.log(data);
            if (data.code === 200) {

                this.setState({ redirect: true });


            } else {
                window.alert("账户或密码输入错误！");
            }
        }).catch(function (err) {
            console.log(err)
        });
    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/main'/>;
        }
        return (

            <div className="htmleaf-container">


                <div id="wrapper" className="login-page">
                    <div id="login_form" className="form">

                        <form onSubmit={this.handleSubmit} method="POST" className="login-form">

                            <input type="text" onChange={e => this.logChange(e)} placeholder='用户名' name='name'/>
                            <input type={'password'} onChange={e => this.logChange(e)} placeholder='密码'
                                   name='password'/>
                            <div>
                                <Link to={'menu'}/>
                                <button type={'submit'} id="login"> 登 录</button>
                                <p className="message">还没有账户?<Link to={'register'}> 立刻创建</Link></p>
                            </div>
                        </form>


                    </div>
                </div>
            </div>


        );
    }
}
export default InputFiled;
InputFiled.contextTypes = {
    router:()=> React.PropTypes.func.isRequired
};