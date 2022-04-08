// created by Irina Shushkevych
const userService = require("../../service/auth");
const { httpMessage } = require('../../libs/messages')

const login = async (req, res, next) => {
  const data = await userService.loginUser(req.body);

  res.status(httpMessage.OK.code).json({
    status: httpMessage.OK.message,
    code: httpMessage.OK.code,
    data: {
      token: data.token,
      user: {
        name: data.name,
        email: data.email,
        subscription: data.subscription,
      },
    },
  });
};

module.exports = login;
