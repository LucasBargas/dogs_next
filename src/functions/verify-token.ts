/* eslint-disable @typescript-eslint/no-unused-vars */

const verifyToken = async (token: string) => {
  if (!token) return false;
  try {
    // await jwtVerify(token, new TextEncoder().encode(""), {
    //   algorithms: ["HS256"],
    // });

    return true;
  } catch (error: unknown) {
    return false;
  }
};

export default verifyToken;
