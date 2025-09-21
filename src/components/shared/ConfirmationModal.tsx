import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"

export interface ConfirmationModalUIProps {
    header: string;
    text: string;
    confirmationButton: string;
    cancelButton: string;
    onConfirm: () => void;
    onCancel: () => void;
}

function ConfirmationModal({
    header,
    text,
    confirmationButton,
    cancelButton,
    onConfirm,
    onCancel
}: ConfirmationModalUIProps) {
  return (
    <Box 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Box style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
            <Typography gutterBottom variant="h5">{header}</Typography>
            <Typography gutterBottom variant="body1" sx={{ fontWeight: 'light' }}>{text}</Typography>
            <Button onClick={onConfirm}>{confirmationButton}</Button>
            <Button onClick={onCancel}>{cancelButton}</Button>
        </Box>
    </Box>
  )
}

export default ConfirmationModal