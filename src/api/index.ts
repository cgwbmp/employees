import { Employee } from '../types';

const firstNames: Array<string> = ['Mike', 'John', 'Bob', 'Tom', 'Devid'];
const surnames: Array<string> = ['Smith', 'Doe', 'Snow', 'Lee', 'Johnson'];

const getRandomItem = (array: Array<string>): string => (
  array[Math.round(Math.random() * (array.length - 1))]
);

const genereteEmployees = (count: number): Array<Employee> => (
  Array(count)
    .fill(null)
    .map(() => ({
      key: Math.random().toString(),
      firstName: getRandomItem(firstNames),
      surname: getRandomItem(surnames),
      age: Math.round(Math.random() * 80 + 18),
    }))
);

export type Response = Array<Employee>;

const getEmployees = async (): Promise<Response> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return genereteEmployees(20);
};

export default getEmployees;
