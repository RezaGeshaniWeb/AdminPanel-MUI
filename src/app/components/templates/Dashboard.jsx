import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Grid } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonIcon from '@mui/icons-material/Person';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SimpleLineChart from '../modules/LineChart';
import BarChart2 from '../modules/BarChart';

export default function BasicCard() {
    return (
        <Grid container spacing={5} padding={5}>
            <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ padding: 1, minHeight: 250 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>Congratulations Reza! 🥳</Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 3 }}>Best seller of the month</Typography>
                        <Box display="flex" alignItems="center" justifyContent='space-between'>
                            <Typography variant="h4" sx={{ mr: 1 }}>
                                $42.8k
                            </Typography>
                            <Avatar alt="Trophy" src="/images/trophy.png" />
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined">VIEW SALES</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
                <Card sx={{ padding: 1.5, minHeight: 250 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" sx={{ marginBottom: 2 }}>
                            Statistics Card
                        </Typography>
                        <Typography component="div" sx={{ color: 'text.secondary', fontSize: 14, marginBottom: 5 }}>
                            Total 48.5% growth 😎 this month
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingX: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <MonetizationOnIcon color='primary' sx={{ fontSize: 50 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>Sales</Typography>
                                <Typography sx={{ fontSize: 20 }}>245k</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <PersonIcon color='success' sx={{ fontSize: 50 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>Customers</Typography>
                                <Typography sx={{ fontSize: 20 }}>12.5k</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <QrCodeIcon color='warning' sx={{ fontSize: 50 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>Products</Typography>
                                <Typography sx={{ fontSize: 20 }}>1.54k</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AttachMoneyIcon color='info' sx={{ fontSize: 50 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>Revenue</Typography>
                                <Typography sx={{ fontSize: 20 }}>$88k</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: 3 }}>
                <BarChart2 />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <SimpleLineChart />
            </Grid>
        </Grid>
    )
}