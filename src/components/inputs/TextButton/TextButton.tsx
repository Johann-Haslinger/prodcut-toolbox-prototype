import { motion, MotionProps } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ButtonColor } from "../../../types/enums";

const ButtonWrapper = tw.div`relative select-none`;

const InnerCircleWrapper = styled(motion.div)(tw`flex flex-col items-center`);
const InnerCircle1 = styled(motion.div)<{ color: string }>`
  ${tw`absolute px-8 max-w-48 min-w-28 whitespace-nowrap truncate font-bold text-lg bottom-[-16px] h-16 border-[3px] border-black rounded-full`}
  background-color: ${({ color }) => color};
`;
const InnerCircle2 = styled(motion.button)<{ color: string }>`
  ${tw`absolute font-bold text-lg px-8 max-w-48 min-w-28 whitespace-nowrap truncate outline-none flex justify-center items-center text-black h-16 border-[3px] border-black rounded-full cursor-[url(/assets/images/cursor-default.png), auto]`}
  background-color: ${({ color }) => color};
`;

const BOTTOM_POSITIONS = {
  initial: "0px",
  hover: "8px",
  focus: "8px",
  tap: "-6px",
};

export type CombinedProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> &
  MotionProps & {
    children?: React.ReactNode;
  };

export interface ButtonProps extends CombinedProps {
  color?: ButtonColor;
  className?: string;
}

export const TextButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color = ButtonColor.BLUE, children, ...props }, ref) => {
    const playSound = (soundUrl: string) => {
      const audio = new Audio(soundUrl);
      audio.play();
    };

    const handleTapStart = () => playSound("/assets/sounds/tap-start.mp3");
    const handleTapEnd = () => playSound("/assets/sounds/tap-end.mp3");

    return (
      <ButtonWrapper className={className} ref={ref} {...props}>
        <InnerCircleWrapper>
          <InnerCircle1 color={color} tabIndex={-1}>
            {children}
          </InnerCircle1>
          <InnerCircle2
            tabIndex={0}
            color={color}
            initial={{ bottom: BOTTOM_POSITIONS.initial }}
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ bottom: BOTTOM_POSITIONS.hover }}
            whileFocus={{ bottom: BOTTOM_POSITIONS.focus }}
            whileTap={{
              bottom: BOTTOM_POSITIONS.tap,
              cursor: "url(/assets/images/cursor-grabbing.png), auto",
              transition: { type: "spring", stiffness: 100, damping: 15 },
            }}
            
            onPointerDown={handleTapStart}
            onPointerUp={handleTapEnd}
          >
            {children}
          </InnerCircle2>
        </InnerCircleWrapper>
      </ButtonWrapper>
    );
  }
);

export default TextButton;
