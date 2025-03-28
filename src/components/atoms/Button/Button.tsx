import { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "small" | "medium" | "large";
  tooltip?: string;
  disabled?: boolean;
  className?: string;
}

const buttonVariants = {
  primary: tw`bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700`,
  secondary: tw`bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400`,
  outline: tw`border-2 border-gray-500 text-gray-500 hover:bg-gray-200 active:bg-gray-300`,
  danger: tw`bg-red-500 text-white hover:bg-red-600 active:bg-red-700`,
};

const buttonSizes = {
  small: tw`px-3 py-1 text-sm`,
  medium: tw`px-4 py-2 text-base`,
  large: tw`px-6 py-3 text-lg`,
};

const Tooltip = styled.div`
  ${tw`absolute bg-black text-white text-sm p-2 rounded opacity-0 transition-opacity duration-300`};
  z-index: 10;
  visibility: hidden;
`;

const ButtonStyled = styled.button<ButtonProps>`
  ${tw`relative inline-flex items-center justify-center rounded focus:outline-none transition-all duration-300`};
  ${(props) => buttonVariants[props.variant || "primary"]};
  ${(props) => buttonSizes[props.size || "medium"]};

  &:hover {
    ${tw`cursor-pointer`}
  }

  &:disabled {
    ${tw`bg-gray-400 text-gray-500 cursor-not-allowed`}
  }

  &:focus {
    ${tw`ring-2 ring-blue-400`}
  }

  &:hover ${Tooltip} {
    ${tw`opacity-100`}
  }
`;

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  tooltip,
  disabled = false,
  className,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <ButtonStyled
        onClick={onClick}
        variant={variant}
        size={size}
        disabled={disabled}
        className={className}
        aria-label={tooltip}
      >
        {children}
        {tooltip && isTooltipVisible && <Tooltip>{tooltip}</Tooltip>}
      </ButtonStyled>
    </div>
  );
};

export default Button;
