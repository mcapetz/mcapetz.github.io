import { Github } from "../assets";
import { Linkedin } from "../assets";

const Menu = () => {

    return(
        <div className="pl-10 sm:pl-20 pt-20 flex flex-col gap-5 justify-left fixed">
            <img className="h-7 w-7 sm:h-10 sm:w-10 hover:rotate-12 duration-300" src={Github} onClick={() => window.open("https://github.com/mcapetz")}/>
            <img className="h-7 w-7 sm:h-10 sm:w-10 hover:rotate-12 duration-300" src={Linkedin}onClick={() => window.open("https://www.linkedin.com/in/margaret-capetz/")}/>
            {/* <Github/>
            <Linkedin/> */}
        </div>
    );
}

export default Menu;