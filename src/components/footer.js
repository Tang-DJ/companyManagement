import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';


export class Footer extends Component{

    render(){

        return(
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="footer-top">
                            <div className="col-md-3 footer-top-left ftr-one" style={{float:'left',paddingTop:'20px'}}>
                                <ul>
                                    <li><a href={'#'}>Home</a></li>
                                    <li><a href={'#'}>Services</a>  </li>
                                    <li><a href={'#'}>Pricing</a></li>
                                    <li><a href={'#'}>Business Plans</a></li>
                                    <li><a href={'#'}>About</a></li>
                                    <li><a href={'#'}>Contact</a></li>
                                    <li><a href={'#'}>Online Backup</a></li>
                                    <li><a href={'#'}>Student Plans</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-top-left ftr-two" style={{float:'left',paddingTop:'20px'}}>
                                <ul>
                                    <li><a href={'#'}>Privacy Policy</a></li>
                                    <li><a href={'#'}>Terms of Use</a></li>
                                    <li><a href={'#'}>Disclaimer</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-top-left ftr-tre" style={{float:'left',paddingTop:'20px'}}>
                                <ul>
                                    <li><a href={'#'}>Facebook</a></li>
                                    <li><a href={'#'}>Twitter</a></li>
                                    <li><a href={'#'}>You Tube</a></li>
                                    <li><a href={'#'}>Our Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-top-left" style={{float:'left',paddingTop:'20px'}}>
                                <p>000.123.4567</p>
                                <a>info@antivirus.com</a>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className = "footer-bottom" >
                    <div className = "container" >
                         <div className = "footer-text" >
                            <p> Copyright & copy; 2015.Company nameAll rights reserved.</p>
                        </div>
                    </div>

                    {/*<a id="toTop" className="scroll" style="display: block;">*/}
                        {/*<span id="toTopHover" style="opacity: 1;"> </span></a>*/}
                </div>

             </div>

        );

    }


}

export default Footer;