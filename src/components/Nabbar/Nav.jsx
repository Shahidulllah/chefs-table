import { CgProfile } from "react-icons/cg";
const Nav = () => {
    return (
        <div className="nav-container flex justify-between mt-10">

          <div className="nav-title">
            <h1 className='text-3xl font-bold'>Recipe Calories</h1>
          </div>

          <div className="nav-menu flex gap-10">
            <a href="#">Home</a>
            <a href="#">Recipes</a>
            <a href="#">About</a>
            <a href="#">Search</a>
          </div>

          <div className="nav-search-profile flex gap-4">
            <label className="input flex items-center border-2 py-2 px-6 rounded-full bg-gray-100">
              <input type="text" className=" rounded-full bg-gray-100" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
            </label>

            <div className="profile avatar placeholder text-center">
              <div className="bg-green-500 text-neutral-content rounded-full  p-3  text-center">
               <CgProfile/>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Nav;