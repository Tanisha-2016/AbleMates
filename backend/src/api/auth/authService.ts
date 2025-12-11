import { userModel } from "../../models/userModel";
import { hashPassword } from "../../utils/password";
import { generateToken } from "../../utils/jwt";
import { RoleEnum } from "../../enums/RoleEnum";

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
