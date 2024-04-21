import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SidebarNews from "@/components/ui/SidebarNews/SidebarNews";
import { Grid } from "@mui/material";


const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={4}>
          <SidebarNews></SidebarNews>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;