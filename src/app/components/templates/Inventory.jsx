import { Grid } from "@mui/material";
import DataGridDemo from "../modules/InventoryTable";
import TitlebarImageList from "../modules/List";

export default function Inventory() {
    return (
        <Grid container padding={5}>
            <Grid size={{ xs: 12 }} sx={{marginBottom: 4}}>
                <DataGridDemo />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TitlebarImageList />
            </Grid>
        </Grid>
    )
}