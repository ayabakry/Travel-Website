import ExampleofTravels from "../Components/ExampleofTravels";
import Travelcard from "../Components/Travelcard";
import homepageimg1 from "../Imgs/homepage.png";
import logoo from "../Imgs/logo.png"
function Homepage(){
    return(
        <>
<div className="relative ">
  {/* Logo */}
  <div className="absolute top-4 left-4 z-10">
    <img src={logoo} alt="Logo" className="h-16 w-auto" />
  </div>

  {/* Background Image */}
  <img
    src={homepageimg1}
    alt="Background"
    className="w-full object-cover"
  />

  {/* Centered Text */}
  <div className="absolute inset-0 flex items-center justify-end z-20 pr-8">
  <div className="text-right">
    <h3 className="text-white text-2xl md:text-6xl font-bold mb-4 md:mt-0 mt-[4.5rem]">
      نقوم بتقديم مزيد من خدمات الرحلات
    </h3><br></br>
    <h5 className="text-white text-2xl md:mt-0  mt-[-34px] ">
      يسعدنا اهتمامكم وانبساطكم
    </h5>
  </div>
</div>

</div>

<Travelcard/>
<ExampleofTravels/>
</>

);
}
export default Homepage