import Travelcard from "../Components/Travelcard";
import homepageimg1 from "../Imgs/Cairo.png"
function Homepage(){
    return(
        <>
<img
  src={homepageimg1}
  className="w-full md:h-[550px] object-cover"
/>
<Travelcard/>
</>

);
}
export default Homepage