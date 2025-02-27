import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import audioRoute from './routes/audioRoute.js'
import userRoute from './routes/userRoute.js'

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Set to your frontend origin
  credentials: true, // Allow cookies to be sent
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
// Serve static files
app.use("/assets", express.static("public/assets"));

// routes
app.use('/api/v1/audio', audioRoute);
app.use('/api/v1/user', userRoute);
app.get('/', (req, res) =>{
  res.send('hello world user test')
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
