import styled from "styled-components";

export const Switcher = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled.input`
  opacity: 0;

  &:checked + label > span {
    transform: translateX(28px);
  }
`;

export const FlagSvg = styled.svg``;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 28px;
  background-color: Gray;
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
    fill: black;
  }

  & svg:first-of-type {
    margin-left: 5px;
    padding-right: 2px;
  }

  & svg:last-of-type {
    margin-right: 3px;
  }
`;

export const Ball = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
