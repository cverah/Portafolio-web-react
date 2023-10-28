import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Section_Padding_Sm = styled.div`
  padding: 32px 0;
`;

const SectionPaddingSm = ({ children, background }) => {
  return (
    <Section_Padding_Sm className={background}>{children}</Section_Padding_Sm>
  );
};

SectionPaddingSm.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};

export default SectionPaddingSm;
