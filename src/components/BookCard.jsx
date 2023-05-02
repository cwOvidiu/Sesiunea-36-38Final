import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`}>
      <Card>
        <CardMedia
          sx={{ height: 400 }}
          image={book.coverImageURL}
          alt={book.title}
          title={book.title}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              height: "4rem",
              lineHeight: "2rem",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {book.title}
          </Typography>
          <Typography
            sx={{
              height: "4rem",
              lineHeight: "2rem",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
            variant="body2"
            color="text.secondary"
          >
            {book.author}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
