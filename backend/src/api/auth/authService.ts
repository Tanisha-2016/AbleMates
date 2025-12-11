import { userModel } from "../../models/userModel";
import { hashPassword } from "../../utils/password";
import { generateToken } from "../../utils/jwt";
import { RoleEnum } from "../../enums/RoleEnum";
import { comparePassword } from "../../utils/password";


export const registerService = async (data: any) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    password,
    country,
    state,
    city,
    role,
    is_physically_disabled,
    disability_unique_id,
  } = data;

  // Prevent Restricted Role Signup
  if (role === RoleEnum.SUPER_ADMIN) {
    throw new Error("You cannot register as Super Admin");
  }

  // Check Duplicate Email
  const existing = await userModel.findByEmail(email);
  if (existing) {
    throw new Error("Email already exists");
  }
  const existingPhone = await userModel.findByPhone(phone);
  if (existingPhone) throw new Error("Phone number already exists");

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Insert user
  const newUserData = {
  first_name,
  last_name,
  email,
  phone,
  password: hashedPassword,
  country,
  state,
  city,
  role,
  is_physically_disabled: !!is_physically_disabled,
  disability_unique_id: is_physically_disabled ? disability_unique_id : null,

  is_mobile_verified: false,
  mobile_verified_at: null
};


  const [userId] = await userModel.createUser(newUserData);
  const user = await userModel.findById(userId);

  // Generate JWT
  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return { user, token };
};


export const loginService = async (data: any) => {
  const { email_or_phone, password } = data;

  // ---- FIND USER ----
  const user =
    await userModel.findByEmail(email_or_phone) ||
    await userModel.findByPhone(email_or_phone);

  // USER NOT FOUND
  if (!user) {
    throw new Error("Invalid email or phone");
  }

  // NOT VERIFIED
  if (!user.is_mobile_verified) {
    return {
      needsVerification: true,
      phone: user.phone,
      message: "Mobile number is not verified"
    };
  }

  // ---- PASSWORD CHECK ----
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }

  // ---- SUCCESS ----
  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

     // TOTAL USERS COUNT (add this)
  const totalUsers = await userModel.countUsers();

  return {
    token,
    total_users: totalUsers,
    user: {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      is_mobile_verified: user.is_mobile_verified
    }
  };
};
