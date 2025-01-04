import { toast } from 'react-toastify';
import styles from './Shop.module.scss';
import {Slide} from 'react-toastify';

export const showHeartToast = (message) => {
    toast.info(message, {
        newestOnTop: true,
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <span>💖</span>,
        theme: "dark",
        className: styles['my-custom-toast'],
        progressClassName: styles['my-custom-progress-bar'],
        transition: Slide,
    });
};

export const showCartToast = (message) => {
    toast.info(message, {
        newestOnTop: true,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <span>🛒</span>,
        theme: "dark",
        className: styles['my-custom-toast-cart'],
        progressClassName: styles['my-custom-progress-bar-cart'],
        transition: Slide,
    });
};