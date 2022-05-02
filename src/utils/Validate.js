export const validate = (input) => {
  let errors = {};

  if (!input.date) {
    errors.date = 'Date is required!';
  }

  if (!input.time) {
    errors.time = 'Time is required!';
  }

  if (!input.location) {
    errors.location = 'Location is required!';
  }

  if (!input.load) {
    errors.load = 'Load is required!';
  }

  if (!input.truckId) {
    errors.truckId = 'Truck is required!';
  }

  return errors;
};
