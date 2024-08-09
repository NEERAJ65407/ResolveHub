// import {Router} from 'express';
// import { publishAComplaint } from '../controllers/complaint.controller.js';
// import {upload} from '../middlewares/multer.middleware.js';
// import { verifyJWT } from '../middlewares/auth.middelware.js';

// const router = Router();

// router.use(verifyJWT);

//     router
//     .route("/")
//     .post(
//         upload.fields([
//             {
//                 name: "video", //used when we want to take multiple files  // this is the multer middleware
//                 maxCount: 1,
//             },
//             {
//                 name: "thumbnail", //the input field name must also be thumbnail in frontend
//                 maxCount: 1,
//             },
            
//         ]),
//         publishAComplaint
//     );

// // router
// //     .route("/:videoId")
// //     .get(getVideoById)
// //     .delete(deleteVideo)
// //     .patch(upload.single("thumbnail"), updateVideo);

// router.route("/toggle/publish/:videoId").patch(togglePublishStatus);
// export default router;