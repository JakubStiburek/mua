import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.miaWhite};
  text-decoration: none;
`