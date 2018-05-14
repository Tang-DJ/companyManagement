import React,{ Component } from 'react';
import ReactRouterDOM,{Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import 'react-bootstrap/dist/react-bootstrap';
import '../css/login.css'
import '../css/register.css'

export class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userAccount: '',
            staffName:'',
            staffSex:'',
            staffBirthday:'',
            staffPhoneNumber:'',
            staffEducation:'',
            staffHiredate:'',
            staffDepartment:'',
            staffPosition:'',
            password: '',
            againPass: '',
            departmentList:[],
            positionList:[],
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async componentDidMount(){

        axios.get('/department')
            .then(res => {
                this.setState({departmentList: this.state.departmentList.concat({})});
                this.setState({departmentList: this.state.departmentList.concat(res.data.result)});
            });
        axios.get('/position')
            .then(res => {
                this.setState({positionList: this.state.positionList.concat({})});
                this.setState({positionList: this.state.positionList.concat(res.data.result)});

            });
    }
    handChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();

        let data = {
            userAccount: this.state.userAccount,
            staffName:this.state.staffName,
            staffSex:parseInt(this.state.staffSex),
            staffBirthday:this.state.staffBirthday,
            staffPhoneNumber:this.state.staffPhoneNumber,
            staffEducation:this.state.staffEducation,
            staffHiredate:this.state.staffHiredate,
            departmentId:parseInt(this.state.staffDepartment),
            positionId:parseInt(this.state.staffPosition),
            password: this.state.password,
            roleId:1
        };
        fetch("/register", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function (response) {
            return response.json();
        }).then((data)=> {
            console.log(data);
            if (data.code === 200) {
                window.alert('注册成功,即将跳转登录页面！');
                this.setState({ redirect: true });
            } else {
                window.alert("输入错误！");
            }
        }).catch(function (err) {
            console.log(err)
        });
    }
    render(){
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to=''/>;
        }
        return(

            <div className="htmleaf-container">
                <div id="wrapper" className="login-page">
                    <div id="login_form" className="form">
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <input type="text" onChange={e=>this.handChange(e)} placeholder="用户账号" name={'userAccount'}/>
                            <input type="text" onChange={e=>this.handChange(e)} placeholder="真实姓名" name={'staffName'}/>
                            <div style={{float:'left',marginBottom:'15px',width:'100%',background: '#f2f2f2',lineHeight:'35px'}}>
                                <label style={{width:'60px'}}><input type="radio" name='staffSex' value="1" onChange={e=>this.handChange(e)} style={{width:'auto',margin:'0 10px 0 0',height:'auto'}}/>男</label>
                                <label style={{width:'60px'}}><input type="radio" name='staffSex' value="2" onChange={e => this.handChange(e)} style={{width:'auto',margin:'0 10px 0 0',height:'auto'}}/>女</label>
                            </div>
                            <label className={'date-label'}>生日</label><input style={{width:'70%'}} type={'date'} onChange={e=>this.handChange(e)} name={'staffBirthday'}/>
                            <input type={'text'} onChange={e=>this.handChange(e)} placeholder="手机号" name={'staffPhoneNumber'}/>
                            <input type={'text'} onChange={e=>this.handChange(e)} placeholder="学历" name={'staffEducation'}/>
                            <label className={'date-label'}>入职日期</label><input style={{width:'70%'}} type={'date'} onChange={e=>this.handChange(e)} name={'staffHiredate'}/>
                            <label className={'date-label'}>部门</label>
                            <select style={{width:'70%'}} onChange={e=>this.handChange(e)} name={'staffDepartment'}>
                                {this.state.departmentList.length > 0 && this.state.departmentList.map((item, i) => {
                                    return <option key={i} value={item.departmentId}>{item.departmentName}</option>
                                })}
                            </select>
                            <label className={'date-label'}>职位</label>
                            <select style={{width:'70%'}} onChange={e=>this.handChange(e)} name={'staffPosition'}>
                                {this.state.positionList.length > 0 && this.state.positionList.map((item, i) => {
                                    return <option key={i} value={item.positionId}>{item.positionName}</option>
                                })}
                            </select>

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
