import React from 'react';
import PropTypes from "prop-types";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function AtomButton({ text, variant, color, onClick, classes, disabled}) {


  return (
    <Stack spacing={16}>
      <Button 
        variant={variant}
        color={color}
        onClick={onClick}
        classes={classes}
        disabled={disabled}
        >
            {text}
      </Button>
    </Stack>
  );
}

AtomButton.defaultProps = {
    variant: "contained",
    color: "inherit"
}

AtomButton.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.string,
  disabled: PropTypes.bool
}

