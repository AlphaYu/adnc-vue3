// spec | test
import { describe, it, expect } from 'vitest';
import axios from 'axios';

describe('GET jsonplaceholder/posts/1', () => {
  it('renders search results after clicking search button', async () => {
    test('should return a valid post', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      const post = response.data;

      expect(post).toHaveProperty('userId');
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
    });
  });
});
