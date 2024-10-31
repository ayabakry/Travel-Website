import { Lock, Mail } from "lucide-react";
import signinImage from "../adminImgs/travelsignin.png";

function SignIn() {
  return (
    <div class="">
      <div class="min-h-screen flex flex-col items-center justify-center">
        <div class="grid md:grid-cols-2  bg-gray1 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div class=" md:max-w-md bg-white w-full px-4 py-4 md:m-10 border border-2 border-primaryTitle rounded-3xl">
            <form>
              <div>
                <h4 className="text-center text-price text-2xl mb-4">
                  تسجيل الدخول لوحة التحكم
                </h4>
              </div>

              <div class="mt-8">
                <div class="relative flex items-center">
                  <input
                    type="text"
                    className="text-right rounded-3xl bg-gray text-gray-900 pr-12 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-placeholder focus:text-price focus:border focus:border-primaryTitle focus:outline-none focus:bg-white"
                    placeholder="إدخل ايميلك الخاص هنا"
                  />
                  <span className="absolute right-3 flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5Z"
                        stroke="#05ABEE"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L17 9"
                        stroke="#05ABEE"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <br></br>

                <div className="flex items-center relative">
                  <input
                    type="password"
                    className=" text-right rounded-3xl bg-gray text-placeholder pr-12 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-placeholder focus:text-price focus:border focus:border-primaryTitle focus:outline-none focus:bg-white"
                    placeholder="إدخل الرقم السري هنا"
                  />
                  <span className="absolute right-3 flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7897 14.9299C17.7297 16.9799 14.7797 17.6099 12.1897 16.7999L7.47966 21.4999C7.13966 21.8499 6.46966 22.0599 5.98966 21.9899L3.80966 21.6899C3.08966 21.5899 2.41966 20.9099 2.30966 20.1899L2.00966 18.0099C1.93966 17.5299 2.16966 16.8599 2.49966 16.5199L7.19966 11.8199C6.39966 9.21995 7.01966 6.26995 9.07966 4.21995C12.0297 1.26995 16.8197 1.26995 19.7797 4.21995C22.7397 7.16995 22.7397 11.9799 19.7897 14.9299Z"
                        stroke="#05ABEE"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.88965 17.49L9.18965 19.79"
                        stroke="#05ABEE"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
                        stroke="#05ABEE"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div class="mt-12">
                <button
                  type="button"
                  class="w-full shadow-xl py-2.5 px-4 font-bold text-lg tracking-wide rounded-3xl text-white bg-primaryTitle "
                >
                  سجل الدخول
                </button>
              </div>
            </form>
          </div>

          <div class="md:h-full rounded-xl lg:p-12 p-8">
            <img
              src={signinImage}
              class="w-full h-full object-over rounded-xl "
              alt="login-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
