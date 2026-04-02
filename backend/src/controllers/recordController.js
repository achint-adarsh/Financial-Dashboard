import * as recordService from "../services/recordService.js";
import { recordSchema } from "../validations/recordValidation.js";

export const create = async (req, res) => {
    try {
        const validatedData = recordSchema.parse(req.body);

        const record = await recordService.createRecord(
            validatedData,
            req.user._id
        );
        res.status(201).json(record);
    } catch (error) {
        res.status(400).json({ message: error.errors || error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const records = await recordService.getRecords(req.query, req.user);
        res.json(records);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const record = await recordService.updateRecord(
            req.params.id,
            req.body,
            req.user
        );
        res.json(record);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        await recordService.deleteRecord(req.params.id, req.user);
        res.json({ message: "Record deleted suuccessfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

e