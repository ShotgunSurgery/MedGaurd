const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express();

app.use(cors()); 
app.use(express.json());

const port = 5000;

const URI = "mongodb://localhost:27017/med-gaurd"

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1); 
});

const registrationRoute = require('./routes/registration');
app.use(registrationRoute);

const loginRoute = require('./routes/LoginRoute');
app.use(loginRoute);

const doc_reg_route = require('./routes/Doctor_registration_route');
app.use(doc_reg_route);

const doctor = require('./routes/Doctor_info_fetch_route');
app.use('/doctor', doctor);

app.listen(port, () => {
    console.log("Server Started on port: 5000");
})