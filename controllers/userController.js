import routes from '../routes';
import User from '../models/User';

// Join
export const getJoin = (req, res) => {
  res.render('join', {
    pageTitle: 'Join',
  });
};

export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render('join', { pageTitle: 'Join' });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
    } catch (error) {
      console.log('TCL: postJoin -> error', error);
    }
    // TODO: Register User, Log user in
    res.redirect(routes.home);
  }
};

// Login
export const getLogin = (req, res) =>
  res.render('login', {
    pageTitle: 'Log In',
  });

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

// Logout
export const logout = (req, res) => {
  // TODO: Process Log Out
  res.redirect(routes.home);
};

// User Detail
export const userDetail = (req, res) =>
  res.render('userDetail', {
    pageTitle: 'User Detail',
  });

// Edit Profile
export const editProfile = (req, res) =>
  res.render('editProfile', {
    pageTitle: 'Edit Profile',
  });

// Change Password
export const changePassword = (req, res) =>
  res.render('changePassword', {
    pageTitle: 'Change Password',
  });
