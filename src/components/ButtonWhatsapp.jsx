import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import styled from "@emotion/styled";

const StyleButtonWhatsapp = styled(FaWhatsappSquare)`
  line-height: 80px;
  color: green;
  position: fixed;
  bottom: 20px;
  right: 10px;
  font-size: 70px;
  background-color: white;
  background-size: 1px;
  border-radius: 10px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonWhatsapp = () => {
  return (
    <Link to="https://api.whatsapp.com/send?phone=928646027" target="_blank">
      <StyleButtonWhatsapp />
    </Link>
  );
};

export default ButtonWhatsapp;
