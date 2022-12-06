const axios = require('axios');

// axios.post('http://127.0.0.1:5000/posts', {title:'title', body: 'body'});


const config = {
  url: 'http://127.0.0.1:5000/posts',
  method: 'post',
  data:{
    title: 'my title',
    body: 'my body'
  }
}

axios(config);