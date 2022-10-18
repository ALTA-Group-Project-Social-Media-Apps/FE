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
                  <label
                    htmlFor="my-modal-3"
                    className="px-8 py-1 rounded-lg bg-white text-sosmed-secondary-color border-2 border-sosmed-secondary-color cursor-pointer  hover:bg-sosmed-secondary-color hover:border-white hover:text-white"
                  >
                    Loadmore
                  </label>
                </div>
              </div>
            </div>
          </div>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative bg-white">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle bg-transparent border-none text-sosmed-primary-color-dark text-lg font-bold hover:bg-white hover:text-sosmed-secondary-color absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-xl font-bold  text-sosmed-primary-color-dark">
                Notification
              </h3>
              <ul>
                <li className="py-4 flex items-center justify-between">
                  <div className="w-12 rounded-full">
                    <img
                      className="rounded-full"
                      src="https://placeimg.com/80/80/people"
                    />
                  </div>
                  <a className="w-80  text-black">
                    <strong>Username</strong> telah mengomentari postingan anda
                  </a>
                  <button className=" text-sosmed-primary-color-dark hover:text-sosmed-secondary-color">
                    Hapus
                  </button>
                </li>
                <li className="py-4 flex items-center justify-between">
                  <div className="w-12 rounded-full">
                    <img
                      className="rounded-full"
                      src="https://placeimg.com/80/80/people"
                    />
                  </div>
                  <a className="w-80  text-black">
                    <strong>Username</strong> telah mengomentari postingan anda
                  </a>
                  <button className=" text-sosmed-primary-color-dark hover:text-sosmed-secondary-color">
                    Hapus
                  </button>
                </li>
              </ul>
              <div className="w-full flex justify-center">
                <button className="flex gap-1.5 items-center px-14 py-2 border-2 rounded-lg text-lg font-semibold bg-sosmed-secondary-color text-white border-sosmed-secondary-color hover:bg-white hover:text-sosmed-secondary-color">
                  Clear All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
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

export { ContainerHome, ContainerLogin };
