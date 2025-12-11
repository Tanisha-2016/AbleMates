import { RoleEnum } from "../enums/RoleEnum";


export const registerValidationRules = {
  first_name: { required: true, message: "First name is required" },
  last_name: { required: true, message: "Last name is required" },
  email: { required: true, type: "email", message: "Valid email is required" },
  phone: { required: true, type: "phone", message: "Phone number is required" },
  password: { required: true, message: "Password is required" },
  confirm_password: { required: true, message: "Confirm password is required" },

  country: { required: true, message: "Country is required" },
  state: { required: true, message: "State is required" },
  city: { required: true, message: "City is required" },

  role: {
  required: true,
  type: "role",
  allowed: Object.values(RoleEnum).filter(r => r !== RoleEnum.SUPER_ADMIN),
  message: "Invalid value for role"
}

};

export const loginValidationRules = {
  email_or_phone: { 
    required: true,
    message: "Email or phone is required"
  },
  password: {
    required: true,
    message: "Password is required"
  }
};


