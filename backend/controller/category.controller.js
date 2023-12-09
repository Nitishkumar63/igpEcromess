import Categorys from "../schema/category.schema.js";

export const fetch = async (req, res) => {
  try {
    const { page } = req.query;
    const total = await Categorys.countDocuments();
    const skip = page - 1;
    const data = await Categorys.find().skip(skip).limit(8).populate('product');
    res.status(200).json({ data, total });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const create = async (req, res) => {
  try {
    const data = req.body;
    const category = new Categorys(data);
    const x = await category.save();
    res.status(200).json(x);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    await Categorys.updateOne({ _id: id }, data);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const trash = async (req, res) => {
  try {
    const id = req.params.id;
    await Categorys.deleteOne({ _id: id });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
