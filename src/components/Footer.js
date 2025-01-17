import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f8f8f8",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 Prueba Manuela López. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
