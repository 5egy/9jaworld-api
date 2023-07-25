const express = require("express");
const app = express();
const path = require('path');
const statesRouter = require("./routes/statesRoute")
const countriesRouter = require("./routes/countriesRoute")
const lgasRouter = require("./routes/lgasRoutes")
const govRouter = require("./routes/govRoutes")
const presRouter = require("./routes/presidentsRoutes");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res)=>{
  res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
}).get("/home", (req, res)=>{
  res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
}).get("/docs", (req, res)=>{
  res.status(200).sendFile(path.join(__dirname, 'views', 'docs.html'));
})

app.use(statesRouter)
app.use(countriesRouter)
app.use(lgasRouter)
app.use(govRouter)
app.use(presRouter)


app.all("/*", (req, res)=>{
  res.status(404).send({
    error: "Route not available"
  })
})


app.listen(5000, (err) => {
  console.log("SERVER RUNNING oN 5000");
});



