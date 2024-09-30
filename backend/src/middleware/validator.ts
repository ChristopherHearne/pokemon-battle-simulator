/**
 * @file This file contains simple endpoint validation for the POST request
 *
 * Purpose:
 * - Validate that the request was sent from localhost:3001 (the client)
 */
import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

export const validateOrigin = (req: Request, res: Response, next: NextFunction) => {
    const allowedOrigin = config.allowed_origin;
    if (req.headers.origin === allowedOrigin) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden - Invalid origin' });
    }
};