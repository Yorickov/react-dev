import { findCountries, addTask, finishTask, activateTask } from './utils';

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
      case '/tasks':
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: [] });
          }, 300);
        });
      default:
        return Promise.reject(new Error('Unknown address'));
    }
  },
  post(url, params = {}) {
    switch (url) {
      case '/tasks':
        return new Promise((resolve) => {
          setTimeout(() => {
            const task = addTask(params.body);
            resolve({ data: task });
          }, 300);
        });
      default:
        return Promise.reject(new Error('Unknown address'));
    }
  },
  patch(url) {
    const match = url.match(/tasks\/(\d+)\/(finish|activate)/);
    switch (match[2]) {
      case 'finish':
        return new Promise((resolve) => {
          setTimeout(() => {
            finishTask(match[1]);
            resolve({});
          }, 300);
        });
      case 'activate':
        return new Promise((resolve) => {
          setTimeout(() => {
            activateTask(match[1]);
            resolve({});
          }, 300);
        });
      default:
        return Promise.reject(new Error('Unknown address'));
    }
  },
};
