import {Router} from 'express';
import {verifyJWT} from '../middlewares/auth.middelware.js';
import { 
    registerUser , 
    loginUser, 
    // logoutUser, 
    // refreshAccessToken, 
    // changeCurrentUserPassword, 
    // getUser, 
    // updateUserAccountDetails, 
    // updateUserAvatar, 
    // updateUserCoverImage ,
    // getUserChannelProfile, 
    // getUserWatchHistory,
    // deleteUser
} from '../controllers/user.controller.js';

const router = Router();

router.route("/register").post(registerUser);
router.get("/login", (req, res) => {
    res.render("login"); 
});  
router.get("/register", (req, res) => {
    res.render("register"); 
});   
router.route("/login").post(loginUser);
router.get("/school", (req, res) => {
    res.render("school"); 
});
router.get("/complaint", (req, res) => {
    res.render("complaint"); 
}); 
router.get("/feedback", (req, res) => {
    res.render("feedback"); 
}); 
//secured route

// router.route("/logout").post(verifyJWT,logoutUser);
// router.route("/refresh-token").post(refreshAccessToken);
// router.route("/change-password").post(verifyJWT,changeCurrentUserPassword);
// router.route("/").get(verifyJWT,getUser);
// router.route("/").delete(verifyJWT,deleteUser);
// router.route("/updateAccountDetails").patch(verifyJWT,updateUserAccountDetails);
// router.route("/updateAvatar").patch(upload.single("avatar"),verifyJWT,updateUserAvatar);
// router.route("/updateCoverImage").patch(upload.single("coverImage"),verifyJWT,updateUserCoverImage);
// router.route("/channel/:username").get(verifyJWT,getUserChannelProfile);
// router.route("/history").get(verifyJWT,getUserWatchHistory);

export default router;