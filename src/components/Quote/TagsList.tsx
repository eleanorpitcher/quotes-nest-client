import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"

interface TagsListProps {
    tagList: string[]
}

function TagsList({ tagList }: TagsListProps) {
  
  return (
    <Box sx={{ display: 'flex', gap: 1}}>
      {tagList.map((tag: string) => (
        <Chip key={tag} label={tag} />
      ))}
    </Box>
  )
}

export default TagsList