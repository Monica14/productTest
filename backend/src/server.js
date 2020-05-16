import express from 'express';
import http from 'http';
import bodyparser from 'body-parser';
import path from 'path';

const app = express();
const server = http.Server(app);

app.set('views', path.join(__dirname, '../views'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true })); // to support encoded bodies
app.set('view engine', 'ejs');
app.use(express.static('public'));

// error handler middleware
app.use((err, req, res, next) => {
  const data = [];
  const errors = [];
  // let e = (err).toString();
  // let errorMsg = e.substr(7,e.length); // substring only error message
  errors.push(err.message);
  console.log("err.message: ",err.message)
  const response = new Response('failure', data, errors);
  const encResponse = encryptResponse(response); // Encrypt response
  res.status(500).json(encResponse);
});

export { server, app, express };