import getEmployees, { Response } from '.';

describe('getEmployees()', () => {
  it('immitates api request and returns employees collection', async () => {
    const response: Response = await getEmployees();
    expect(response.length).toEqual(20);
  });
});
