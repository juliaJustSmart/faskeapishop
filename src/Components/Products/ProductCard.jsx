import { useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { showHeartToast, showCartToast } from "../Style/Toast";

const ProductCard = ({ product, onLikeChange, onCartChange }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    const toggleLike = () => {
        setIsLiked((prev) => {
            const newState = !prev;
            onLikeChange(newState);
            if (newState) {
                showHeartToast("Додано до улюблених");
            } else {
                showHeartToast("Видалено з улюблених");
            }
            return newState;
        });
    };
    const toggleCart = () => {
        setIsInCart((prev) => {
            const newState = !prev;
            onCartChange(newState);
            if (newState) {
                showCartToast("Додано до корзини");
            } else {
                showCartToast("Видалено з корзини");
            }
            return newState;
        });
    };
    return (
        <Card
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow : "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
            }}
        >
            <IconButton
                onClick={toggleLike}
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    color: isLiked ? "red" : "rgba(255, 0, 0, 0.5)",
                }}
            >
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <CardMedia
                component="img"
                alt={product.title}
                height="200"
                image={product.image}
                style={{ objectFit: "contain", padding: "1rem" }}
            />
            <CardContent
                style={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    variant="h6"
                    gutterBottom
                    style={{ textAlign: "center", fontWeight: "bold" }}
                >
                    {product.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ textAlign: "center", marginBottom: "1rem" }}
                >
                    {product.description.substring(0, 100)}...
                </Typography>
                <Typography
                    variant="h5"
                    color="primary"
                    style={{
                        textAlign: "center",
                        marginTop: "auto",
                        fontWeight: "bold",
                    }}
                >
                    ${product.price.toFixed(2)}
                </Typography>
            </CardContent>
            <Button
                variant="contained"
                color="primary"
                onClick={toggleCart}
                style={{
                    margin: "1rem",
                    borderRadius: "20px",
                }}
            >
                {isInCart ? "Видалити з корзини" : "Додати до корзини"}
            </Button>
        </Card>
    );
};

export default ProductCard;
