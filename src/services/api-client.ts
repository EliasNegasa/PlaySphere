import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7760a68d70cb4154a74d0bb16d0da262',
  },
});
