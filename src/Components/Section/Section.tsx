import { ReactNode } from "react";
import * as stylex from '@stylexjs/stylex';

// const styles = stylex.create({
//     section: {
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         width: '100%',
//         height: '100vh',
//         userSelect: 'none',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '1rem',
//       },
// })
type SectionProps = {
    children?: ReactNode,
    id?: string
}
const Section =(props: SectionProps) => {
    return (
        <section id={props.id} {...stylex.props()}>
            {props.children}
        </section>
    )
}

export default Section