import styled from "styled-components"
import {
    layout,
    flexbox,
    space,
    color,
    LayoutProps,
    FlexboxProps,
    SpaceProps,
    ColorProps,
} from "styled-system"

interface BoxProps extends LayoutProps, FlexboxProps, SpaceProps, ColorProps {
    children: React.ReactNode
}

const Box = styled.div<BoxProps>`
    box-sizing: border-box;
    ${space}
    ${color}
${layout}
${flexbox}
`

export default Box
