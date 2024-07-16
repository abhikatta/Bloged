"use server";
export const handleLogin = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  return await new Promise((resolve) => setTimeout(resolve, 3000));
};

export const handleSignup = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  return await new Promise((resolve) => setTimeout(resolve, 3000));
};
