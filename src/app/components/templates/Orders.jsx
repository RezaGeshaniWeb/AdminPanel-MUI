import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import BasicTable from "../modules/OrderTable";

export default function Orders() {
    return (
        <Grid container spacing={5} padding={5}>
            <Grid size={{ xs: 12, md: 8 }}>
                <BasicTable />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ padding: 1, minHeight: 250 }}>
                    <CardContent>
                        <Typography variant="h4" component="div" sx={{ marginBottom: 3 }}>Total Earning !</Typography>
                        <Typography variant="h4" sx={{ color: 'text.secondary', mb: 3 }}>$24,895</Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 3, fontSize: 16, color: 'white', fontStyle: 'italic' }}>Compared to $84,325 last year</Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4, marginLeft: 2, gap: 3 }}>
                        <Avatar src='/images/order1.png' sx={{ width: 30, height: 30, objectFit: 'cover' }}></Avatar>
                        <Box>
                            <Typography>Zipcar</Typography>
                            <Typography>Vuejs, React & HTML</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ marginBottom: 4, marginLeft: 2 }}>$24,895.65</Typography>
                    <CardActions>
                        <Button variant="outlined">VIEW SALES</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}