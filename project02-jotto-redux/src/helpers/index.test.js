import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {

  const secretWord = 'party';
  
  test('returns correct count when there are no matching letters', () => {
    const letterMatcch = getLetterMatchCount('bones', secretWord);
    expect(letterMatcch).toBe(0);
  });

  test('returns the correct count where there are 3 matching letters', () => {
    const letterMatcch = getLetterMatchCount('parking', secretWord);
    expect(letterMatcch).toBe(3);
  });

  test('returns correct count when there are duplicate letters in the guess', () => {
    const letterMatcch = getLetterMatchCount('parkiing', secretWord);
    expect(letterMatcch).toBe(3);
  });

});
