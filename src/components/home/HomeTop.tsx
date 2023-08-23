import { Box, Grid, Typography, styled } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import headerTop from "../../assets/images/unsplash.png";
import ItemButton from "./ItemButton";

interface IHomeData {
  data: {
    title: string;
    desc1: string;
    desc2: string;
  };
}

const HeaderTopImageBox = styled(Box)(
  ({ theme }) => `
  height: 100%;
  overflow: hidden;
  & img {
    height: 100%;
    width: 100%;
  }
  ${theme.breakpoints.up("sm")} {
    height: 100%;
    overflow: hidden;
    & img {
      height: 100%;
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
const DescriptionBox = styled(Box)`
  padding: ${({ theme }) => theme.spacing(3)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: ${({ theme }) => theme.spacing(3, 0, 0, 0)};
  }
`;
const ButtonWrap = styled(Box)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`;

const HomeTop = ({ data }: IHomeData) => {
  return (
    <Grid container spacing={0}>
      <TitleContainer container>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold">
            {data.title}
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
          <DescriptionBox>
            <Description>
              <Typography variant="body2">{data.desc1}</Typography>
              <Typography variant="body2">{data.desc2}</Typography>
            </Description>
            <ButtonWrap mt={2}>
              <ItemButton text="LEARN ABOUT ROCKS" />
            </ButtonWrap>
          </DescriptionBox>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeTop;
