import { useState } from "react";

function Sidebar() {
  //   const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //   const handleLogout = () => {
  //     dispatch(logoutApi()).then((result) => {
  //       if (result.meta.requestStatus === "fulfilled") {
  //         dispatch(logout());
  //         console.log("Token successfully removed from localStorage.");
  //         window.location.href = "/sign-in";
  //       } else {
  //         console.error("Logout failed:", result.error);

  //         // Redirect to sign-in page even if the token is invalid
  //         dispatch(logout());
  //         window.location.href = "/sign-in";
  //       }
  //     });
  //   };
  return (
    <>
      <nav class="fixed top-0 z-50 w-full  border-gray-200 ">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between w-full">
            <div class="flex md:m-8 items-center bg-backbutton rounded-lg p-0.5">
              <button
                // onClick={handleLogout}
                class="flex items-center p-2  rounded-lg "
              >
                <span class="flex-1  whitespace-nowrap text-white font-sans">
                  الخروج
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
                    fill="white"
                  />
                  <path
                    d="M4.55994 11.25L6.62994 9.17997C6.77994 9.02997 6.84994 8.83997 6.84994 8.64997C6.84994 8.45997 6.77994 8.25997 6.62994 8.11997C6.33994 7.82997 5.85994 7.82997 5.56994 8.11997L2.21994 11.47C1.92994 11.76 1.92994 12.24 2.21994 12.53L5.56994 15.88C5.85994 16.17 6.33994 16.17 6.62994 15.88C6.91994 15.59 6.91994 15.11 6.62994 14.82L4.55994 12.75H8.99994V11.25H4.55994Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <button
              data-drawer-target="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              onClick={toggleSidebar}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <span className="sr-only"></span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`fixed right-0 top-0 z-40 w-[270px] lg:w-[280px]  md:mr-5 md:h-[590px]  pt-20 mt-20 bg-primaryTitle border-primary400 rounded-[20px] mt-20transition-transform md:block mr-2  ${
          isSidebarOpen ? "block" : "hidden"
        } bg-primary400 border-primary400`}
        // className={` fixed rounded-[20px] top-0 right-0 z-40 md:w-[250px] md:h-[750px] pt-20 md:mr-10 mr-2 mt-20 transition-transform md:block ${
        //   isSidebarOpen ? "block" : "hidden"
        // } bg-primary400 border-primary400`}
        aria-label="Sidebar"
        dir="rtl"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto md:mt-0 mt-[-3.5rem]">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="/add-travel"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-black  "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.49 7.80863V7.81V16.19C21.49 17.9106 20.9791 19.2238 20.0964 20.1064C19.2138 20.9891 17.9006 21.5 16.18 21.5H7.81C6.08945 21.5 4.77634 20.9891 3.89377 20.1054C3.01114 19.2217 2.5 17.9059 2.5 16.18V7.81C2.5 6.08944 3.01093 4.77618 3.89355 3.89355C4.77618 3.01093 6.08944 2.5 7.81 2.5H16.19C17.9107 2.5 19.2237 3.01097 20.105 3.89333C20.9861 4.77559 21.4947 6.08838 21.49 7.80863ZM13.25 18V13.25H18C18.6861 13.25 19.25 12.6861 19.25 12C19.25 11.3139 18.6861 10.75 18 10.75H13.25V6C13.25 5.31386 12.6861 4.75 12 4.75C11.3139 4.75 10.75 5.31386 10.75 6V10.75H6C5.31386 10.75 4.75 11.3139 4.75 12C4.75 12.6861 5.31386 13.25 6 13.25H10.75V18C10.75 18.6861 11.3139 19.25 12 19.25C12.6861 19.25 13.25 18.6861 13.25 18Z"
                    fill="white"
                    stroke="white"
                  />
                </svg>

                <span class="mr-3 text-white font-sans font-bold text-lg">
                  إضافة الرحلات
                </span>
              </a>
            </li>
            <li>
              <a
                href="/payment-admin"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-black  "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.85 3.95005V7.75005H13.35V3.95005C13.35 3.68005 13.11 3.55005 12.95 3.55005C12.9 3.55005 12.85 3.56005 12.8 3.58005L4.87 6.57005C4.34 6.77005 4 7.27005 4 7.84005V8.51005C3.09 9.19005 2.5 10.28 2.5 11.51V7.84005C2.5 6.65005 3.23 5.59005 4.34 5.17005L12.28 2.17005C12.5 2.09005 12.73 2.05005 12.95 2.05005C13.95 2.05005 14.85 2.86005 14.85 3.95005Z"
                    fill="white"
                  />
                  <path
                    d="M21.5002 14.5V15.5C21.5002 15.77 21.2902 15.99 21.0102 16H19.5502C19.0202 16 18.5402 15.61 18.5002 15.09C18.4702 14.78 18.5902 14.49 18.7902 14.29C18.9702 14.1 19.2202 14 19.4902 14H21.0002C21.2902 14.01 21.5002 14.23 21.5002 14.5Z"
                    fill="white"
                  />
                  <path
                    d="M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
                    fill="white"
                  />
                </svg>

                <span class="flex-1 mr-3 whitespace-nowrap text-white font-sans font-bold text-lg ">
                  إضافة طريقة الدفع
                </span>
              </a>
            </li>
            <li>
              <a
                href="/travelers-data"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-black  "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4345 4.03448C19.5668 4.2424 19.3401 4.48461 19.0998 4.43C18.6298 4.29 18.1098 4.22 17.5798 4.22H14.2796C14.1223 4.22 13.9743 4.14605 13.8798 4.02037L12.7298 2.49C12.589 2.29044 12.7221 2 12.9664 2H15.7198C17.2808 2 18.6559 2.81073 19.4345 4.03448Z"
                    fill="white"
                  />
                  <path
                    d="M20.14 6.54C19.71 6.23 19.22 6 18.69 5.87C18.33 5.77 17.96 5.72 17.58 5.72H13.86C13.28 5.72 13.24 5.67 12.93 5.26L11.53 3.4C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42V17.58C2 20.02 3.98 22 6.42 22H17.58C20.02 22 22 20.02 22 17.58V10.14C22 8.65 21.27 7.34 20.14 6.54ZM14.39 16.34H9.6C9.21 16.34 8.91 16.03 8.91 15.64C8.91 15.26 9.21 14.94 9.6 14.94H14.39C14.78 14.94 15.09 15.26 15.09 15.64C15.09 16.03 14.78 16.34 14.39 16.34Z"
                    fill="white"
                  />
                </svg>

                <span class="flex-1 mr-3 whitespace-nowrap text-white font-sans font-bold text-lg">
                  بيانات الركاب
                </span>
              </a>
            </li>
            <li>
              <a
                href="/all-annoncement"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-black  "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
                    fill="white"
                  />
                  <path
                    d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z"
                    fill="white"
                  />
                  <path
                    d="M18.6699 13.4301H16.7699C14.5899 13.4301 13.4399 14.5801 13.4399 16.7601V18.6601C13.4399 20.8401 14.5899 21.9901 16.7699 21.9901H18.6699C20.8499 21.9901 21.9999 20.8401 21.9999 18.6601V16.7601C21.9999 14.5801 20.8499 13.4301 18.6699 13.4301Z"
                    fill="white"
                  />
                  <path
                    d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z"
                    fill="white"
                  />
                </svg>

                <span class="flex-1 mr-3 whitespace-nowrap text-white font-sans font-bold text-lg">
                  التحكم في الرحلات
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
