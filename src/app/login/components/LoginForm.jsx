"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/users");
    } else {
      alert("Por favor completa todos los campos.");
    }
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
          maxWidth: 400,
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          padding: 4,
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: 3 }}>
          <AccountCircleIcon sx={{ color: "#ffe0b2", fontSize: 130 }} />
          <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
            Inicio de Sesión
          </Typography>
        </Box>
        <TextField
          fullWidth
          margin="normal"
          label="Usuario"
          variant="outlined"
          value={username}
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Contraseña"
          variant="outlined"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
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
          onClick={handleLogin}
        >
          Ingresar
        </Button>
      </Box>
    </Box>
  );
}
