const countries = ['Albania', 'Armenia', 'Belarus'];

export default (key) => (
  countries.filter((c) => c.toLowerCase().startsWith(key.toLowerCase()))
);
