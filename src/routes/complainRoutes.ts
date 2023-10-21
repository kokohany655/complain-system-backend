import express from 'express'
import { createComplain, delelteComplain, getAllComplain, getComplainById, updateComplain } from '../services/complainService'

const router = express.Router()


router.route('/')
.get(getAllComplain)
.post(createComplain)


router.route('/:id')
.get(getComplainById)
.put(updateComplain)
.delete(delelteComplain)


export default router