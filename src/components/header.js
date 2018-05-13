import React,{ Component }  from 'react';
import ReactRouterDOM,{BrowserRouter,Link,NavLink} from 'react-router-dom';
import '../css/style.css';


export class Header extends Component{


    render(){
        return(

            <div className="header" id="home">
                <div className="container">
                    <div className="header-mian">
                        <div className="head">
                            <div className="logo">
                                <Link to={'main'}><img src="images/logo.png" alt="" /></Link>
                            </div>
                            <div className="call">
                                <ul>
                                    <li><p>CALL 000.123.4567</p></li>
                                    <li><p className="msg"><a href="#"><img src="images/msg.png" alt=""/></a></p></li>
                                </ul>
                            </div>
                            <div className="clearfix">
                            </div>
                        </div>
                        <div className="navigation">
                            <div className="nav-shadow">
                                <span className="menu"></span>
                                <ul className="navig">
                                    <li><NavLink exact to='/main' activeClassName="active">首页</NavLink></li>
                                    <li><NavLink exact to='/staffList' activeClassName="active">职员列表</NavLink></li>
                                    <li><NavLink exact to='/positionList'  activeClassName="active">职位列表</NavLink></li>
                                    <li><NavLink exact to='/departmentList' activeClassName="active">部门列表</NavLink></li>
                                    <li><NavLink exact to='/roleList' activeClassName="active">角色列表</NavLink></li>
                                    <li><NavLink exact to='/' >退出登录</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           /* <script>
            $("span.menu").click(function(){
                $(" ul.navig").slideToggle("slow" , function(){
                });
            });
            </script>*/





        );
    }

}
export default Header;