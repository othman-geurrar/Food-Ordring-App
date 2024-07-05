import { body, validationResult } from "express-validator";

import { Request, Response, NextFunction } from "express";

const handleValidationError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateUserRequest = [
  body("name").isString().notEmpty().withMessage("name should be a string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("address line 1 should be a string"),
  body("city").isString().notEmpty().withMessage("city should be a string"),
  body("country")
    .isString()
    .notEmpty()
    .withMessage("country should be a string"),
  handleValidationError,
];
