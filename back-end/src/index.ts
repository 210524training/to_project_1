import app from './App';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server has started listening on port ${port}`);
});
