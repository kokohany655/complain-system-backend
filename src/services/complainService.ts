
import { createOne, deleteOne, getAll, getOne, updateOne } from "./handlerFactory";
import Complain from "../model/complain";






export const getAllComplain = getAll(Complain)

export const getComplainById = getOne(Complain)

export const createComplain = createOne(Complain)

export const updateComplain = updateOne(Complain)

export const delelteComplain = deleteOne(Complain)