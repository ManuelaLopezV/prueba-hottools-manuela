import Link from "next/link";
import { Typography, Button, Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        background:
          "linear-gradient(to bottom right,rgb(182, 243, 251),rgb(255, 230, 193),rgb(255, 220, 231))",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Prueba Manuela López
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          height: 300,
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          padding: 4,
        }}
      >
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Bienvenidos a mi prueba técnica
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 5, textAlign: "center" }}
          >
            Para continuar debes presionar el botón que dirige al inicio de
            sesión.
          </Typography>
        </Box>
        <Link href="/login">
          <Button
            fullWidth
            variant="contained"
            sx={{
              marginTop: 5,
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#ffe0b2",
              "&:hover": {
                backgroundColor: "#ffdce7",
              },
            }}
          >
            Comenzar
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
