import findCountries from './utils';

export default {
  get(url, params = {}) {
    switch (url) {
      case '/countries':
        return new Promise((resolve) => {
          setTimeout(() => {
            const countries = findCountries(params.key);
            resolve({ data: countries });
          }, 300);
        });
      default:
        return Promise.reject(new Error('Unknown address'));
    }
  },
};
