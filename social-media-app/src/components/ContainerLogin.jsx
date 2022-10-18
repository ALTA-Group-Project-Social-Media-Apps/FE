import React from "react";

function ContainerHome({ children }) {
  return (
    <div className="w-full h-screen bg-background-color">
      <div className="navbar bg-white shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl font-bold text-sosmed-secondary-color">
            Sosmed Apps
          </a>
        </div>
        <div className="flex-none gap-5">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-circle border-none bg-white hover:bg-background-color "
            >
              <div className="indicator ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#5699BE"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="transparent"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>

                <span className="bg-badge-red text-white text-xs rounded-full w-5 h-5 flex justify-center items-center  indicator-item">
                  2
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content w-72 bg-white shadow-lg overflow-auto border"
            >
              <div className="card-body">
                <span className="flex justify-between items-baseline">
                  <p className="font-bold text-lg text-sosmed-primary-color-dark">
                    Notification
                  </p>
                  <button className="text-sosmed-secondary-color hover:text-sosmed-primary-color-dark">
                    Clear all
                  </button>
                </span>
                <span className=" w-full flex flex-col text-sosmed-primary-color-dark space-y-2">
                  <a>
                    <strong>Username</strong> telah mengomentari postingan anda
                  </a>
                  <a>
                    <strong>Username</strong> telah mengomentari postingan anda
                  </a>
                  <a>
                    <strong>Username</strong> telah mengomentari postingan anda
                  </a>
                  <a>
                    <strong>Username</strong> telah mengomentari postingan anda
                  </a>
                </span>
                <div className="w-full flex justify-center mt-3">
                  <button className="px-8 py-1 rounded-lg bg-white text-sosmed-secondary-color border-2 border-sosmed-secondary-color hover:bg-sosmed-secondary-color hover:border-white hover:text-white">
                    Loadmore
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact w-40 dropdown-content p-2 rounded-box border bg-white shadow-lg text-sosmed-primary-color-dark"
            >
              <li>
                <a>My Profile</a>
              </li>
              <li>
                <a>Darkmode</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function ContainerLogin({ children }) {
  return (
    <div className="w-full h-screen bg-background-color">
      <div className="navbar flex justify-between bg-white shadow-md">
        <a className="btn btn-ghost normal-case text-xl font-bold text-sosmed-secondary-color">
          Sosmed App
        </a>
        <label
          htmlFor="my-modal-3"
          className="px-6 py-1 border-2 rounded-md border-sosmed-secondary-color font-semibold text-sosmed-secondary-color hover:bg-sosmed-secondary-color hover:text-white mr-6 cursor-pointer"
        >
          Login
        </label>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default (ContainerHome, ContainerLogin);
