const http = {
  
  get: function(url, callback) {
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => {
        callback(data);
      });
  },
  
  post(url, data, callback) {
    fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(respuesta => respuesta.json())
    .then(callback);
  }
  
};