import { searchFilterPipe } from './search-filter.pipe';

describe('MyPipes\searchFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new searchFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
