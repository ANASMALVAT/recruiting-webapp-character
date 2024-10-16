import axios from 'axios';

const BASE_URL = `https://recruiting.verylongdomaintotestwith.ca/api/ANASMALVAT/character`;

export const saveCharacter = async (characterData) => {
  try {
    const response = await axios.post(BASE_URL, characterData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Error saving character:', error);
    throw error; 
    };
}

export const getCharacter = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; 
  } catch (error) {
    console.error('Error retrieving character:', error);
    throw error; 
  }
};
