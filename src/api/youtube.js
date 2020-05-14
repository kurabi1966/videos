import axios from 'axios';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyCQFqw0qOMusAcZoHUHJhpH0K-PC7OeE5Y',
    type: 'video',
    part: 'snippet',
    maxResults: 5,
  },
});
