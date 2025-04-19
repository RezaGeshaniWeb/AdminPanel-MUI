'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import Checkbox from '@mui/material/Checkbox'
import { Typography } from '@mui/material'

import { AppProvider } from '@toolpad/core/AppProvider'
import { SignInPage } from '@toolpad/core/SignInPage'
import SnackbarError from '../modules/SnackbarError'
import SnackbarSuccess from '../modules/SnackbarSuccess'


const providers = [{ id: 'credentials', name: 'Email and Password' }]

export default function SlotPropsSignIn() {
    const [isClient, setIsClient] = React.useState(false)
    const [openSnackbar, setOpenSnackbar] = React.useState(false)
    const [successSnackbarOpen, setSuccessSnackbarOpen] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')

    const router = useRouter()

    React.useEffect(() => setIsClient(true), [])

    if (!isClient) return null

    const handleSignIn = (provider, formData) => {
        const email = formData.get('email')
        const password = formData.get('password')

        if (email === 'rezageshaniweb@gmail.com' && password === '1234') {
            setSuccessSnackbarOpen(true)
            setTimeout(() => {
                router.push('/dashboard')
            }, 1000)

        } else {
            setErrorMessage('Invalid email or password. Please try again.');
            setOpenSnackbar(true)
        }
    }

    return (
        <AppProvider>
            <SignInPage
                signIn={handleSignIn}
                slotProps={{
                    emailField: { variant: 'standard', autoFocus: true },
                    passwordField: { variant: 'standard' },
                    submitButton: { variant: 'outlined' },
                    rememberMe: {
                        control: (
                            <Checkbox
                                name="tandc"
                                value="true"
                                color="primary"
                                sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                        ),
                        color: 'textSecondary',
                        label: 'I agree with the T&C',
                    },
                }}
                providers={providers}
            />
            <Typography variant='h6' sx={{ position: 'absolute', top: 15, left: 20 }}>
                Email: rezageshaniweb@gmail.com
            </Typography>
            <Typography variant='h6' sx={{ position: 'absolute', top: 65, left: 20 }}>
                Password: 1234
            </Typography>

            <SnackbarError openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar} errorMessage={errorMessage} />

            <SnackbarSuccess successSnackbarOpen={successSnackbarOpen} setSuccessSnackbarOpen={setSuccessSnackbarOpen} />
        </AppProvider>
    )
}