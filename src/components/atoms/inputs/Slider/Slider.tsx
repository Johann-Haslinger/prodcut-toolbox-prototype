import { motion } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ComponentWrapper = styled.div`
  ${tw`flex select-none items-center justify-center space-x-6`}
`;

const PanelLabel = styled.div<{ align?: "left" | "right" }>`
  ${tw`font-bold w-20 text-sm text-black/50 dark:text-white/50 `}
  ${({ align }) => (align === "right" ? tw`text-right` : tw`text-left`)};
`;

const SliderWrapper = styled.div`
  ${tw`w-[398px] h-[46px] flex items-center justify-center relative`}
`;

const OutlineWrapper = styled.div`
  ${tw`bg-black w-[392px] h-[46px] flex items-center justify-center relative`}
  clip-path: polygon(7.5% 0%, 92.5% 0%, 100% 50%, 92.5% 100%, 7.5% 100%, 0% 50%);
  padding: 3px;
`;

const SliderContainer = styled.div`
  ${tw`w-96 h-10 bg-gradient-to-r from-[#239FF2]/70 to-[#69FCB2]/70 relative`}
  clip-path: polygon(7% 0%, 93% 0%, 100% 50%, 93% 100%, 7% 100%, 0% 50%);
`;

const SliderCircle = styled(motion.div)`
  ${tw`size-16 z-10 top-[-8px] flex items-center justify-center space-x-1.5 border-[3px] border-black bg-white rounded-full absolute transform -translate-y-1/2 cursor-pointer`}
`;

const ToolTipWrapper = styled(motion.div)`
  ${tw`w-80 h-60 top-[-15rem] flex items-center justify-center space-x-1.5 absolute transform`}
`;

const TooltipCircle = styled.div`
  ${tw`size-48 z-10 flex items-center justify-center space-x-1.5 border-[3px] border-black bg-white text-white text-base text-center leading-[20px] font-semibold p-6 dark:text-black rounded-full`}
`;

const TooltipStroke1 = styled.div`
  ${tw`h-36 relative right-[220px] top-16 rotate-[24deg] w-[3px] bg-black`}
`;

const TooltipStroke2 = styled.div`
  ${tw`h-40 relative right-[150px] top-[130px] rotate-[60deg] w-[3px] bg-black`}
`;

const Stroke1 = tw.div`h-7 w-[3px] bg-black`;
const Stroke2 = tw.div`h-4 w-[3px] bg-black`;
const Stroke3 = tw.div`h-6 w-[3px] bg-black`;

interface SliderProps {
  labelLeft?: string;
  labelRight?: string;
  value?: number;
  onChange?: (value: number) => void;
  descriptionDict: {
    [until: number]: string;
  };
}

const Slider = ({ labelLeft, labelRight, value = 0, onChange, descriptionDict }: SliderProps) => {
  const [sliderValue, setSliderValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    let newValue = (clientX - rect.left) / rect.width;
    newValue = Math.max(0, Math.min(1, newValue));
    setSliderValue(newValue);
    onChange?.(newValue);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", handleMouseMove);
        setIsDragging(false);
      },
      { once: true }
    );
  };

  const handleTouchStart = () => {
    setIsDragging(true);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener(
      "touchend",
      () => {
        document.removeEventListener("touchmove", handleMouseMove);
        setIsDragging(false);
      },
      { once: true }
    );
  };

  return (
    <ComponentWrapper>
      <PanelLabel align="right">{labelLeft}</PanelLabel>

      <SliderWrapper>
        <OutlineWrapper ref={sliderRef}>
          <SliderContainer />
        </OutlineWrapper>

        <SliderCircle
          animate={{
            scale: 1,
          }}
          style={{
            left: `calc(${sliderValue * 90}% - 16px)`,
          }}
          transition={{
            type: "keyframes",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <Stroke1 />
          <Stroke2 />
          <Stroke3 />
        </SliderCircle>
        {isDragging && (
          <ToolTipWrapper
            style={{
              left: `calc(${sliderValue * 90}% - 16px)`,
            }}
          >
            <TooltipCircle>
                {
                Object.entries(descriptionDict)
                  .map(([until, description]) => [parseFloat(until), description] as [number, string])
                  .sort(([a], [b]) => a - b)
                  .find(([until]) => sliderValue <= until)?.[1]
                }
            </TooltipCircle>
            <TooltipStroke1 />
            <TooltipStroke2 />
          </ToolTipWrapper>
        )}
      </SliderWrapper>

      <PanelLabel>{labelRight}</PanelLabel>
    </ComponentWrapper>
  );
};

export default Slider;
