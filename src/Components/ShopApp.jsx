import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Typography, TextField} from "@mui/material";
import ProductCard from "./Products/ProductCard";
import { ToastContainer } from "react-toastify";
import Spinner from "./Style/Spinner";
import ScrollToTopButton from "./Style/ScrollToTopButton";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";

const ShopApp = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [likedCount, setLikedCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLikeChange = (isLiked) => {
        setLikedCount((prev) => (isLiked ? prev + 1 : prev - 1));
    };

    const handleCartChange = (isAdded) => {
        setCartCount((prev) => (isAdded ? prev + 1 : prev - 1));
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <div style={{backgroundColor: 'rgba(8,50,87,0.27)'}}>
            <ToastContainer/>
            <Header likedCount={likedCount} cartCount={cartCount} />
            <ScrollToTopButton showScrollButton={showScrollButton} onClick={scrollToTop} />
            <Container className="py-4">
                <Row className="mb-4 justify-content-center">
                    <Col xs={10} md={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Пошук..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            sx={{
                                backgroundColor: "white",
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: "white",
                                    borderRadius: '20px',
                                },
                            }}
                        />

                    </Col>
                </Row>
                <Row>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Col
                                key={product.id}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                className="mb-4"
                            >
                                <ProductCard
                                    product={product}
                                    onLikeChange={handleLikeChange}
                                    onCartChange={handleCartChange}
                                />
                            </Col>
                        ))
                    ) : (
                        <Typography variant="h6" align="center" className="mt-4">
                            Немає таких значень
                        </Typography>
                    )}
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ShopApp;
