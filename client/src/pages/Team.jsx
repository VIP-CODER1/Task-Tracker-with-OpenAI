import ResetPassword from "../components/ResetPassword";

const [isResetModalOpen, setIsResetModalOpen] = useState(false);

<div className="flex gap-2">
  <Button
    label="Edit"
    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md"
    onClick={() => handleUserEdit(user)}
  />
  <Button
    label="Reset Password"
    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
    onClick={() => setIsResetModalOpen(true)}
  />
  <Button
    label={user?.isActive ? "Disable" : "Enable"}
    className={`${
      user?.isActive
        ? "bg-red-600 hover:bg-red-700"
        : "bg-green-600 hover:bg-green-700"
    } text-white px-3 py-1 rounded-md`}
    onClick={() => handleActiveUser(user)}
  />
</div>

<ResetPassword open={isResetModalOpen} setOpen={setIsResetModalOpen} /> 