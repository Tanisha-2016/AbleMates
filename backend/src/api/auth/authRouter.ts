import { Router } from "express";
import { 
  registerController,
  getCountries,
  getProvinces 
} from "./authController";

const router = Router();

router.post("/register", registerController);

// Country API
router.get("/countries", getCountries);

// Provinces API
router.get("/provinces/:iso2", getProvinces);

export default router;
