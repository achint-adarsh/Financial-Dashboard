import Record from "../models/Record.js";

export const getDashboardSummary = async (user) => {
    const matchStage = {};

    if (user.role !== "admin") {
        matchStage.createdBy = user._id;
    }

    const stats = await Record.aggregate([
         { $match: matchStage},

         {
            $group: {
                _id: "$type",
                total: { $sum: "$amount"}
            }
         }
    ]);

    let totalIncome = 0 ;
    let totalExpense = 0 ;
    stats.forEach(item =>{
        if (item._id === "income") totalIncome = item.total;
        if (item._id === "expense") totalExpense = item.total;
    })
    
    const netBalance = totalIncome - totalExpense;

    const categoryBreakdown = await Record.aggregate([
        { $match: matchStage},
        {
            $group: {
                _id: "$category",
                total: {$sum: "$amount"}
            }
        }
    ]);

    const recentTransactions = await Record.find(matchStage)
    .sort({ createdAt: -1})
    .limit(5);

    return {
        totalIncome,
        totalExpense,
        netBalance,
        categoryBreakdown,
        recentTransactions
    };
};