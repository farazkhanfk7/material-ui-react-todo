import Container from "@mui/material/Container";
import GridShow from "../components/GridShow";
import { useState, useEffect } from "react";

const Notes = () => {
  const [data, setdata] = useState(null);
  const [pending, setpending] = useState(true);
  const [error, seterror] = useState(false);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = data.filter((note) => note.id !== id);
    setdata(newNotes);
  };

  useEffect(() => {
    // using settimeout here just to demonstrate the time server takes to fetch

    const abortcont = new AbortController();

    fetch("http://localhost:8000/notes", { signal: abortcont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't get data for this resource.");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setdata(data);
        setpending(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setpending(false);
          seterror(err.message);
          console.log(err.message);
        }
      });
    // setTimeout(() => {
    //    we can put above function here
    //    to demonstrate time lapse of 1 second
    // }, 1000);

    return () => abortcont.abort();
  });

  return (
    <div>
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      <Container>
        {data && <GridShow notes={data} handleDelete={handleDelete} />}
      </Container>
    </div>
  );
};

export default Notes;
