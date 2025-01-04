import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = ({ showScrollButton, onClick }) => (
    <IconButton
        onClick={onClick}
        style={{
            position: "fixed",
            zIndex: 1000,
            bottom: showScrollButton ? "20px" : "-50px",
            left: window.innerWidth <= 768 ? "auto" : "20px",
            right: window.innerWidth <= 768 ? "20px" : "auto",
            backgroundColor: "#00BFFF",
            padding: "10px",
            borderRadius: "50%",
            color: "white",
            transition: "opacity 0.5s ease-in-out, bottom 0.5s ease-in-out",
            opacity: showScrollButton ? 1 : 0,
        }}
    >
        <ArrowUpwardIcon />
    </IconButton>
);

export default ScrollToTopButton;
