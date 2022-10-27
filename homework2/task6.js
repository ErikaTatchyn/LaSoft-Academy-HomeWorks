// get type of nn in a lower case format:

const nn = new Promise((res, rej) => {
  setTimeout(() => res("done"), 1000);
});

nn; //Promise {<fulfilled>: 'done'}
