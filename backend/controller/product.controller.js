import products from "../schema/products.schema.js";

export const fetch = async (req, res) => {
  try {
    const { page } = req.query;
    const total = await products.countDocuments();
    const skip = (page - 1) * 8;
    const data = await products.find().skip(skip).limit(8).populate('items');
    res.status(200).json({ data, total });
  } catch (error) {
    res.status(500).json(error.message);
  }
};


export const create = async (req, res) => {
  try {
    const data = req.body;
    const user = new products(data);
    await user.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const update = async (req, res) => {
  try {
    await products.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const trash = async (req, res) => {
  try {
    await products.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
