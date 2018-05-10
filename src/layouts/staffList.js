import React,{ Component }  from 'react';
import Header from '../components/header'
import Footer from "../components/footer";
import Table from "../components/table";

export class StaffList extends Component{

    render(){

        return(

            <div>
                <Header/>
                <div className="services">
                    <div className="container">
                        <div className="services-main">
                            <h3>职员列表</h3>
                            <div className="services-top">
                                <Table/>

                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>

        );


    }

}
