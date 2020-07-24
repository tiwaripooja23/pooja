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
function createData(avatar: any, creditor: string, status: any, balance: any, docs: number) {
    return { avatar, creditor, status, balance, docs };
}
const rows = [
    createData(null, 'Collections R Us', <span><FiberManualRecord className="fx-label-icon status-disabled" />Enrolled</span>, <span><AttachMoney className="" />2000</span>, 1),
    createData(<Avatar>K</Avatar>, 'Kohl’s', <span><FiberManualRecord className="fx-label-icon  status-warning" />Negotiating - Offer Sent</span>, <span><AttachMoney className="" />1000</span>, 2),
    createData(null, 'Best Buy', <span><FiberManualRecord className="fx-label-icon  status-warning" />Settled - Paying Down</span>, <span><AttachMoney className="" />4000</span>, 3),
    createData(<Avatar>AC</Avatar>, 'Acefighter Credit', <span><FiberManualRecord className="fx-label-icon  status-success" />Settled - Complete</span>, <span><AttachMoney className="" />2000</span>, 1),
    createData(<Avatar>CB</Avatar>, 'Chase Bank', <span><FiberManualRecord className="fx-label-icon  status-error" />Settled - Broken</span>, <span><AttachMoney className="" />3000</span>, 2),
    createData(<Avatar>GS</Avatar>, 'Goldman Sachs', <span><FiberManualRecord className="fx-label-icon  status-disabled" />Ineligible</span>, <span><AttachMoney className="" />1000</span>, 3),
];
export const FxDebtCard: React.FC = (props) => (

    <TableContainer component={Paper}>
        <Table className='fx-table-generic'>
            <TableHead className='fx-table-color-heading'>
                <TableRow>
                    <TableCell ><UserIcon /></TableCell>
                    <TableCell >Current Creditor</TableCell>
                    <TableCell >Status</TableCell>
                    <TableCell >Current Balance</TableCell>
                    <TableCell >Docs</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.avatar}>
                        <TableCell >
                            {row.avatar}
                        </TableCell>
                        <TableCell align="left">{row.creditor}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                        <TableCell align="left">{row.balance}</TableCell>
                        <TableCell align="left">{row.docs}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
