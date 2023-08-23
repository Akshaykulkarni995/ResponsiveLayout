import { Box, Grid, Typography, styled } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import headerTop from "../../assets/images/unsplash.png";
import ItemButton from "./ItemButton";

const HeaderTopImageBox = styled(Box)(
  ({ theme }) => `
  height: 100%;
  overflow: hidden;
  & img {
    height: 100%;
    width: auto;
  }
  ${theme.breakpoints.up("sm")} {
    height: auto;
    overflow: auto;
    & img {
      height: auto;
      width: 100%;
    }
  }
`
);

const TitleContainer = styled(Grid)(
  ({ theme }) => `
  margin: ${theme.spacing(10, 0, 5.5, 0)};
  & .MuiTypography-h4{
    text-align: center;
  }
  ${theme.breakpoints.up("md")}{
    & .MuiTypography-h4{
      text-align: left;
    }
  }
`
);

const Description = styled(Box)(
  ({ theme }) => `
  & .MuiTypography-body2:first-of-type{
    margin-bottom: ${theme.spacing(3)};
  }
`
);

const HomeTop = () => {
  return (
    <Grid container spacing={0}>
      <TitleContainer container>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold">
            Rocks and hard places
          </Typography>
        </Grid>
      </TitleContainer>
      <Grid container>
        <Grid item xs={12} md={6}>
          <HeaderTopImageBox>
            <LazyLoadImage src={headerTop} alt="Greenary" />
          </HeaderTopImageBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <Description>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Typography variant="body2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
            </Description>
            <Box mt={2}>
              <ItemButton text="LEARN ABOUT ROCKS" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeTop;
