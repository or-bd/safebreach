const httpReq = options => new Promise((resolve, reject) => {
  fetch(options.url, options)
    .then(d => d.json())
    .then((d) => {
      resolve(d);
    });
});

export default httpReq;
