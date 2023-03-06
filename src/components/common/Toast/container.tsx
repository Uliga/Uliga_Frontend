import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import COLORS from "../../../constants/color";

const StyledContainer = styled(ToastContainer)`
  &&.Toastify__toast-container {
    padding: 0;
    width: auto;
    max-width: 575px;
    font-size: 1.4rem;
    height: 5rem;
    text-align: center;
  }
  .Toastify__toast {
    position: relative;
    padding: 0;
    min-height: 0;
    border-radius: 8px;
    /* background-color: ${COLORS.LIGHT_BLUE}; */
  }
  .Toastify__toast-body {
    padding: 1.2rem 2.2rem;
    margin: 0;
  }
`;

export default StyledContainer;
