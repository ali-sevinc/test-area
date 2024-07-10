import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  radius: string;
  $textColor: string;
  $bgColor: string;
  $fontSize: string;
  $boxShadow: string;
  $hoverColor: string;
  $hoverStyle: "slide" | "background" | "fill";
  $slideX: string;
  $slideY: string;
}

const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  color: ${(props) => props.$textColor};
  background-color: ${(props) => props.$bgColor};
  font-size: ${(props) => props.$fontSize};
  border-radius: ${(props) => props.radius};
  transition: all 0.3s;
  box-shadow: ${(props) => props.$boxShadow};
  position: relative;
  overflow: hidden;
  z-index: 10;

  ${(props) =>
    props.$hoverStyle === "fill" &&
    css`
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: ${props.$hoverColor};
        position: absolute;
        top: 0;
        left: -100%;
        transition: all 0.3s;
      }
    `}
  &:hover {
    ${(props) =>
      props.$hoverStyle === "slide" &&
      css`
        box-shadow: none;
        transform: translateX(${props.$slideX}) translateY(${props.$slideY});
      `}
    ${(props) =>
      props.$hoverStyle === "background" &&
      css`
        background-color: ${props.$hoverColor};
      `}
      ${(props) =>
      props.$hoverStyle === "fill" &&
      css`
        background-color: transparent;
      `}
  }
  &:hover::after {
    ${(props) =>
      props.$hoverStyle === "fill" &&
      css`
        transform: translateX(100%);
      `}
  }
`;

export default Button;
