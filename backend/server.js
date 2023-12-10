import express from 'express';
import cors from 'cors';
import data from './data';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config';
import uploadRouter from './routers/uploadRouter';
import userRouter from './routers/userRouter';
import orderRouter from './routers/orderRouter';
import productRouter from './routers/productRouter';

function convertToTitleCase(str) {
  if (!str) { return "" }
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

mongoose.connect(config.MONGODB_URL).then(() => {
  console.log('Connected to mongodb.');
}).catch((error) => {
  console.log(error);
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../frontend/index.html'));
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
})
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(x=>x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
app.get('/api/category/:id', (req, res) => {
  const cat = convertToTitleCase(req.params.id).replaceAll('-', ' ');
  const productList = data.products.filter(x=>x.category === cat);
  if (productList) {
    res.send(productList);
  } else {
    res.status(404).send({ message: cat + ' Products Not Found' });
  }
});

app.use((err, req, res, next) => {
  const status = err.name && err.name === 'ValidationError' ? 400 : 500;
  res.status(status).send({ message: err.message });
});
app.listen(5000, () => {
  console.log("server at http://localhost:5000");
});