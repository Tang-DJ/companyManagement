import React,{ Component }  from 'react';
import Header from '../components/header'
import Footer from "../components/footer";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


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

export class StaffList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    async componentDidMount(){
        fetch("/users", {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        }).then(function(response) {
            return response.json();
        }).then((data) =>{
            console.log(data);
            if(data.code === 200){
                console.log(data.result);
                this.setState({products: data.result});
                // products=data.result;
            }
        }).catch(function(err) {
            console.log(err);
        });
    }
    render(){

        return(

            <div>
                <Header/>
                <div className="services">
                    <div className="container">
                        <div className="services-main">
                            <h3>职员列表</h3>
                            <div className="services-top">
                                <BootstrapTable hover deleteRow={ true } selectRow={ selectRowProp } options={ options }  insertRow={ true }  search
                                                data={ this.state.products }
                                                pagination>
                                    <TableHeaderColumn dataField='userId' isKey={ true }>用户编号</TableHeaderColumn>
                                    <TableHeaderColumn dataField='userAccount'>用户账户</TableHeaderColumn>
                                    <TableHeaderColumn dataField='password'>用户密码</TableHeaderColumn>
                                    <TableHeaderColumn dataField='roleId'>用户角色</TableHeaderColumn>
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
