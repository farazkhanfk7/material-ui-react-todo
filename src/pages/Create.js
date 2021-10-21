import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'
import { useHistory } from "react-router";

const categories = [
    'JavaScript',
    'Python',
    'Golang',
    'C++'
];

const Create = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('JavaScript')
    const history = useHistory();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setTitleError(false);
      setDetailsError(false);

      if (title === "") {
        setTitleError(true);
      }
      if (details === "") {
        setDetailsError(true);
      }
      if (title && details && category) {
        const note = { title, details, category };
        fetch("http://localhost:8000/notes/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(note),
        }).then((res) => {
          //   console.log("New note added");
          history.push("/");
        });
      }
    };
    
    return (
      <Container size="sm">
        <Box m={2} pt={3}>
        <Typography
          variant="h6" 
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create a New Note
        </Typography>
        
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Note Title" 
            variant="outlined" 
            color="secondary" 
            fullWidth
            required
            error={titleError}
          />
          <TextField sx={{ marginTop: 2, marginBottom: 2 }}
            onChange={(e) => setDetails(e.target.value)}
            label="Details"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
          />

        <Box sx={{ minWidth: 120, marginBottom: 2 }}>
            <FormControl fullWidth>
                <FormLabel>Note Category</FormLabel>
                <Select
                value={category}
                label="Topic"
                color="secondary"
                onChange={(e) => setCategory(e.target.value)}
                >
                  { categories.map((category) => (
                      <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
            </FormControl>
        </Box>
  
          <Button
            type="submit" 
            color="secondary" 
            variant="contained">
            Submit
          </Button>
        </form>
  
        </Box>
      </Container>
    
    )
}

export default Create;
