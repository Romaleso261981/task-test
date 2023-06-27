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
    transform: translateX(30px);
  }
`;


export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
  gap: 10px;
  height: 28px;
  background-color: Gray;
  cursor: pointer;

  & svg {
    width: 16px;
    height: 16px;
    fill: #fff;
  }

  & svg:first-of-type {
    margin-left: 3px;
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
