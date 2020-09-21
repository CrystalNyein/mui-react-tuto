import { Button } from "@material-ui/core";
import { ChevronRightRounded, Facebook } from "@material-ui/icons";
import React from "react";

const ButtonTuto = () => {
  return (
    <Button
      size="medium"
      startIcon={<Facebook />}
      href="https://www.facebook.com"
      target="blank"
      endIcon={<ChevronRightRounded />}
      variant="outlined"
    >
      Button Test
    </Button>
  );
};

export default ButtonTuto;
