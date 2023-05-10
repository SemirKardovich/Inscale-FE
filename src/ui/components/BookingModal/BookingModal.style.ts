import { css, Paper, styled } from '@mui/material'

export const ModalPaper = styled(Paper)(
  ({ theme }) => css`
    min-width: 320px;
    padding: ${theme.spacing(4)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacing(2)};
  `
)
