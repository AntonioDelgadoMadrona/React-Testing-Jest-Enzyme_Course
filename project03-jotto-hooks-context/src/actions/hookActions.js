import axios from 'axios';

export const getscretWord = async (setSecretWord) => {
    const response = await axios.get('http://localhost:3030/');
    setSecretWord(response.data);
};

// export default for mocking convenience
export default {
    getscretWord,
}