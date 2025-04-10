import UserModel from '../models/UserModel.js';
const UserController = {
    createUser: async (req, res) => {
        try {
            const result = await UserModel.create(req.body);
            res.status(201).json(result);

        }
        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Error creating user' });
        }
    },

    getUserById: async (req, res) => {
        try {
            const result = await UserModel.findById(req.params.id);
            res.status(200).json(result);
        }

        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Error fetching user' });
        }


    },

    deleteUser: async (req, res) => {
        try {
            const result = await UserModel.findByIdAndDelete(req.params.id);
            res.status(200).json(result);
        }

        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Error deleting user' });
        }
    },

    updateUser: async (req, res) => {
        try {
            const result = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(result)
        }


        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Error updating user' });
        }
    }
}

export default UserController;