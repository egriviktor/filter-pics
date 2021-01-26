import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID yT7aNUEVqYJZg5fsrNjB-E8FgmYCHZElyYmV6dHRtx0'
  }
});