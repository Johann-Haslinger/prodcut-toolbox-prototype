/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { Heading, SubHeading } from "../../atoms/typography";

const Container = tw.div`space-y-6 mx-auto px-4 md:px-0 w-full md:w-1/2 xl:w-2/5`;
const StyledImage = tw.img`w-2/3 md:w-1/2 mx-auto pt-4`;

interface HeaderProps {
  heading: React.ReactNode;
  subHeading: React.ReactNode;
}

const Header = ({ heading, subHeading }: HeaderProps) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
      <StyledImage src="/assets/images/snake-line.png" alt="Decorative line" />
    </Container>
  );
};

export default Header;
