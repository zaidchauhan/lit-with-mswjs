import { worker } from '../mocks/browser.js';

let workerRun = false;
if (typeof globalThis.process === 'undefined') {
  if(!workerRun && worker) {
    workerRun = true;
    worker.start({
      serviceWorker: {
        url: '/demo/mockServiceWorker.js',
      },
    })
  }
}
