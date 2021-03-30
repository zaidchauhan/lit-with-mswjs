// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

export const handlers = [
  rest.get('/todos/list', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([{
      id: 1,
      isDone: true,
      title: 'Eat My Breakfast',
      note: 'oatmeal, fruits & morning tea',
    },{
      id: 2,
      isDone: true,
      title: 'e-mail processing',
      note: 'art, code & personal',
    },{
      id: 3,
      isDone: false,
      title: 'Meditation',
      note: 'out of my mind',
    },{
      id: 4,
      isDone: false,
      title: 'Code, Code, Code',
      note: 'hit f12 & let\'s get wasted',
    },{
      id: 5,
      isDone: false,
      title: 'Watch Screencast',
      note: 'Backend-as-a-service, yeh!',
    }]),
  )),
];
