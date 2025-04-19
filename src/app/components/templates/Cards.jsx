import { Box, Typography } from "@mui/material";

export default function Cards() {
    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography>Dashboard content for Cards</Typography>
        </Box>
    )
}