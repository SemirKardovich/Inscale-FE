import { Box, CircularProgress } from '@mui/material'
import type { ReactNode } from 'react'

export type LoaderContainerProps = {
    isLoading?: boolean
    children: ReactNode | JSX.Element | JSX.Element[]

    className?: string
}

function LoadingContainer({ isLoading, children, }: LoaderContainerProps) {
    return isLoading ? (
        <Box
            display="flex"
            height="100%"
            width="100%"
            flexGrow={1}
            alignItems="center"
            justifyContent="center"

        >
            <CircularProgress size='large' />
        </Box>
    ) : (
        <>{children}</>
    )
}

export default LoadingContainer;