const { Answer } = require('../models');

exports.createSurveying = async (req, res, next) => {
  try {
    console.log(req.body);
    const { answer1, answer2, answer3 } = req.body;

    console.log(answer1, answer2, answer3);

    // const answer = await answer.create(value);
    // res.status(201).json({ answer });
  } catch (err) {
    next(err);
  }
};
