import express from 'express'
import {
    getBin,
    createBin
} from '../views/catbin.js';

const router = express.Router();

//single Bin
router.get('/:id', getBin)
// Create Bin 
router.post('/', createBin)

export default router;