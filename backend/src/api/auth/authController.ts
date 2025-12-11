
import { Request, Response } from "express";
import { registerService, loginService } from "./authService";
import { registerValidationRules, loginValidationRules } from "../../validations/authValidations";
import { validateFields } from "../../utils/validator";
import { error, success } from "../../middleware/responseHandler";
import { userModel } from "../../models/userModel";
// Countries & Provinces JSON
import countries from "../../data/countries.json";
import provincesData from "../../data/provinces.json";


// ---------------- REGISTER USER -----------------
export const registerController = async (req: Request, res: Response) => {
  try {
    const body = req.body || {};

    if (!body || Object.keys(body).length === 0) {
      return error(res, "All fields are required", 400, registerValidationRules);
    }

    const validationErrors = validateFields(body, registerValidationRules);

    if (validationErrors) {
      const allFieldsMissing =
        Object.keys(validationErrors).length === Object.keys(registerValidationRules).length;

      if (allFieldsMissing) {
        return error(res, "All fields are required", 400, validationErrors);
      }

      return error(res, "Validation Error", 400, validationErrors);
    }

    const result = await registerService(body);
    return success(res, "User registered successfully", result);

  } catch (err: any) {
    return error(res, err.message || "Registration failed", 400);
  }
};



// ---------------- GET COUNTRIES -----------------
export const getCountries = (req: Request, res: Response) => {
  try {
    const list = countries || [];

    if (list.length === 0) {
      return success(res, "No countries found", {
        total_countries: 0,
        countries: []
      });
    }

    return success(res, "Countries fetched successfully", {
      total_countries: list.length,
      countries: list
    });

  } catch (err: any) {
    return error(res, err.message || "Failed to fetch countries", 500);
  }
};



// ---------------- GET PROVINCES (BY COUNTRY ISO2) -----------------
export const getProvinces = (req: Request, res: Response) => {
  try {
    const iso2 = req.params.iso2.toUpperCase();
    const list = (provincesData as Record<string, string[]>)[iso2];

    if (!list || list.length === 0) {
      return success(res, "No provinces found", {
        total_provinces: 0,
        provinces: []
      });
    }

    return success(res, "Provinces fetched successfully", {
      total_provinces: list.length,
      provinces: list
    });

  } catch (err: any) {
    return error(res, err.message || "Failed to fetch provinces", 500);
  }
};

export const verifyMobileController = async (req: Request, res: Response) => {
  try {
    const body = req.body || {}; 
    const { phone } = body;

    if (!phone || phone === "") {
      return error(res, "Phone number is required", 400, {
        phone: "Phone number is required"
      });
    }

    const user = await userModel.findByPhone(phone);

    if (!user) {
      return error(res, "User not found with this phone number", 404);
    }

    if (user.is_mobile_verified) {
      return success(res, "Mobile already verified", {
        phone,
        verified: true
      });
    }

    await userModel.updateById(user.id, {
      is_mobile_verified: true,
      mobile_verified_at: new Date().toISOString(),
    });

    const updatedUser = await userModel.findById(user.id);

    return success(res, "Mobile verified successfully", updatedUser);

  } catch (err: any) {
    return error(res, err.message || "Mobile verification failed", 500);
  }
};


export const loginController = async (req: Request, res: Response) => {
  try {
    const body = req.body || {};

    // Validate input
    const validationErrors = validateFields(body, loginValidationRules);

    if (validationErrors) {
      return error(res, "Validation Error", 400, validationErrors);
    }

    const result = await loginService(body);

    // If user is not verified
    if (result.needsVerification) {
      return error(res, result.message, 403, {
        phone: result.phone,
        is_mobile_verified: false
      });
    }

    // Success Login
    return success(res, "Login successful", result);

  } catch (err: any) {
    return error(res, err.message || "Login failed", 401);
  }
};