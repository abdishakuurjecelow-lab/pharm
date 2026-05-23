// // src/routes/auth.routes.js
// import { Router } from "express";
// import { signup, login, me } from "../controllers/auth.controller.js";
// import auth from "../middleware/auth.js";

// const router = Router();
// router.post("/signup", signup);
// router.post("/login", login);
// router.get("/me", auth, me);

// export default router;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// // src/routes/auth.routes.js
// import { Router } from "express";
// import { signup, login, me } from "../controllers/auth.controller.js";
// import { auth } from "../middlewares/auth.js"; // <-- PLURAL "middlewares"
// const router = Router();

// router.post("/signup", signup);
// router.post("/login", login);
// router.get("/me", auth, me);

// export default router;




//LAstttttttttttttttttttttttttttt

// // src/routes/auth.routes.js
// import { Router } from "express";
// import { signup, login, me } from "../../controllers/auth.controller.js";
// import { auth } from "../../middlewares/auth.js";

// const router = Router();
// router.post("/signup", signup);
// router.post("/login", login);
// router.get("/me", auth, me);

// export default router;


//------------------------------------

// src/routes/auth.routes.js
import { Router } from "express";
import { signup, login, me } from "../controllers/auth.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", auth, me);

export default router;
