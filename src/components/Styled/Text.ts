import styled from "styled-components"
import {
    SpaceProps,
    ColorProps,
    FontWeightProps,
    LineHeightProps,
    FontSizeProps,
} from "styled-system"
import {
    space,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    layout,
    LayoutProps,
} from "styled-system"

interface TextProps
    extends LineHeightProps,
        FontWeightProps,
        SpaceProps,
        ColorProps,
        LayoutProps,
        FontSizeProps {
    children: React.ReactNode
}

const Text = styled.div<TextProps>`
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${space}
    ${fontSize}
    ${layout}
${fontWeight}
${lineHeight}
${color}
`

export default Text
