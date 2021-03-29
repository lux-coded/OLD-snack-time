import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org',
  api_key: '8c8d65e69723f72aa8f5c0911b107365'
});
