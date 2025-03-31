import { motion, MotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import styled from "styled-components";
import tw from "twin.macro";
import { ButtonColor } from "../../../../types/enums";

const ButtonWrapper = tw.div`relative w-28 h-[136px]`;
const OuterCircleWrapper = tw.div``;
const OuterCircle1 = tw.div`absolute bottom-0 w-28 h-24 border-[3px] border-black rounded-[50%] bg-white dark:bg-[#1A2D3C]`;
const OuterCircle2 = tw.div`absolute bottom-4 w-28 h-24 border-[3px] border-black rounded-[50%] bg-white dark:bg-[#1A2D3C]`;

const InnerCircleWrapper = styled(motion.div)(tw`flex cursor-[url(/assets/images/cursor-default.png), auto] active:cursor-[url(/assets/images/cursor-grabbing.png), auto] flex-col items-center`);
const InnerCircle1 = styled(motion.div)<{ color: string }>`
  ${tw`absolute bottom-9 w-24 h-20 border-[3px] border-black rounded-[50%]`}
  background-color: ${({ color }) => color};
`;
const InnerCircle2 = styled(motion.button)<{ color: string }>`
  ${tw`absolute cursor-[url(/assets/images/cursor-default.png), auto] active:cursor-[url(/assets/images/cursor-grabbing.png), auto] outline-none flex justify-center items-center text-black bottom-14 w-24 h-20 border-[3px] border-black rounded-[50%]`}
  background-color: ${({ color }) => color};
`;

const ToolTip = tw(ReactTooltip)`mb-2 p-2 z-50`;

export type CombinedProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> &
  MotionProps & {
    children?: React.ReactNode;
  };

export interface ButtonProps extends CombinedProps {
  icon?: LucideIcon;
  tooltip: string;
  color?: ButtonColor;
  className?: string;
}

export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon: Icon, tooltip, color = ButtonColor.BLUE, ...props }, ref) => {
    const playSound = (soundUrl: string) => {
      const audio = new Audio(soundUrl);
      audio.play();
    };

    const handleTapStart = () => playSound("/assets/sounds/tap-start.mp3");
    const handleTapEnd = () => playSound("/assets/sounds/tap-end.mp3");

    return (
      <ButtonWrapper className={className} ref={ref} {...props}>
        <OuterCircleWrapper>
          <OuterCircle1 />
          <OuterCircle2 />
        </OuterCircleWrapper>
        <InnerCircleWrapper>
          <InnerCircle1 color={color} tabIndex={-1} />
          <InnerCircle2
            tabIndex={0}
            color={color}
            data-tooltip-id="button-id"
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ bottom: "64px" }}
            whileFocus={{ bottom: "64px" }}
            whileTap={{ bottom: "44px", transition: { type: "spring", stiffness: 100, damping: 15 } }}
            onPointerDown={handleTapStart}
            onPointerUp={handleTapEnd}
          >
          {Icon &&  <Icon size={44} strokeWidth={1.5} />}
          </InnerCircle2>
        </InnerCircleWrapper>
        <ToolTip style={{
          backgroundColor: "black",
          borderRadius: "0px",
        }} place="top" id="button-id" content={tooltip} />
      </ButtonWrapper>
    );
  }
);

export default IconButton;
