import { motion } from "framer-motion";
import tw from "twin.macro";

const ButtonWrapper = tw.div`relative w-28 h-24`;
const OuterCircleWrapper = tw.div``;
const OuterCircle1 = tw.div`absolute bottom-0 w-28 h-24 border-[3px] border-black rounded-[50%] bg-white dark:bg-[#1A2D3C]`;
const OuterCircle2 = tw.div`absolute bottom-4 w-28 h-24 border-[3px] border-black rounded-[50%] bg-white dark:bg-[#1A2D3C]`;
const InnerCircleWrapper = tw.div`flex flex-col items-center`;

const InnerCircle1 = motion(tw.div`absolute bottom-9 w-24 h-20 border-[3px] border-black rounded-[50%] bg-[#59B7F4]`);
const InnerCircle2 = motion(tw.div`absolute bottom-14 w-24 h-20 border-[3px] border-black rounded-[50%] bg-[#59B7F4]`);

const Button = () => {
  return (
    <ButtonWrapper>
      <OuterCircleWrapper>
        <OuterCircle1 />
        <OuterCircle2 />
      </OuterCircleWrapper>
      <InnerCircleWrapper>
        <InnerCircle1 />
        <InnerCircle2 transition={{ type: "spring" }} whileHover={{ bottom: "64px" }} whileTap={{ bottom: "44px", transition: { type: "tween" } }} />
      </InnerCircleWrapper>
    </ButtonWrapper>
  );
};

export default Button;
