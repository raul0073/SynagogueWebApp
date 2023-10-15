import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './../../toast.scss';

const useAlertToast = () => {
  const showToastMessage = (text) => {
    toast.info(text, {
      position: toast.POSITION.TOP_RIGHT,
      className: 'toast'
    });
  };

  const ToastContainerComponent = <ToastContainer />;

  return {
    showToastMessage,
    ToastContainer: ToastContainerComponent,
  };
};

export default useAlertToast;
