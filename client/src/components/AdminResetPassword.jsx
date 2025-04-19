import React from "react";
import { useForm } from "react-hook-form";
import { useResetPasswordMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "react-toastify";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "./Textbox";
import Button from "./Button";
import Loading from "./Loader";

const AdminResetPassword = ({ open, setOpen, userEmail = "" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      email: userEmail
    }
  });

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  // Form submit handler
  const handleOnSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.warning("Passwords do not match");
      return;
    }

    try {
      const res = await resetPassword({
        email: data.email,
        newPassword: data.newPassword
      }).unwrap();
      
      toast.success(res.message || "Password reset successfully");
      reset();
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error(err?.data?.message || err.error || "An error occurred");
    }
  };

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-4">
          {/* Modal Title */}
          <Dialog.Title
            as="h2"
            className="text-base font-bold leading-6 text-gray-900 mb-4"
          >
            Reset User Password
          </Dialog.Title>

          {/* Form Fields */}
          <div className="flex flex-col gap-6">
            <Textbox
              placeholder="Email Address"
              type="email"
              name="email"
              label="Email Address"
              className="w-full rounded"
              register={register("email", {
                required: "Email address is required!",
              })}
              error={errors.email?.message}
            />
            <Textbox
              placeholder="New Password"
              type="password"
              name="newPassword"
              label="New Password"
              className="w-full rounded"
              register={register("newPassword", {
                required: "New Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              error={errors.newPassword?.message}
            />
            <Textbox
              placeholder="Confirm New Password"
              type="password"
              name="confirmPassword"
              label="Confirm New Password"
              className="w-full rounded"
              register={register("confirmPassword", {
                required: "Confirm New Password is required!",
              })}
              error={errors.confirmPassword?.message}
            />

            {/* Loading and Buttons */}
            {isLoading ? (
              <div className="py-5 flex justify-center">
                <Loading/>
              </div>
            ) : (
              <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
                <Button
                  type="submit"
                  className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto"
                  label="Reset Password"
                />
                <Button
                  type="button"
                  className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto"
                  onClick={() => setOpen(false)}
                  label="Cancel"
                />
              </div>
            )}
          </div>
        </form>
      </ModalWrapper>
    </>
  );
};

export default AdminResetPassword; 