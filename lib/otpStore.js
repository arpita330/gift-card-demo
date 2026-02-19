const store = new Map();

export function generateOTP(phone) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  store.set(phone, otp);
  return otp;
}

export function verifyOTP(phone, otp) {
  return store.get(phone) === otp;
}
