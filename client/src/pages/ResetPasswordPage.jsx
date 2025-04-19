import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import Loading from "../components/Loader";
import { useResetPasswordMutation } from "../redux/slices/api/authApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const navigate = useNavigate();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const submitHandler = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-right" });
      return;
    }

    try {
      const res = await resetPassword({
        email: data.email,
        newPassword: data.newPassword
      }).unwrap();
      
      toast.success(res.message || "Password reset successfully. Please log in with your new password.");
      setTimeout(() => {
        navigate("/log-in");
      }, 2000);
    } catch (error) {
      console.error("Reset Error:", error);
      toast.error(error?.data?.message || error?.error || "Password reset failed", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* Left Side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
              Reset your password!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
              <span>Task Tracker</span>
              <span>Password Reset</span>
            </p>
            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-4 bg-white px-10 pt-14 pb-14"
          >
            <div>
              <p className="text-blue-600 text-3xl font-bold text-center">
                Reset Password
              </p>
              <p className="text-center text-base text-gray-700">
                Enter your email and new password.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <Textbox
                placeholder="Email Address"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-full"
                register={register("email", {
                  required: "Email Address is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />

              <Textbox
                placeholder="Your new password"
                type="password"
                name="newPassword"
                label="New Password"
                className="w-full rounded-full"
                register={register("newPassword", {
                  required: "New Password is required!",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                error={errors.newPassword ? errors.newPassword.message : ""}
              />

              <Textbox
                placeholder="Confirm new password"
                type="password"
                name="confirmPassword"
                label="Confirm New Password"
                className="w-full rounded-full"
                register={register("confirmPassword", {
                  required: "Please confirm your new password!",
                })}
                error={errors.confirmPassword ? errors.confirmPassword.message : ""}
              />

              {isLoading ? (
                <Loading />
              ) : (
                <Button
                  type="submit"
                  label="Reset Password"
                  className="w-full h-10 bg-blue-700 text-white rounded-full"
                />
              )}
            </div>

            <div className="text-sm text-gray-500 flex gap-2 justify-center">
              <span
                className="hover:text-blue-600 underline cursor-pointer"
                onClick={() => navigate("/log-in")}
              >
                Back to Login
              </span>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPasswordPage; 