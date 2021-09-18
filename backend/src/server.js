import app from './app';

// Environment variable on local will be using this to protect secret like API key, credentials
if (!process.env.NODE_ENV) {
	require('dotenv').config();
}

app.listen(parseInt(process.env.PORT) || 3000, async () => {
	console.log(`Running on ${process.env.PORT || 3000} port`);
});
