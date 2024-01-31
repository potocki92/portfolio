import { StyleXStyles, stylex } from "@stylexjs/stylex";
import Paragraph from "../Paragraph/Paragraph";

const CardRoot = ({
  as: Component = "div",
  style,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; style?: StyleXStyles }>) => {
  return <Component {...stylex.props(style)}>{children}</Component>;
};

const CardTitle = ({
  as: Component = "h2",
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; href?: string }>) => {
  return <Component>{children}</Component>;
};

const CardDate = ({
  as: Component = "span",
  children,
}: React.PropsWithChildren<{ as?: React.ElementType }>) => {
  return <Component>{children}</Component>;
};

const CardDescription = ({ children }: React.PropsWithChildren) => {
  return <Paragraph>{children}</Paragraph>;
};

const CardTech = ({
  as: Component = "ul",
  children,
}: React.PropsWithChildren<{ as?: React.ElementType }>) => {
  return <Component>{children}</Component>;
};

const CardTechItem = ({
  as: Component = "li",
  children,
}: React.PropsWithChildren<{ as?: React.ElementType }>) => {
  return <Component>{children}</Component>;
};
export const Card = Object.assign(CardRoot, {
  Title: CardTitle,
  Description: CardDescription,
  Date: CardDate,
  Tech: CardTech,
  TechItem: CardTechItem
});
