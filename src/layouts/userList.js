import React,{ Component }  from 'react';
import Header from '../components/header'
import Footer from "../components/footer";
import {BootstrapTable, TableHeaderColumn,InsertButton} from 'react-bootstrap-table';
import axios from "axios/index";


const selectRowProp = {
    mode: 'checkbox',
    bgColor: '#E0FFFF'
};
function customConfirm(next, dropRowKeys) {
    const dropRowKeysStr = dropRowKeys.join(',');
    if (window.confirm(`(It's a custom confirm)Are you sure you want to delete ${dropRowKeysStr}?`)) {
        next();
    }
}

const options = {
    insertText: '新增',
    deleteText: '删除',
    saveText: '保存',
    closeText: '关闭',
    handleConfirmDeleteRow: customConfirm
};

export class UserList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

    }
    async componentDidMount(){
        axios.get('/users')
            .then(res => {
                this.setState({products: res.data.result});
            });
    }

    render(){

        return(

            <div>
                <Header/>
                <div className="services">
                    <div className="container">
                        <div className="services-main">
                            <h3>用户列表</h3>
                            <div className="services-top">
                                <BootstrapTable hover deleteRow={ true } selectRow={ selectRowProp } options={ options }  insertRow={ true }  search
                                                data={ this.state.products }
                                                pagination>
                                    <TableHeaderColumn dataField='userId' isKey={ true }>用户编号</TableHeaderColumn>
                                    <TableHeaderColumn dataField='userAccount'>用户账户</TableHeaderColumn>
                                    <TableHeaderColumn dataField='password'>用户密码</TableHeaderColumn>
                                </BootstrapTable>

                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>

        );


    }

}
