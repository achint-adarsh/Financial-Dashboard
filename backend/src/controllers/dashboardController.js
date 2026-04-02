import  {getDashboardSummary} from "../services/dashboardService.js";

export const getSummary = async (req, res) =>{
    try {
        const data = await getDashboardSummary(req.user);
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};