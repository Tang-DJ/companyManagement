import React,{ Component } from 'react';
import ReactRouterDOM,{Link} from 'react-router-dom';
import axios from 'axios';
import {Form,Radio,FieldGroup} from 'react-bootstrap'
import 'react-bootstrap/dist/react-bootstrap';
import '../css/login.css'
import '../css/register.css'

export class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            againPass: '',
            departmentList:[],
            positionList:[]
        };

    }
    async componentDidMount(){

        axios.get('/department')
            .then(res => {
                console.log(res);

                this.setState({departmentList: res.data.result});
                console.log(this.state.departmentList);
            });
        axios.get('/position')
            .then(res => {
                console.log(res);

                this.setState({positionList: res.data.result});
                console.log(this.state.positionList);
            });
    }





    register(){
        axios.post(`/register/${this.props.subreddit}.json`)
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
            });
    }
    handChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render(){

        return(

            <div className="htmleaf-container">
                <div id="wrapper" className="login-page">
                    <div id="login_form" className="form">


                        <form onSubmit={this.handleSubmit} method="POST" className="login-form">
                            <input type="text" onChange={e=>this.handChange(e)} placeholder="用户账号" name={'name'}/>
                            <input type="text" onChange={e=>this.handChange(e)} placeholder="真实姓名" name={'staffName'}/>
                            <div style={{float:'left',marginBottom:'15px',width:'100%',background: '#f2f2f2',lineHeight:'35px'}}>
                                <label style={{width:'60px'}}><input type="radio" name='staffSex' value="男" onChange={e=>this.handChange(e)} style={{width:'auto',margin:'0 10px 0 0',height:'auto'}}/>男</label>
                                <label style={{width:'60px'}}><input type="radio" name='staffSex' value="女" onChange={e => this.handChange(e)} style={{width:'auto',margin:'0 10px 0 0',height:'auto'}}/>女</label>
                            </div>
                            <label className={'date-label'}>生日</label><input style={{width:'70%'}} type={'date'} onChange={e=>this.handChange(e)} placeholder="生日" name={'staffBirthday'}/>
                            <input type={'text'} onChange={e=>this.handChange(e)} placeholder="手机号" name={'staffPhoneNumber'}/>
                            <input type={'text'} onChange={e=>this.handChange(e)} placeholder="学历" name={'staffEducation'}/>
                            <label className={'date-label'}>入职日期</label><input style={{width:'70%'}} type={'date'} onChange={e=>this.handChange(e)} placeholder="入职日期" name={'staffHiredate'}/>
                             <label className={'date-label'}>部门</label>
                            <select style={{width:'70%'}} value={'请选择'} onChange={e=>this.handChange(e)} name={'staffDepartment'}>
                                <option>11</option>
                                <option>22</option>
                            </select>

                            <label className={'date-label'}>职位</label><input style={{width:'70%'}} type={'text'} onChange={e=>this.handChange(e)} placeholder="职位" name={'staffPhoneNumber'}/>


                            <input type="password" onChange={e=>this.handChange(e)} placeholder="密码" name="password"/>
                            <input type="password" onChange={e=>this.handChange(e)} placeholder="再次输入密码" name="againPass"/>
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
