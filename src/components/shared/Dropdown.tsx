import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface CustomDropdownMenuType {
    label: string;
    value: string;
    onChange: () => void;
    menuItems: string[];
}

function CustomDropdownMenu({ label, value, onChange, menuItems }: CustomDropdownMenuType) {
  return (
    <Box>
        <FormControl fullWidth>
            <InputLabel id="simple-select">{label}</InputLabel>
            <Select
                labelId="simple-select-label"
                value={value}
                label={label}
                onChange={onChange}
            >
            {menuItems.map((item, index) => (
                <MenuItem value={item} key={index}>{item}</MenuItem>
            ))}
            </Select>
        </FormControl>
    </Box>
  )
}

export default CustomDropdownMenu