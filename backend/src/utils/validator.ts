import { RoleEnum } from "../enums/RoleEnum";

export const validateFields = (data: any, rules: any) => {
  const errors: any = {};

  for (const field in rules) {
    const rule = rules[field];
    let value = data[field];

    // Required check
    if (rule.required && (value === null || value === undefined || value === "")) {
      errors[field] = rule.message;
      continue;
    }

    if (!value) continue;

    // EMAIL
    if (rule.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors[field] = "Invalid email format";
      }
    }

    // PHONE
    if (rule.type === "phone") {
      const phoneRegex = /^[0-9]{7,15}$/;
      if (!phoneRegex.test(value)) {
        errors[field] = "Invalid phone number (must be 7 to 15 digits)";
      }
    }

    // ROLE (CLEAN + NORMALIZE)
    if (rule.type === "role" && rule.allowed) {
      const normalized = value.toLowerCase(); // <-- normalize frontend value to lowercase

      if (rule.allowed.includes(normalized)) {
        data[field] = normalized; // <-- always save lowercase role
      } else {
        errors[field] = "Invalid value for role";
      }
    }
  }

  // PASSWORD MATCH VALIDATION
  if (data.password && data.confirm_password) {
    if (data.password !== data.confirm_password) {
      errors.confirm_password = "Password and Confirm Password do not match";
    }
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
