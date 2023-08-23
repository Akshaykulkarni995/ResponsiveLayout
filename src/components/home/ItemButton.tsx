import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(
  ({ theme }) => `
  background-color: #d9d9d9;
  border-radius:0;
  box-shadow:none;
  color:#000000;
  margin-top: ${theme.spacing(2)};
  padding: ${theme.spacing(1.5, 5)};
  :hover, :focus, :active{
    background-color: #d1d1d1;
    box-shadow:none;
    color:#000000;
  }
`
);
function ItemButton(props: any) {
  return (
    <StyledButton variant="contained" color="primary">
      {props.text}
    </StyledButton>
  );
}

export default ItemButton;
