import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Friend from '../lib/models/Friend.js';
import { jest } from '@jest/globals';


describe('friend controller routes', () => {
  jest.setTimeout(9999);

  let joey, noodle;

  beforeEach(() => {
    joey = { 
      name: 'Joey',
      lifeform: 'cat'
    };
    noodle = {
      name: 'Noodle',
      lifeform: 'snakeplant'
    };

    return setup(pool);
  });

  it('POST new friend and send text', async () => {
    const input = joey;
    const actual = (await request(app)
      .post('/api/v1/friends')
      .send(input)
    ).body;
    
    const expected = { id: expect.any(Number), ...joey };

    expect(actual).toEqual(expected);
  });

  it('GET friend by id', async () => {
    const input = await Friend.insert(joey);
    const actual = (await request(app)
      .get(`/api/v1/friends/${input.id}`)
    ).body;

    const expected = { id: expect.any(Number), ...joey };

    expect(actual).toEqual(expected);
  });

  it('GET friends', async () => {
    joey = await Friend.insert(joey);
    noodle = await Friend.insert(noodle);

    const actual = (await request(app)
      .get('/api/v1/friends')
    ).body;

    const expected = [joey, noodle];

    expect(actual).toEqual(expected);
  });

  it('PUT friend by id and send text', async () => {
    joey = await Friend.insert(joey);
    joey.name = 'Samantha';

    const actual = (await request(app)
      .put(`/api/v1/friends/${joey.id}`)
      .send(joey)
    ).body.name;
    const expected = 'Samantha';

    expect(actual).toEqual(expected);
  });

  it('DELETE friend by id and send text', async () => {
    joey = await Friend.insert(joey);
    const actual = (await request(app)
      .delete(`/api/v1/friends/${joey.id}`)
    ).body;
    const expected = joey;

    expect(actual).toEqual(expected);
  });

});
