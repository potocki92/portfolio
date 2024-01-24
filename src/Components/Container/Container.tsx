import { ReactNode, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as $ } from "../../styles/globalTokens.stylex";

const styles = stylex.create({
  section: {
    display: "flex",
    justifyContent: "center",
  },
  inner: {
    padding: "0 2rem",
    width: "100%",
    maxWidth: $.maxWidth,
  },
});

const InnerContainer = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function InnerContainer({ style, children, ...props }, ref) {
    return (
      <div ref={ref} {...stylex.props(styles.inner)} {...props}>
        {children}
      </div>
    );
  },
);

const ContainerRoot = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function Container({ children, ...props }, ref) {
    return (
      <div ref={ref} {...stylex.props(styles.section)} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </div>
    );
  },
);

export const Container = Object.assign(ContainerRoot, {
  Inner: InnerContainer,
});
