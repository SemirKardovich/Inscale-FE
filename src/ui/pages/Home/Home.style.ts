import { Box, styled, css, Typography } from '@mui/material'

export const Container = styled(Box)(
  ({ theme }) => css`
    padding: ${theme.spacing(2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacing(2)};
    gap: ${theme.spacing(2)};
  `
)

export const Title = styled(Typography)(
  ({ theme }) => css`
    font-size: 1.2rem;
    text-align: center;
    max-width: 90%;
    margin-bottom: ${theme.spacing(4)};
    ${theme.breakpoints.up('md')} {
      max-width: 50%;
      font-size: 1.5rem;
    }
  `
)

export const ServicesContainer = styled(Box)(
  ({ theme }) => css`
    max-width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing(2)};
    flex-flow: row wrap;
  `
)
