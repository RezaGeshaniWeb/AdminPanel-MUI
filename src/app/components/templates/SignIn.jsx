'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import Checkbox from '@mui/material/Checkbox'
import { Box, Typography } from '@mui/material'

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
    const [checkBox, setCheckBox] = React.useState(false)
    const [emailValue, setEmailValue] = React.useState('')
    const [passwordValue, setPasswordValue] = React.useState('')


    const router = useRouter()

    React.useEffect(() => setIsClient(true), [])

    React.useEffect(() => {
        if (checkBox) {
            setEmailValue('rezageshaniweb@gmail.com')
            setPasswordValue('1234')
        } else {
            setEmailValue('')
            setPasswordValue('')
        }
    }, [checkBox])


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

    const handleCheckBox = () => setCheckBox(prev => !prev)

    return (
        <AppProvider>
            <SignInPage
                signIn={handleSignIn}
                slotProps={{
                    emailField: {
                        variant: 'standard',
                        autoFocus: true,
                        value: emailValue, 
                        onChange: (e) => setEmailValue(e.target.value)
                    },
                    passwordField: {
                        variant: 'standard',
                        value: passwordValue, 
                        onChange: (e) => setPasswordValue(e.target.value)
                    },
                    submitButton: { variant: 'outlined' },
                    rememberMe: {
                        control: (
                            <Checkbox
                                onChange={handleCheckBox}
                                name="tandc"
                                value="true"
                                color="primary"
                                sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 24 } }}
                            />
                        ),
                        color: 'textSecondary',
                        label: 'Are you Admin ? click here',
                    },
                }}
                providers={providers}
            />

            <Box component="section" sx={{
                p: 2, border: '1px dashed #ccc', borderRadius: '5px', position: 'absolute', top: 20, left: 20, animation: 'fadeIn 2s',
                '@keyframes fadeIn': {
                    '0%': { transform: 'scale(0)' },
                    '40%': { transform: 'scale(.8)' },
                    '80%': { transform: 'scale(.6)' },
                    '100%': { transform: 'scale(1)' },
                },
            }}>
                <Typography variant='h6' sx={{ marginBottom: '12px' }}>
                    Email: rezageshaniweb@gmail.com
                </Typography>
                <Typography variant='h6'>
                    Password: 1234
                </Typography>
            </Box>

            <SnackbarError openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar} errorMessage={errorMessage} />

            <SnackbarSuccess successSnackbarOpen={successSnackbarOpen} setSuccessSnackbarOpen={setSuccessSnackbarOpen} />
        </AppProvider>
    )
}
