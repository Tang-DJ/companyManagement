import React,{ Component }  from 'react';
import Header from '../components/header'
import Footer from "../components/footer";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
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

export class DepartmentList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    async componentDidMount(){
        axios.get('/department')
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
                            <h3>部门列表</h3>
                            <div className="services-top">

                                <BootstrapTable hover deleteRow={ true } selectRow={ selectRowProp } options={ options }  insertRow={ true }  search
                                                data={ this.state.products }
                                                pagination>
                                    <TableHeaderColumn dataField='departmentId' isKey={ true }>职位编号</TableHeaderColumn>
                                    <TableHeaderColumn dataField='departmentName'>职位</TableHeaderColumn>
                                    <TableHeaderColumn dataField='departmentInfo'>职位信息</TableHeaderColumn>
                                    <TableHeaderColumn dataField='createTime'>创建时间</TableHeaderColumn>
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
