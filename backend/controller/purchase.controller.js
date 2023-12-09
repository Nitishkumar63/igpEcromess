import purchase from "../schema/purchase.schema.js";

export const fetch = async (req, res) => {
  try {
    const { page } = req.query;
    const total = await purchase.countDocuments();
    const skip = page - 1;
    const data = await purchase.find().skip(skip).limit(8);
    res.status(200).json({ data, total });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const create = async (req, res) => {
  try {
    const data = req.body;
    const store = new purchase(data);
    const x = await store.save();
    res.status(200).json(x);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const update = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    await purchase.updateOne({ _id: id }, data);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const trash = async (req, res) => {
  try {
    const id = req.params.id;
    await purchase.deleteOne({ _id: id });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
