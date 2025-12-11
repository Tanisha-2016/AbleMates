

import { Request, Response } from "express";
import { registerService } from "./authService";
import { registerValidationRules } from "../../validations/authValidations";
import { validateFields } from "../../utils/validator";
import { error, success } from "../../middleware/responseHandler";

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
