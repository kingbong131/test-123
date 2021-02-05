import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import imgA from './1.jpg'
class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={imgA} alt="profile" /></TableCell>
                <TableCell>{this.props.local}</TableCell>
                <TableCell>{this.props.school}</TableCell>
                <TableCell>{this.props.name}</TableCell>
            </TableRow>
        )
    }

}

export default Customer;
