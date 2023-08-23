import { Box, Button, Grid, styled, Typography } from "@mui/material";

const ImageGalleryList = styled(Box)(
  ({ theme }) => `
  padding: ${theme.spacing(4, 0)};
    `
);

const BoxContainer = styled(Box)`
  margin: 0 auto;
  max-width: 80%;
  width: 100%;
`;
const ContainerInner = styled(Box)`
  background-color: #d9d9d9;
  overflow: hidden;
`;
const ContentBox = styled(Box)`
  height: 100%;
  padding: ${({ theme }) => theme.spacing(3)};
`;

const ImageField = styled("img")`
  height: 100%;
  width: 100%;
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
                <Box>
                  <ItemButton>{imageData.buttonText}</ItemButton>
                </Box>
              </ContentBox>
            </Grid>
          </Grid>
        </ContainerInner>
      </BoxContainer>
    </ImageGalleryList>
  );
};

export default ImageItems;
