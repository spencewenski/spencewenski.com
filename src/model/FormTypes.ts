export type StateObjects<T> = {
  value: T;
  setValue: (newValue: T) => void;
};
