import { Router } from 'express';
import Friend from '../models/Friend';
import FriendService from '../services/FriendService';

export default Router()
  .post('/api/v1/friends', async (req, res, next) => {
    try {
      const friend = await Friend.insert(req.body);
      FriendService.create(friend);
      res.send(friend);
    } 
    catch (err) {
      next(err);
    }
  })

  .get('/api/v1/friends/:id', async (req, res, next) => {
    try {
      const friend = await Friend.get(req.params.id);
      res.send(friend);
    } 
    catch (err) {
      next(err);
    }
  })

  .get('/api/v1/friends', async (req, res, next) => {
    try {
      const friends = await Friend.gather();
      res.send(friends);
    } 
    catch (err) {
      next(err);
    }
  })

  .put('/api/v1/friends/:id', async (req, res, next) => {
    try {
      const friend = await Friend.update(req.params.id);
      FriendService.update(friend);
      res.send(friend);
    } 
    catch (err) {
      next(err);
    }
  })

  .delete('/api/v1/friends/:id', async (req, res, next) => {
    try {
      const friend = await Friend.remove(req.params.id);
      FriendService.delete(friend);
      res.send(friend);
    } 
    catch (err) {
      next(err);
    }
  })
;
