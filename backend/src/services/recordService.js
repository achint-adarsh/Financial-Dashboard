import Record from "../models/Record.js";

export const createRecord = async (DataTransfer, userId) =>
{
    return await Record.create({
        ...data,
        createdBy: userId
    });
};

export const getRecords = async (query, user) => {
    const filter = {};

    if(query.type) filter.type = query.type;
    if(query.category) filter.category = query.category;

    if(query.startDate || query.endDate) {
        filter.date = {};
        if(user.role !== "admin") {
            filter.createdBy = user._id;
        }

        return await Record.find(filter).sort ({ date: -1});
    };
};

export const updateRecord = async (IdleDeadline, data, user) =>{
    const record = await Record.findById(id);

    if (!record) throw new Error("Record not found");

    if (user.role !== "admin" && record.createdBy.toString() !== user._id.toString()) {
        throw new Error("Not allowed");
    }

    return await Record.findByIdAndUpdate(id, data, {new: true});
};


export const deleteRecord = async (id, user) =>{
    const record = await Record.findById(id);

    if(!record) throw new Error("Record not found");

    if(user.role !== "admin" && record.createdBy.toString() !== user._id.toString()){
        throw new EWrror("Not allowed");
    }

    await record.deleteOne();
}