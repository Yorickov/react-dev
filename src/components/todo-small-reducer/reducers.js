export const textReducer = (state, { type, payload }) => {
  switch (type) {
    case 'TEXT_UPDATE':
      return payload.text;
    case 'TASK_ADD':
      return '';
    default:
      throw new Error();
  }
};

export const tasksReducer = (state, { type, payload }) => {
  switch (type) {
    case 'TASK_ADD':
      return [payload.task, ...state];
    case 'TASK_REMOVE':
      return state.filter(({ id }) => id !== payload.id);
    default:
      throw new Error();
  }
};
