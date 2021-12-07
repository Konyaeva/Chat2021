import { makeStyles } from "@mui/styles";

// jss
export const useStyles = makeStyles((ctx) => {
  return {
    input: {
      color: ctx.palette.primary.main,
      padding: "10px 15px",
      fontSize: "15px",
    },
    icon: {
      color: ctx.palette.primary.main,
    },
  };
});
