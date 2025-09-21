import MuiButton from '@mui/material/Button';

interface ButtonProps {
    text: string;
    type: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
}

function Button({text, type, disabled}: ButtonProps) {
  return (
    <MuiButton variant={type} disabled={disabled}>
        {text}
    </MuiButton>
  )
}

export default Button