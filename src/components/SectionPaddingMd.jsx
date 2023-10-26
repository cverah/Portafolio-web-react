import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Section_Padding_Md = styled.div`
  padding: 48px 0;
`;

const SectionPaddingMd = ({ children, background }) => {
  return (
    <Section_Padding_Md className={background}>{children}</Section_Padding_Md>
  );
};

SectionPaddingMd.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};

export default SectionPaddingMd;
