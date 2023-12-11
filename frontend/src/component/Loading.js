import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
export const NoResult = () => {
    return (
        <Box sx={{
            justifyContent: "center",
            alignItems: "center",
            minHeight: '300px',
            display: "flex",

        }}>
            <h3>NoResult found</h3>
        </Box>
    )
}
export const Loading = () => {
    return (
        <Box sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            minHeight: '400px'
        }}>
            <CircularProgress />
        </Box>
    )

}
// export NoResult
// export default Loading