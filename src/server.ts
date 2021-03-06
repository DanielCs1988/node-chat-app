import * as express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));