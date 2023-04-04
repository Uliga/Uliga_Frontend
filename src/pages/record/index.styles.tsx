import styled from "styled-components";
import COLORS from "../../constants/color";

const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  display: flex;
  color: ${COLORS.GREY[600]};
  gap: 1.5rem;
  padding: 4rem;
  flex-direction: column;
  height: 64rem;
`;

export default Container;
