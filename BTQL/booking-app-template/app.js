const express = require('express');
const app = express();
const path = require('path');
const bookingRoutes = require('./booking-app/routes/bookingRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'booking-app/public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'booking-app/views'));

app.use('/', bookingRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});