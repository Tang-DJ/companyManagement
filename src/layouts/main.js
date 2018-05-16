import React,{ Component }  from 'react';
import Header from '../components/header'
import Footer from "../components/footer";
import bgimg from '../images/bnr-rgt.jpg';

export class Main extends Component{

    render(){
        return(

            <div>
                <Header/>

                <div className="banner" style={{marginTop:'-45px'}}>
                    <div className="container">
                        <div className="banner-mian">
                            <div className="banner-top">
                                <h1>公司人事管理系统，为公司管理带来方便</h1>
                            </div>
                            <div className="banner-bottom">
                                <div className="banner-left">
                                    <div className="b-left">
                                        <p><span>1</span>我们<label>帮助</label>管理人事</p>
                                        <p><span>2</span>我们<label>提供</label>清晰可靠的资源</p>
                                        <p><span>3</span>我们<label>竭诚</label>服务公司</p>
                                    </div>
                                    <div className="tool">
                                        <a className="tooltips" href="">
                                            <span>更多可能</span></a>
                                    </div>
                                </div>
                                <div className="banner-right">
                                    <img src={bgimg} alt=""/>
                                    <span></span>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );

    }

}