import axios from 'axios';

const API_KEY = '34986976-bc41fc690d31dec5284951a8a';
const API_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(`${API_URL}`, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'all',
        orientation: 'horizontal',
        page: page,
        per_page: 12,
        safesearch: true,
        lang: 'en',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
