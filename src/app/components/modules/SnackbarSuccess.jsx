import { Snackbar, Alert } from '@mui/material'

export default function SnackbarSuccess({ successSnackbarOpen, setSuccessSnackbarOpen }) {
    return (
        <Snackbar
            open={successSnackbarOpen}
            autoHideDuration={2000}
            onClose={() => setSuccessSnackbarOpen(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={() => setSuccessSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                Welcome Admin !
            </Alert>
        </Snackbar>
    )
}