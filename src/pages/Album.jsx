import NavBar from "../components/NavBar"
import ShowMedia from "../components/ShowMedia";
function Album() {
    return (
      <>
        <NavBar />
        <section className="p-5 md:p-10 md:pl-20 md:pr-20">
          <div className="mb-4 md:mt-10 md:mb-10">
                <h1 className="text-gray-500 text-3xl md:text-5xl">Owen&Cathia</h1>
          </div>
          <ShowMedia/>
        </section>
      </>
  );
}

export default Album;
