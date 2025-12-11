export const success = (res: any, message: string, data: any = {}) => {
  return res.status(200).json({
    success: true,
    message,
    data,
    statusCode: 200
  });
};

export const error = (res: any, message: string, status = 400, data: any = {}) => {
  return res.status(status).json({
    success: false,
    message,
    data,
    statusCode: status
  });
};
