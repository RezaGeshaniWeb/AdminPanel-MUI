import { Grid } from "@mui/material";
import RecipeReviewCard from "../modules/CustomerCard";

export default function Customers() {
    return (
        <Grid container spacing={5} padding={5}>
            <Grid size={{ xs: 12, md: 4 }}>
                <RecipeReviewCard />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <RecipeReviewCard />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <RecipeReviewCard />
            </Grid>
        </Grid>
    )
}