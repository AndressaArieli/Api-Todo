import tasksModel from "../models/tasksModel.js";

const getAll = async (req, res) => {
  const tasks = await tasksModel.getAll();
  return res.status(200).json({ message: "controller tudo certo!!" });
};

export default {
  getAll,
};
