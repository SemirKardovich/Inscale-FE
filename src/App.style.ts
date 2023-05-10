import { Box, styled, css } from '@mui/material'
import { inscaleColors } from './utils/colors'

export const AppContainer = styled(Box)(
  () => css`
    background-color: ${inscaleColors.whiteSmoke};
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
  `
)
