import axios from 'axios';

const token = '9b86c250f24526fc567caa903f0e635b935b79b2bf730e299596f98e15ff034c';

export default axios.create({
  baseURL: 'https://gorest.co.in/public-api',
  headers: {
    Authorization: `Bearer ${token}`
  }
})