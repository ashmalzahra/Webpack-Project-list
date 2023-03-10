/** @jest-environment jsdom */
const Task = require('./utils/Add&Remove.js');
const getFilledStorage = require('./__mocks__/filledTaskList.js');
const domContainer = require('./__mocks__/taskListDom.js');

const filledTaskList = getFilledStorage();
describe('TaskList', () => {
  const task = new Task(filledTaskList);
  const ulList = domContainer();
  test('Add an item to task list in dom expected list.length + 1', () => {
    task.addToDo('new', ulList);
    expect(ulList.children).toHaveLength(3);
  });
  test('Remove an item to task list current: 3 in dom expected list.length - 1', () => {
    task.remove(0, ulList);
    expect(ulList.children).toHaveLength(2);
  });
});