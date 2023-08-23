import { Box, Button, Grid, styled, Typography } from "@mui/material";

const ImageGalleryList = styled(Box)(
  ({ theme }) => `
  margin-top: ${theme.spacing(8)};
    `
);

const BoxContainer = styled(Box)`
  margin: 0 auto;
  width: 100%;
  max-width: 80%;
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;
  }
`;
const ContainerInner = styled(Box)`
  background-color: #d9d9d9;
  overflow: hidden;
`;
const ContentBox = styled(Box)`
  height: 100%;
  padding: ${({ theme }) => theme.spacing(3)};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(3, 1.5)};
  }
`;

const ImageField = styled("img")`
  height: 100%;
  width: 100%;
`;
const ButtonWrap = styled(Box)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`;
const ItemButton = styled(Button)(
  ({ theme }) => `
  background-color: #a2a2a2;
  border-radius:0;
  box-shadow:none;
  color:#000000;
  margin-top: ${theme.spacing(2)};
  padding: ${theme.spacing(1.5, 3)};
  :hover, :focus, :active{
    background-color: #a0a0a0;
    box-shadow:none;
    color:#000000;
  }
`
);

const ImageItems = ({ imageData }: any) => {
  return (
    <ImageGalleryList>
      <BoxContainer>
        <ContainerInner>
          <Grid container spacing={0}>
            <Grid item xs={12} md={8}>
              <ImageField
                src={imageData.imageUrl}
                alt={`img-${imageData.imageUrl}`}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ContentBox>
                <Box>
                  <Typography variant="h6">{imageData.title}</Typography>
                  <Typography variant="body2">
                    {imageData.description}
                  </Typography>
                </Box>
                <ButtonWrap>
                  <ItemButton>{imageData.buttonText}</ItemButton>
                </ButtonWrap>
              </ContentBox>
            </Grid>
          </Grid>
        </ContainerInner>
      </BoxContainer>
    </ImageGalleryList>
  );
};

export default ImageItems;
