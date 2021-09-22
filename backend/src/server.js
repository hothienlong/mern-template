import app from './app';
import mongoose from "mongoose";

// Environment variable on local will be using this to protect secret like API key, credentials
if (!process.env.NODE_ENV) {
	require('dotenv').config();
}

// Change this
const databaseName = 'sample';

const mongodbURI =
	process.env.MONGODB_URI || `mongodb://localhost:27017/${databaseName}`;

mongoose.connect(mongodbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});

app.listen(parseInt(process.env.PORT) || 3000, async () => {
	console.log(`Running on ${process.env.PORT || 3000} port`);
});
