import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
    const startId = products.length;
    for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
            id: id,
            name: 'Item name ' + id,
            price: 2100 + i
        });
    }
}

addProducts(70);

export class Table extends Component{

    constructor(props) {
        super(props);
    }
    render() {

        return (

            <div>
                <BootstrapTable  striped hover
                    data={ products }
                    pagination>
                    <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>

            </div>
        );
    }


}
export default Table;