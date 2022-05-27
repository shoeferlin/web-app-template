import express from 'express';

import log from './helpers/log.js';
import apiRouter from './routes/apiRouter.js';

const router = new express.Router;

// Middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  log.http(req.method, req.path);
  next();
});

// Default request
router.get('/', (req, res) => {
  res.send(`Sever is running`);
});

// Forward to API router
app.use('/api', apiRouter);

export default router;

