let bookings = [];

module.exports = {
  getAll: () => bookings,
  getById: (id) => bookings.find(b => b.id === id),
  create: (booking) => bookings.push(booking),
  update: (id, updated) => {
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) bookings[index] = { ...bookings[index], ...updated };
  },
  cancel: (id) => {
    const booking = bookings.find(b => b.id === id);
    if (booking) booking.status = 'Cancelled';
  },
  isDuplicate: (date, time) => bookings.some(b => b.date === date && b.time === time)
};