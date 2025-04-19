import { Grid } from "@mui/material";
import BasicPie from "../modules/PieAnimation";
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const MapExample = dynamic(() => import('../modules/ProfileMap'), { ssr: false });

export default function MainProfile() {
    return (
        <Grid container spacing={5} padding={5}>
            <Grid size={{ xs: 12, md: 6 }}>
                <BasicPie />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <MapExample />
            </Grid>
        </Grid>
    )
}