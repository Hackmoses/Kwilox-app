


const registerUser = (req, res) => {
    res.status(200).json({message:"User Registered"})
}


const loginUser = (req, res) => {
    res.status(200).json({message:"User Login"})
}

const loggedIn = (req, res) => {
    res.status(200).json({message:"User Logged in succesfully"})
}

module.exports = {
    registerUser,
    loginUser,
    loggedIn
}