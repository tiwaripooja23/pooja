import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { FiberManualRecord, AttachMoney, Add } from '@material-ui/icons';
import { ReactComponent as UserIcon } from '../../../assets/svg/user.svg';
import { FxButton } from '../../Action/FxButton';
function createData( creditor: string, status: any) {
    return {  creditor, status,  };
}
const rows = [
    createData( 'City Bank', <span><FiberManualRecord className="fx-label-icon status-disabled" />Enrolled</span>),
];
export const FxExtAccountCard: React.FC = (props) => (

    <TableContainer component={Paper}>
        <Table className='fx-table-generic'>
            <TableHead className='fx-table-color-heading'>
                <TableRow>
                    <TableCell >Bank Name</TableCell>
                    <TableCell >Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow >
                       <TableCell align="left">{row.creditor}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
