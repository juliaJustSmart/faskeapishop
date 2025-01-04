import { IconButton, Badge, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = ({ likedCount, cartCount }) => (
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
        backgroundColor: 'rgba(1,11,17,0.93)',
        color: 'white',
        width: "100%",
        padding: "30px"
    }}>
        <IconButton>
            <Badge badgeContent={likedCount} color="error">
                <FavoriteIcon style={{ fontSize: "2rem", color: "red" }} />
            </Badge>
        </IconButton>
        <span style={{display:'flex', color: 'grey'}}>
            <small>ne</small>
            <Typography variant="h5" style={{ marginTop: '20px',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 'bold',
                fontSize: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#00BFFF',
                textShadow: '0 0 10px rgba(0, 191, 255, 0.7)'
            }}>
            Rozetka Shop
            </Typography>
        </span>
        <IconButton>
            <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartIcon style={{
                    fontSize: "2rem",
                    color: "#4941ff"
                }} />
            </Badge>
        </IconButton>
    </div>
);

export default Header;
