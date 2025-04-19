import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';

export default function CustomAppTitle() {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="h6">My Dashboard</Typography>
            <Tooltip title="Connected to production">
                <CheckCircleIcon color="success" fontSize="small" />
            </Tooltip>
        </Stack>
    )
}