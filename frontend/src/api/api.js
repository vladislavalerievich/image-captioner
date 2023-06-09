import {toast} from "react-toastify";
import axiosInstance from "./axiosInstance";

export const submitData = (data) => axiosInstance
    .post("predict", data)
    .then(response => response.data)
    .catch(error => {
        console.error(error);
        toast.error("Something went wrong while submitting data!");
    });