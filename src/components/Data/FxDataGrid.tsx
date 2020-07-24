import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { Paper, TablePagination, NativeSelect, Typography } from "@material-ui/core";
import { FxButton } from "../Action/FxButton";
import { typography } from "@material-ui/system";
import { FxProgressbar } from "../Input/FxProgress/FxProgress";


interface Data {
  id: number;
  name: string;
  stage: string;
  progress: number;
  modified: string;
  source: string;
}

function createData(
  id: number,
  name: string,
  stage: string,
  progress: number,
  modified: string,
  source: string
): Data {
  return { id, name, stage, progress, modified, source };
}
const rows = [
  createData(10,
    "Arjun Modak",
    "Open - Not Contacted",
    60,
    "a minute ago",
    "Google Ad 6436436"
  ),
  createData(11,
    "Claudia Gomez",
    "Open - Not Contacted",
    50,
    "a minute ago",
    "Homepage Form 1.3"
  ),
  createData(12,
    "John Rittenhouse",
    "Converted",
    100,
    "a minute ago",
    "Homepage Form 1.3"
  ),
  createData(13,
    "Eduardo Gracia",
    "Open - Not Contacted",
    0,
    "a minute ago",
    "Google Ad 6436436"
  ),
  createData(14,
    "Amy Cassam",
    "Open - Not Contacted",
    10,
    "a minute ago",
    "Homepage Form 1.3"
  ),
  createData(141, "Rita Chen", "Converted", 40, "a minute ago", "Homepage Form 1.3"),
  createData(15,
    "Arjun Modak",
    "Open - Not Contacted",
    60,
    "a minute ago",
    "Google Ad 6436436"
  ),
  createData(16,
    "Claudia Gomez",
    "Open - Not Contacted",
    50,
    "a minute ago",
    "Homepage Form 1.3"
  ),
  createData(17,
    "John Rittenhouse",
    "Converted",
    50,
    "a minute ago",
    "Homepage Form 1.3"
  ),
  createData(18,
    "Eduardo Gracia",
    "Open - Not Contacted",
    40,
    "a minute ago",
    "Google Ad 6436436"
  ),
  createData(19,
    "Amy Cassam",
    "Open - Not Contacted",
    50,
    "a minute ago",
    "Homepage Form 1.3"
  ),
  createData(20, "Rita Chen", "Converted", 40, "a minute ago", "Homepage Form 1.3"),

];

/*sort and order relatyed function */
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

/*sort functions ends here*/

/*Table headers*/
interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}
const headCells: HeadCell[] = [
  { id: "name", numeric: false, label: "Name" },
  { id: "stage", numeric: false, label: "Stage" },
  { id: "modified", numeric: false, label: "Modified" },
  { id: "source", numeric: false, label: "Source" },
];



interface FxTableHeadProps {
  onRequestSort?: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order?: "asc" | "desc",
  orderBy?: string,
  rowCount?: number
};

export const FxTableHead: React.FC<FxTableHeadProps> =
  ({ order, orderBy, onRequestSort, onSelectAllClick, rowCount }) => {
    let createSortHandler: any;
    if (onRequestSort) {
      createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };
    }

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
          </TableCell>
          <TableCell padding="checkbox">
            <Checkbox
              onChange={onSelectAllClick && onSelectAllClick}
              inputProps={{ "aria-label": "select all desserts" }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler && createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }


export const FxDataGrid: React.FC =
  () => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('id');
    const [selected, setSelected] = React.useState<number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    /* Events */
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.id);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected: number[] = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    /* Events  end here */
    const resultsPerPage = [10, 20, 50];

    return (
      <div >
        <Paper >
          <TableContainer>
            <Table
              className="fx-table-generic"
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
            >
              <FxTableHead
                order="asc"
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    const isItemSelected = isSelected(row.id);
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        onClick={(event) => handleClick(event, row.id)}
                      >
                        <TableCell
                          component="td"
                          id={labelId}
                          scope="row"
                          padding="none"
                          align="center"
                        >
                          <Avatar>ND</Avatar>
                        </TableCell>
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} inputProps={{ "aria-labelledby": labelId }} />
                        </TableCell>
                        <TableCell
                          component="td"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="left">
                        <FxProgressbar progress={row.progress} type="determinate" className = "fx-progress" text ={row.stage} />
                          
                        </TableCell>
                        <TableCell align="left">{row.modified}</TableCell>
                        <TableCell align="left">{row.source}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
            <table className="fx-table-pagination">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <NativeSelect id="select" className="fx-select fx-button fx-button-grey">
                      <option value="10">10 Records per Page</option>
                      <option value="20">20 Records per Page</option>
                      <option value="20">50 Records per Page</option>
                    </NativeSelect>
                  </TableCell>
                  <TableCell align="right" >
                    <Typography className="fx-display-inline">
                      <label>{page * rowsPerPage + 1}-{page * rowsPerPage + rowsPerPage} of {rows.length} &nbsp;&nbsp; </label>
                      <FxButton id="btn-loadmore" className="fx-button fx-button-grey" >Load More</FxButton>
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </table>
          </TableContainer>
        </Paper >
      </div >
    );
  }
