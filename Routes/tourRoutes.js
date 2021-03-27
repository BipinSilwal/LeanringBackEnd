const express = require('express');
const { postTour, getAllTour, singleTour, updateTour, deleteTour } = require('../Controller/tourController');

const tourRouter = express.Router();

tourRouter.post('/tour', postTour)
      .get('/tour', getAllTour)
      .get('/tour/:id', singleTour)
      .put('/tour/:id', updateTour)
      .delete('/tour/:id', deleteTour)

module.exports = tourRouter;