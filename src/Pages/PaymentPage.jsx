import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import instaPay from "../Imgs/instapay.png";
import TripDetails from "./TripDetails";
function PaymwntPage() {
  return (
    <>
      <div id="thanksalert">
        <TripDetails />
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative flex items-center justify-center bg-white  shadow-lg w-50 md:p-20 m-2 p-10 rounded-3xl">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <LazyLoadImage src={instaPay} alt=".." className="mx-auto" />
              </div>
              <p className="font-sans text-center text-sm text-black rtl">
                يرجي إرسال المبلغ 150.0 جنيه مصري <br /> علي الرقم التالي علي
                حساب إنستاباي
              </p>
              <p className="font-sans text-center text-sm text-price rtl flex items-center justify-center space-x-2">
                <svg
                  className="mr-2"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8335 8.93317V10.9332C11.8335 13.5998 10.7668 14.6665 8.10016 14.6665H5.56683C2.90016 14.6665 1.8335 13.5998 1.8335 10.9332V8.39984C1.8335 5.73317 2.90016 4.6665 5.56683 4.6665H7.56683"
                    stroke="#05ABEE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.8336 8.93317H9.70023C8.10023 8.93317 7.56689 8.39984 7.56689 6.79984V4.6665L11.8336 8.93317Z"
                    stroke="#05ABEE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.2334 1.3335H10.9001"
                    stroke="#05ABEE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.1665 3.3335C5.1665 2.22683 6.05984 1.3335 7.1665 1.3335H8.91317"
                    stroke="#05ABEE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.1668 5.3335V9.46016C15.1668 10.4935 14.3268 11.3335 13.2935 11.3335"
                    stroke="#05ABEE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.1665 5.3335H13.1665C11.6665 5.3335 11.1665 4.8335 11.1665 3.3335V1.3335L15.1665 5.3335Z"
                    stroke="#05ABEE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                01223456789
              </p>
              <br></br>
              <Link to="/trip-details">
                <button className="bg-primaryTitle text-white w-[100%] h-10 rounded-3xl">
                  الرئيسية
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PaymwntPage;
