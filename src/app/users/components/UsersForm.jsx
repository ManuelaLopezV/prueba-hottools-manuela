import { Box, Button, TextField, Typography, useTheme } from "@mui/material";

const UsersForm = ({
  newUser,
  setNewUser,
  addUser,
  saveUser,
  editingUserIndex,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ml: 5,
      }}
    >
      {/* Formulario para agregar o editar usuario */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          mt: 3,
          mb: 2,
          textAlign: "center",
          [theme.breakpoints.up("xl")]: { mt: 5, mb: 5 },
        }}
      >
        Agregar Mascotas
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          placeholder="Nombre"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          margin="dense"
          size="small"
        />
        <TextField
          placeholder="Especie"
          value={newUser.lastname}
          onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
          margin="dense"
          size="small"
        />
        <TextField
          placeholder="Correo Electrónico"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          margin="dense"
          size="small"
        />
        <TextField
          placeholder="Edad"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
          margin="dense"
          size="small"
        />
        {editingUserIndex !== null ? (
          <Button
            onClick={saveUser}
            fullWidth
            variant="contained"
            color="#ffe0b2"
            sx={{
              marginTop: 3,
              fontWeight: "bold",
              backgroundColor: "#ffe0b2",
              "&:hover": {
                backgroundColor: "#ffdce7",
              },
            }}
          >
            Guardar Cambios
          </Button>
        ) : (
          <Button
            onClick={addUser}
            fullWidth
            variant="contained"
            color="#ffe0b2"
            sx={{
              marginTop: 3,
              fontWeight: "bold",
              backgroundColor: "#ffe0b2",
              "&:hover": {
                backgroundColor: "#ffdce7",
              },
            }}
          >
            Agregar Mascota
          </Button>
        )}
      </Box>
    </Box>
  );
};

export { UsersForm };
