import Grid from "@mui/material/Grid";
import NoteCard from "./NoteCard";

const GridShow = ({notes,handleDelete}) => {
  return (
    <div>
      <Grid sx={{ marginTop: 2, marginBottom: 2 }} container spacing={3}>
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GridShow;
