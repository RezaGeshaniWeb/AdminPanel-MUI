import { Snackbar, Alert } from '@mui/material'

export default function SnackbarError({ openSnackbar, setOpenSnackbar, errorMessage }) {
    return (
        <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: '100%' }}>
                {errorMessage}
            </Alert>
        </Snackbar>
    )
}