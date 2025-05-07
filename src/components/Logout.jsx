import React from "react";
import toast from "react-hot-toast";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logout successful", { autoClose: 1000 });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-3 py-2 bg-red-500 cursor-pointer rounded-xl"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
