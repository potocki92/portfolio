import { ReactNode } from "react";
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    section: {
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'center',
      },
})
type SectionProps = {
    children?: ReactNode,
    id?: string
}
const Section =(props: SectionProps) => {
    return (
        <section id={props.id} {...stylex.props(styles.section)}>
            {props.children}
        </section>
    )
}

export default Section