import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Button, TableHead } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { BsTrashFill } from "react-icons/bs";
import { useDeleteAccount } from "../../../hooks/mutations";
import { useGetUsers } from "../../../hooks/queries";
import { UserDetails, UserRoleId } from "../../../types/user";
import { useState } from "react";
import Modal from "../Modal/Modal";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function CustomTable() {
  const [page, setPage] = React.useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [userId, setUserId] = useState(-1);
  const { data, refetch } = useGetUsers();
  const { mutate: deleteAccount } = useDeleteAccount({
    handleSuccess,
    handleError,
  });

  function handleSuccess() {
    handleToggleModal();
    refetch();
  }

  function handleError(error: any) {
    console.log(error);
  }

  let rows: UserDetails[] = [];
  if (data) {
    rows = data.data.data.map((user: any) => ({
      userId: user.userId,
      userName: user.userName,
      rollNo: user.rollNo,
      userClass: user.userClass,
      isActive: user.isActive,
      // userRole: user.userRole.userRoleName,
      userRole: user.userRoleId,
    }));
  }

  const renderUserRole = (userRoleId: number) => {
    switch(userRoleId){
      case UserRoleId.ADMIN:
        return 'admin'
      case UserRoleId.STUDENT:
        return 'student'
      case UserRoleId.STAFF: 
        return 'staff'
    }
  }
  const emptyRows =
    rows && page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleToggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  interface Column {
    id:
      | "userId"
      | "userName"
      | "rollNo"
      | "userClass"
      | "isActive"
      | "actions";
    label: string;
    minWidth?: number;
  }

  const columns: readonly Column[] = [
    { id: "userId", label: "User Id" },
    { id: "userName", label: "Name" },
    {
      id: "rollNo",
      label: "Roll No",
      minWidth: 170,
    },
    {
      id: "userClass",
      label: "Class",
      minWidth: 170,
    },
    {
      id: "isActive",
      label: "Active",
      minWidth: 170,
    },
    {
      id: "actions",
      label: "Actions",
      minWidth: 170,
    },
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row: UserDetails) => (
              <>
                <TableRow hover key={row.userId}>
                  <TableCell component="th" scope="row">
                    {row.userId}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.userName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.rollNo}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.userClass}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.isActive ? 'Yes' : 'No'}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Button
                      variant="text"
                      color="blue"
                      onClick={() => {
                        handleToggleModal()
                        setUserId(row.userId);
                      }}
                    >
                      <BsTrashFill />
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Modal
        dialogContentText="Are you sure to remove this account?"
        dialogTitle="Remove account confirmation"
        handleAction={() => {
          deleteAccount(userId)
        }}
        handleClose={() => handleToggleModal()}
        open={openModal}
      />
    </>
  );
}
