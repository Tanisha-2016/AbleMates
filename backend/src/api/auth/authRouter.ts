import { Router } from "express";
import { 
  registerController,
  getCountries,
  getProvinces ,
  verifyMobileController,
  loginController
} from "./authController";

const router = Router();

router.post("/register", registerController);
router.post("/verify-mobile", verifyMobileController);
router.post("/login", loginController);


// Country / State API
router.get("/countries", getCountries);
router.get("/provinces/:iso2", getProvinces);



export default router;
