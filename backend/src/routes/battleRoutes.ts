/**
 * @file This file contains the routes for the API 
 *
 * Purpose:
 * - Creates a router holding a POST endpoint for the API
 * - Router is added with simple endpoint validator and controller
 */

import { Router } from 'express';
import { battleController } from '../controllers/battleController';
import { validateOrigin } from '../middleware/validator';

const router = Router();

router.post('/battle', validateOrigin, battleController);

export default router;