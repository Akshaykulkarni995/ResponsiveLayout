import { Box, styled, Typography } from "@mui/material";
import ItemButton from "./ItemButton";

const Item = styled(Box)(
  ({ theme }) => `
  min-height: 20rem;
  text-align: center;
  width:100%;
  margin:${theme.spacing(2, 0)};
  ${theme.breakpoints.up("sm")}{width:48%;}
  ${theme.breakpoints.up("md")}{width:32%;}
`
);

const ImageBox = styled(Box)(
  ({ theme }) => `
  height: calc(100% - 4rem);
`
);

const ImageInner = styled(Box)(
  ({ theme }) => `
  height:100%;
  overflow:hidden;
  width:100%;
  & img{
    height: 100%;
    min-width:100%;
    width: auto;
  }
`
);

const DescriptionBox = styled(Box)`
  background-color: #d9d9d9;
  height: calc(100% - 4rem);
  position: relative;
`;
const InnerWrap = styled(Box)(
  ({ theme }) => `
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  & .MuiTypography-root{
    font-weight: ${theme.typography.fontWeightBold};
  }
`
);

const BoxItem = ({
  title = "",
  description = "",
  imageUrl = "",
  buttonText = "",
}) => {
  console.log(imageUrl);

  return (
    <Item>
      {imageUrl ? (
        <ImageBox>
          <ImageInner>
            <img src={imageUrl} alt={`img-${imageUrl}`} />
          </ImageInner>
        </ImageBox>
      ) : (
        <DescriptionBox>
          <InnerWrap p={2}>
            <Typography variant="h4">{description}</Typography>
          </InnerWrap>
        </DescriptionBox>
      )}
      <ItemButton text={buttonText} />
    </Item>
  );
};

export default BoxItem;
