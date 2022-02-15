import axios from 'axios';

const BASE_URL = 'https://www.breakingbadapi.com/api';

export const getEpisodes = async () => {
  try {
    // ?skip=0&limit=10 - not working
    const res = await axios.get(`${BASE_URL}/episodes`);
    return res?.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getEpisodById = async episodeId => {
  try {
    const res = await axios.get(`${BASE_URL}/episodes/${episodeId}`);
    return res?.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCharacterByName = async name => {
  try {
    // - /api/characters?name=Walter+White
    const res = await axios.get(`${BASE_URL}/characters/?name=${name}`);
    return res?.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
