"use client";
import { useEffect, useState } from "react";
import { UsersForm } from "./UsersForm";
import { UsersTable } from "./UsersTable";
import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "@/components/Header";

const UsersManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    age: "",
  });
  const [editingUserIndex, setEditingUserIndex] = useState(null);
  const theme = useTheme(); // Para poder modificar estilos en diferentes breakpoints

  // Carga los datos desde localStorage y mock de usuarios al iniciar
  useEffect(() => {
    debugger;
    const loggedUser = localStorage.getItem("isLoggedIn");
    if (!loggedUser) {
      window.location.href = "/login"; // Redirige si no está logueado
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.length > 0) {
      setUsers(storedUsers);
    } else {
      // Mock de usuarios inicial
      const mockUsers = [
        {
          name: "Luna",
          lastname: "Perro",
          email: "andres88@gmail.com",
          age: 2,
        },
        {
          name: "Pelusa",
          lastname: "Gato",
          email: "marce-restrepo@gmail.com",
          age: 4,
        },
      ];
      setUsers(mockUsers);
      localStorage.setItem("users", JSON.stringify(mockUsers));
    }
  }, []);

  // Guarda los datos en localStorage cuando cambien los usuarios
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Para agregar un nuevo usuario
  const addUser = () => {
    if (newUser.name && newUser.lastname && newUser.email && newUser.age) {
      setUsers([...users, newUser]);
      setNewUser({ name: "", lastname: "", email: "", age: "" }); // Resetea el formulario
    } else {
      alert("Debes completar todos los campos para continuar.");
    }
  };

  // Editar un usuario ya creado
  const editUser = (index) => {
    setEditingUserIndex(index); // Para establecer el índice del usuario a editar
    setNewUser(users[index]); // Carga los datos del usuario seleccionado en el formulario
  };

  // Guarda los cambios del usuario editado
  const saveUser = () => {
    if (newUser.name && newUser.lastname && newUser.email && newUser.age) {
      const updatedUsers = [...users];
      updatedUsers[editingUserIndex] = newUser;
      setUsers(updatedUsers);
      setEditingUserIndex(null); // Salir del modo edición
      setNewUser({ name: "", lastname: "", email: "", age: "" }); // Resetea el formulario
    } else {
      alert("Debes completar todos los campos para continuar.");
    }
  };

  // Elimina un usuario seleccionado
  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to bottom right,rgb(182, 243, 251),rgb(255, 230, 193),rgb(255, 220, 231))",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          padding: 4,
        }}
      >
        {/* Barra superior con el botón de Cerrar sesión */}
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Header />
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "center",
              [theme.breakpoints.up("xl")]: { mt: 8 },
            }}
          >
            Gestión de Happy Pets 🐶
          </Typography>
          <Box sx={{ display: "flex" }}>
            <UsersForm
              addUser={addUser}
              saveUser={saveUser}
              newUser={newUser}
              setNewUser={setNewUser}
              editingUserIndex={editingUserIndex}
            />
            <UsersTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { UsersManagement };
