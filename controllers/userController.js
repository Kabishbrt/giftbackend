const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { email, password, address, firstName, lastName, phoneNumber, state } = req.body;

   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }


    const newUser = new User({
      email,
      password, 
      address,
      firstName,
      lastName,
      phoneNumber,
      state
    });


    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getUserDataTest = async (req, res) => {
    try {
      const userId = req.params.id; 
      console.log(JSON.stringify(userId)); 
  
      const user = await User.findOne({ _id: userId });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User found', data: user });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Send the userId in the response
      res.status(200).json({ message: 'Login successful', userId: user._id });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };