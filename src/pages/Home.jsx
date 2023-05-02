import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { BookCard } from "../components/BookCard";
import {searchBook} from "../services/book.js";
import { useFetchData } from "../hooks/useFetchData";
import { getAllBooks } from "../services/book";


export default function () {
  const {
    data: books,
    loading,
    error,
  } = useFetchData({
    fetcher: getAllBooks,
    initialData: [],
  });

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Box>
        <Typography>Something went wrong with your request ...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid key={book.id} item xs={12} sm={6} md={3}>
            <BookCard book={book} />
          </Grid>
        ))}
        {/* <Grid item xs={6}>
          <BookCard />
        </Grid>
        <Grid item xs={6}>
          <BookCard />
        </Grid> */}
      </Grid>
    </Box>
  );
}
