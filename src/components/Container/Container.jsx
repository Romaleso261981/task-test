import PropTypes from "prop-types";
import styled from "./Container.module.Css";

function Container({ children }) {
  return <div className={styled.Container}>{children}</div>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.any,
};
