import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Box
      padding={{ xs: "0px 10px", sm: "0px" }}
      sx={{ height: "60px", display: "flex", alignItems: "center" }}
    >
      <Button
        variant={"outlined"}
        onClick={() => {
          navigate("/");
        }}
        size={"small"}
        color={"inherit"}
      >
        Back home
      </Button>
    </Box>
  );
};

export default BackButton;
