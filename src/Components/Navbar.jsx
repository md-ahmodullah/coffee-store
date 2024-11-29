import logo from "/src/assets/images/more/logo1.png";
export default function Navbar() {
  return (
    <>
      <section className="bg-yellow-950">
        <div className="w-10/12 mx-auto">
          <div className="flex items-center justify-center gap-4 py-2">
            <div className="w-12">
              <img src={logo} alt="" className="w-full" />
            </div>
            <h1 className="text-lg md:text-xl lg:text-3xl text-slate-200 font-bold">
              Espresso Emporium
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
