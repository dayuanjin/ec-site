export const styles = {
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "600px",
    padding: "40px 125px 20px",
    textAlign: "center",
    backgroundColor: "#f7f6f5",
    border: "1px solid #f7f6f5",
    borderRadius: "10px",
  },
  image: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  login: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    width: "200px",
    borderRadius: "50px",
    "&.MuiButton-root:hover": {
      backgroundColor: "#4D4D4F",
    },
  },
  registration: {
    marginTop: "10px",
    color: "#333",
    "&.MuiButton-root:hover": {
      backgroundColor: "#f7f6f5",
    },
  },
} as const;
