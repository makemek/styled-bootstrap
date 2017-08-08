import { css } from 'styled-components'
import Color from 'color'

export const label_variant = color => css`
  background-color: ${color};

  &[href] {
    &:hover,
    &:focus {
      background-color: ${Color(color).darken(0.1).rgb().string()};
    }
  }
`
