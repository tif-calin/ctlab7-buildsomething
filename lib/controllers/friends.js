import { Router } from 'express';

export default Router()
  .post('/api/v1/friends', async (req, res, next) => {
    try {
      const friend = await '';
      res.send(friend);
    } 
    catch (err) {
      next(err);
    }
  })
  .get('/api/v1/friends/:id', async (req, res, next) => {
    try {
      const friend = await '';
      res.send(friend);
    } 
    catch (err) {
      next(err);
    }
  })
  .get('/api/v1/friends', async (req, res, next) => {
    try {
      const friend = await '';
      res.send(friend);
    } 
    catch (err) {
      next(err);
    }
  })
  .put('/api/v1/friends/:id', async (req, res, next) => {
    try {
      const friend = await '';
      res.send(friend);
    } 
    catch (err) {
      next(err);
    }
  })
  .delete('/api/v1/friends/:id', async (req, res, next) => {
    try {
      const friend = await '';
      res.send(friend);
    } 
    catch (err) {
      next(err);
    }
  })
;
