import { Router } from 'express';
import  authorize  from '../middleware/authMiddleware.js';
import { createSubscription, getAllSubscriptions    } from '../controllers/subscriptionController.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'fetch all subscriptions' }));

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'fetch subscription by id' }));

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'update subscription by id' }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'delete subscription by id' }));

subscriptionRouter.get('/user/:id', authorize, getAllSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'cancel all subscriptions' }));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'fetch all upcoming renewals subscriptions' }));

export default subscriptionRouter;

