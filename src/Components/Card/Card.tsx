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
  as: Component = "h5",
  children,
  style
}: React.PropsWithChildren<{ as?: React.ElementType; href?: string, style?: StyleXStyles }>) => {
  return <Component {...stylex.props(style)}>{children}</Component>;
};

const CardDate = ({
  as: Component = "span",
  children,
  style
}: React.PropsWithChildren<{ as?: React.ElementType; style?: StyleXStyles }>) => {
  return <Component {...stylex.props(style)}>{children}</Component>;
};

const CardDescription = ({
  children,
  style,
}: React.PropsWithChildren<{ style?: StyleXStyles }>) => {
  return <Paragraph style={style}>{children}</Paragraph>;
};

const CardTech = ({
  as: Component = "ul",
  children,
  style
}: React.PropsWithChildren<{ as?: React.ElementType, style?: StyleXStyles }>) => {
  return <Component {...stylex.props(style)}>{children}</Component>;
};

const CardTechItem = ({
  as: Component = "li",
  children,
  style
}: React.PropsWithChildren<{ as?: React.ElementType, style?: StyleXStyles }>) => {
  return <Component {...stylex.props(style)}>{children}</Component>;
};
export const Card = Object.assign(CardRoot, {
  Title: CardTitle,
  Description: CardDescription,
  Date: CardDate,
  Tech: CardTech,
  TechItem: CardTechItem,
});
