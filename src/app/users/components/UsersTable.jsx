"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { Edit, Delete, Logout } from "@mui/icons-material";

// Estilos personalizados para la tabla de usuarios
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "#f9f9f9",
  border: "1px solid #e0e0e0",
  marginTop: "15px",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "1px solid #e0e0e0",
}));

const HeaderTableCell = styled(StyledTableCell)(({ theme }) => ({
  backgroundColor: "#ffdce7",
  fontWeight: "bold",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#f4fbfc",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#ffffff",
  },
}));

const UsersTable = ({ users, deleteUser, editUser }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          ml: 5,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            mt: 3,
            mb: 2,
            textAlign: "center",
            [theme.breakpoints.up("xl")]: { mt: 5, mb: 4 },
          }}
        >
          Tabla de Mascotas
        </Typography>
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <HeaderTableCell>Nombre</HeaderTableCell>
                <HeaderTableCell>Especie</HeaderTableCell>
                <HeaderTableCell>Correo Electrónico</HeaderTableCell>
                <HeaderTableCell>Edad</HeaderTableCell>
                <HeaderTableCell>Acciones</HeaderTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{user.name}</StyledTableCell>
                  <StyledTableCell>{user.lastname}</StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                  <StyledTableCell>{user.age} años</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      onClick={() => editUser(index)}
                      color="primary"
                      startIcon={<Edit />}
                    ></Button>
                    <Button
                      onClick={() => deleteUser(index)}
                      color="error"
                      startIcon={<Delete />}
                    ></Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </Box>
    </Box>
  );
};

export { UsersTable };
