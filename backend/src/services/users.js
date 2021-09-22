// This is where you should query and handle your database
// This case will be hardcoded with the return as an example of working stuff
import userModel from '../models/users';

export const getUser = async () => {
	return { id: 1, name: 'test_user' };
};

// Example only!
export const getUserFromDB = async () => {
	return await userModel.find({});
};
