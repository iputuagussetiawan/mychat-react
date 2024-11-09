import {Skeleton, Stack } from "@mui/material";
import Grid from '@mui/material/Grid2';

const LayoutLoader = () => {
    return (
        <>
        <Grid container style={{ height: "calc(100vh - 4rem)" }} spacing={"1rem"}>
            <Grid 
                size={{ sm: 4, md: 3}} 
                sx={{ display: { xs: "none", sm: "block" } }} 
                style={{ height: "100%" }}
            >
                <Skeleton variant="rectangular" width="100%" height="100%"/>
            </Grid>
            <Grid  size={{ xs: 12,sm:8,md:5,lg:6 }} style={{ height: "100%" }}>
                <Stack spacing={"1rem"}>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Skeleton key={index} variant="rounded" height={"5rem"} />
                    ))}
                </Stack>
            </Grid>
            <Grid 
                size={{ md: 4, lg:3}} 
                sx={{ 
                    height: "100%", 
                    display: { xs: "none", md: "block" }, 
                }} 
            >
                <Skeleton variant="rectangular" width="100%" height="100%"/>
            </Grid>
        </Grid>
        </>
    );
};

export {LayoutLoader };

