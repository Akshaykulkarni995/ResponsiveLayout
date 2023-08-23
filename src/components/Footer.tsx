import { styled, Typography } from "@mui/material";

const FooterContainer = styled("div")(
  ({ theme }) => `
    background-color: #d9d9d9;
    padding: ${theme.spacing(2)};
    & .MuiTypography-root{
        font-weight: ${theme.typography.fontWeightBold};
    }
`
);
const Footer = ({ copyRight }: any) => {
  return (
    <FooterContainer>
      <Typography variant="body1">{copyRight}</Typography>
    </FooterContainer>
  );
};

export default Footer;
