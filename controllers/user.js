const User = require('../models/user')

async function handleGetAllUsers(req, res) {
  const allDb = await User.find({});
  return res.json(allDb);
}
async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "not found" });
    return res.json(user);
}
async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastname: "nandha" });
    return res.json({ status: "success" });
}
async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
}
async function handleCreateNewUser(req, res) {
    const body = req.body;

    const result = await User.create({
      firstname: body.first_name,
      lastname: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });
  
    return res.status(201).json({ msg: "succuss",id : result._id });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById, 
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}