import tasksModel from "../models/tasksModel.js";

const getAll = async (req, res) => {
  try {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks); // retorna o array de tasks
  } catch (error) {
    console.error("Erro no controller.getAll:", error);
    return res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
};

export default {
  getAll,
};
