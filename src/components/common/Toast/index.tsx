import { toast } from "react-toastify";

const toastMsg = (msg: string) =>
  toast(msg, {
    hideProgressBar: true,
    autoClose: 1000,
    draggable: false,
    theme: "light",
  });

export default toastMsg;
