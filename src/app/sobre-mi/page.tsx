import Navbar from "../components/navbar";
import MyCard from "./components/my-card";
import ContactMe from "./components/contact-me";
import MyTechnologies from "./components/my-technologies";

export default function SobreMi() {
  return (
    <>
      <div className="bg-gradient-to-br from-purple-950 to-black-900 lg:h-screen">
        <Navbar></Navbar>
        <div className="lg:flex p-4 lg:space-x-2 font-inter">
          <div className="lg:w-2/5 lg:flex flex-col justify-between">
            <MyCard></MyCard>
            <div className="mt-4">
              <ContactMe></ContactMe>
            </div>
          </div>
          <div className="lg:w-3/4">
            <MyTechnologies></MyTechnologies>
          </div>
        </div>
      </div>
    </>
  );
}
