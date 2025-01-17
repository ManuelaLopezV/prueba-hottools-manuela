import { Logout } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  // Función para cerrar sesión
  const logout = () => {
    localStorage.clear(); // Elimina todos los datos de localStorage
    router.push("/login"); // Redirige a la página de login
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "#ffe0b2",
        width: "6%",
        height: "8%",
        borderRadius: "12px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        right: 0,
      }}
    >
      <Toolbar>
        <IconButton onClick={logout}>
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
