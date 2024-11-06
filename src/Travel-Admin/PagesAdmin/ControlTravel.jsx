import { Link } from "react-router-dom";
import imgcard from "../../Travel-User/Imgs/travelcard.png";

function ControlTravel() {
  return (
    <div className="container md:w-[calc(100%-270px)] lg:w-[calc(100%-280px)] pt-16 md:pr-8 pr-[2rem] pl-[6rem] lg:pr-10 md:ml-2 md:mr-[270px] lg:mr-[280px]">
      <h1 className="text-right text-3xl text-price mb-[-10px] font-bold ">
        الرحلات
      </h1>
      <Link to="">
        <div className="flex justify-end py-8 ">
          <div className="max-w-sm bg-white rounded-3xl relative ml-[-22%] md:mr-0">
            <div className="absolute top-0 left-0 p-4 flex ">
              <svg
                className="mr-2 mt-0.5"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.95 17.51C10.66 17.8 10.11 18.08 9.71 18.14L7.25 18.49C7.16 18.5 7.07 18.51 6.98 18.51C6.57 18.51 6.19 18.37 5.92 18.1C5.59 17.77 5.45 17.29 5.53 16.76L5.88 14.3C5.94 13.89 6.21 13.35 6.51 13.06L10.97 8.6C11.05 8.81 11.13 9.02 11.24 9.26C11.34 9.47 11.45 9.69 11.57 9.89C11.67 10.06 11.78 10.22 11.87 10.34C11.98 10.51 12.11 10.67 12.19 10.76C12.24 10.83 12.28 10.88 12.3 10.9C12.55 11.2 12.84 11.48 13.09 11.69C13.16 11.76 13.2 11.8 13.22 11.81C13.37 11.93 13.52 12.05 13.65 12.14C13.81 12.26 13.97 12.37 14.14 12.46C14.34 12.58 14.56 12.69 14.78 12.8C15.01 12.9 15.22 12.99 15.43 13.06L10.95 17.51ZM17.37 11.09L16.45 12.02C16.39 12.08 16.31 12.11 16.23 12.11C16.2 12.11 16.16 12.11 16.14 12.1C14.11 11.52 12.49 9.9 11.91 7.87C11.88 7.76 11.91 7.64 11.99 7.57L12.92 6.64C14.44 5.12 15.89 5.15 17.38 6.64C18.14 7.4 18.51 8.13 18.51 8.89C18.5 9.61 18.13 10.33 17.37 11.09Z"
                  fill="white"
                />
              </svg>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
                  fill="white"
                />
                <path
                  d="M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z"
                  fill="white"
                />
              </svg>
            </div>

            <img
              className="rounded-tl-3xl rounded-tr-3xl w-full"
              src={imgcard}
              alt="no img"
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-primaryTitle text-right">
                شرم الشيخ
              </h5>
              <p className="mb-3 font-normal text-right text-bodycolor">
                بدأت المغامرة بالطيران إلى هذا الجمال الساحر المطل على البحر
                الأحمر
              </p>
              <p className="mb-3 font-normal text-gray-700 text-right">
                EGP <span className="text-price text-lg font-bold">125</span>
              </p>

              <button className="inline-flex items-center px-6 py-1 text-sm text-center text-white bg-secondarybutton rounded-3xl">
                <Link to="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.57031 5.93018L3.50031 12.0002L9.57031 18.0702"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5 12H3.67"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default ControlTravel;
