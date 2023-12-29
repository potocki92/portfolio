import { ReactNode, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex"

type WrapperProps = {
    children?: ReactNode,
    style?: stylex.StyleXStyles
}
const Wrapper = forwardRef<HTMLDivElement, WrapperProps>((props, ref) => {
    const { children, style } = props
    return (
        <div
            ref={ref}
            {...stylex.props(style)}
            >
                {children}
        </div>
    )
})

export default Wrapper