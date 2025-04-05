const Booking = require('../models/bookingModel');

exports.list = (req, res) => {
  res.render('list', { bookings: Booking.getAll() });
};

exports.showCreateForm = (req, res) => {
  res.render('create');
};

exports.create = (req, res) => {
  const { customerName, date, time } = req.body;
  if (!customerName || !date || !time || Booking.isDuplicate(date, time)) {
    return res.send('Dữ liệu không hợp lệ hoặc bị trùng!');
  }
  const newBooking = {
    id: Date.now().toString(),
    customerName,
    date,
    time,
    status: 'Pending'
  };
  Booking.create(newBooking);
  res.redirect('/');
};

exports.showEditForm = (req, res) => {
  const booking = Booking.getById(req.params.id);
  if (!booking) return res.send('Không tìm thấy!');
  res.render('edit', { booking });
};

exports.update = (req, res) => {
  const { customerName, date, time } = req.body;
  Booking.update(req.params.id, { customerName, date, time });
  res.redirect('/');
};

exports.cancel = (req, res) => {
  Booking.cancel(req.params.id);
  res.redirect('/');
};