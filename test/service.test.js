import { expect } from '@open-wc/testing';

import { getTodoList } from '../src/service.js';
import { worker } from '../mocks/browser.js';

describe('Service', () => {
  before(async () => {
    await worker.start();
  });

  after(async () => {
    await worker.stop();
  });

  it('getTodoList', async () => {
    const list = await getTodoList();
    expect(list).not.to.be.empty;
  });
});
