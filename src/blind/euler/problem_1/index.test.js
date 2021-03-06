import timer from '../../utils/timer';
import multiples from './index';

test('The natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.', () => {
  timer.start('multiples_10');
  expect(multiples(10)).toBe(23);
  timer.stop('multiples_10');
  console.log(timer.getFormattedTime('multiples_10'));
});

test('The natural numbers below 1000 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 233168.', () => {
  timer.start('multiples_1000');
  expect(multiples(1000)).toBe(233168);
  timer.stop('multiples_1000');
  console.log(timer.getFormattedTime('multiples_1000'));
});
