import { Box, Typography, styled } from "@mui/material";
import BoxItem from "./BoxItem";

import { ItemsProps } from "../Home";

const GridBox = styled(Box)(
  ({ theme }) => `
  margin-top: ${theme.spacing(8)};
`
);
const Title = styled(Box)`
  text-align: center;
`;

const BoxContainer = styled(Box)(
  ({ theme }) => `
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  margin: ${theme.spacing(0)};
  padding: ${theme.spacing(0)};
`
);

const BoxItems = ({ items = [] }: any) => {
  return (
    <GridBox>
      <Title>
        <Typography variant="h5" fontWeight="bold">
          {items.title}
        </Typography>
      </Title>
      <BoxContainer>
        {items.details.map((item: ItemsProps, index: number) => (
          <BoxItem
            key={index}
            description={item?.description}
            imageUrl={item?.imageUrl}
            buttonText={item.buttonText}
          />
        ))}
      </BoxContainer>
    </GridBox>
  );
};

export default BoxItems;
