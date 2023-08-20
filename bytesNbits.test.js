import { prompts } from 'prompts';
import { startTime } from './bytesNbits';
import { bytesNBitsGame } from './bytesNbits';



it('test', () => {
    const result = startTime()
    expect(result).toBe(4)
});