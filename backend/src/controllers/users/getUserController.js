import { getUser } from '../../services/users';

// This is where a route is handled, the function MUST accept 2 params request and response.
// Request will include all the information of the INCOMING request
// Response will be used to send OUTGOING information

export default async (req, res) => {
	// Controller will call various service to handle the request without directly handling
	// Util function could be added below to help with the job
	const user = await getUser();
	// checkUser(user);
	return res.status(200).json(user);
};

// const checkUser = () => {}
