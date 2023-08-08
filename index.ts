const Express = require("express");
const app = Express();
const path = require('path');
const states_Router = require("./routes/statesRoute")
const countriesRouter = require("./routes/countriesRoute")
const lgasRouter = require("./routes/lgasRoutes")
const gov_Router = require("./routes/govRoutes")
const pres_Router = require("./routes/presidentsRoutes");

app.use(Express.static(path.join(__dirname, 'public')));

app.get("/", (req: any, res:any)=>{
  res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
}).get("/home", (req:any, res:any)=>{
  res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
}).get("/docs", (req:any, res:any)=>{
  res.status(200).sendFile(path.join(__dirname, 'views', 'docs.html'));
})

app.use(states_Router)
app.use(countriesRouter)
app.use(lgasRouter)
app.use(gov_Router)
app.use(pres_Router)


app.all("/*", (req:any, res:any)=>{
  res.status(404).send({
    error: "Route not available"
  })
})


app.listen(5000, (err:any) => {
  console.log("SERVER RUNNING oN 5000");
});



