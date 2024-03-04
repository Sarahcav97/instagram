import express from 'express';
const app = express();
import cors from 'cors';

app.use(cors());
app.use(express.json());
app.use(clog);
db();
app.listen(3001, () => {
	console.log('App listening on http://localhost:3001');
});
