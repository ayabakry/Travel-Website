import { Link } from "react-router-dom";
import imgcard from "../Imgs/travelcard.png";

function Travelcard() {
  return (
    <>
      <div className="w-full md:max-w-[90%]">
        <h1 className="text-right px-12 text-3xl mt-20 text-price mb-[-10px] font-bold">
          الرحلات
        </h1>
        <Link to="/trip-details">
          <div className="flex justify-end px-8 py-8">
            <div className="max-w-sm bg-white rounded-3xl  ">
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
                <button className="inline-flex items-center px-6 py-1 text-sm text-center text-white bg-secondarybutton rounded-3xl ">
                  <Link to="/trip-details">
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
    </>
  );
}
export default Travelcard;
