const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(res.newAtribute);
  res.status(201).send({ msg: savedData });
  }
  catch (err){
    console.log("this is the error:",err.messege)
    res.send({msg:"Error",Error:err.messege})
  }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(401).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, token: token });
  }
  catch{
    console.log("this is the err:",err.messege)
    res.send({msg:"Error",err:err.messege})
  }
};

const getUserData = async function (req, res) {
try{

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if(userDetails)
     return res.send({status:true,msg:userDetails})
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
}
catch{
  console.log("this is the err:",err.messege)
  res.send({msg:"Error",err:err.messege})
}

};

const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(403).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.send({ status: updatedUser, data: updatedUser });
}
catch{
  console.log("this is the err:",err.messege)
  res.send({msg:"Error",err:err.messege})
}
};

const deleteUser = async function (req, res) {
  try{
      let userId = req.params.userId;
      let user = await userModel.findById(userId);
      //Return an error if no user with the given id exists in the db
      if (!user) {
        return res.status(403).send("No such user exists");
      }
    
      let userData = req.body;
      let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
      res.send({ status: deleteUser, data: deleteUser });
    }
    catch{
      console.log("this is the err:",err.messege)
      res.send({msg:"Error",err:err.messege})
    }
    };
    
    
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser

//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//    console.log(token);
  
//   // If a token is present then decode the token with verify function
//   // verify takes two inputs:
//   // Input 1 is the token to be decoded
//   // Input 2 is the same secret with which the token was generated
//   // Check the value of the decoded token yourself
//   let decodedToken = jwt.verify(token, "functionup-radon");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });