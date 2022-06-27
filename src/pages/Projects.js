
import ProjectCard from "../components/ProjectCard";
import XPCard from "../components/XPCard";

import { CCC } from "../assets";
import { OAL } from "../assets";
import { FIN } from "../assets";
import { Default } from "../assets";
import { SWE } from "../assets";

const Projects = () => {
    return (
        <div>
            <div className="flex justify-left sm:justify-center w-full pt-10 pb-40">   
                <div className="flex flex-col gap-5 sm:pl-0 md:pl-20 pl-30 pr-20 w-full sm:w-3/4 max-w-2xl">
                    {/* <div className="bg-grey h-300 relative">
                        <div className="justify-between flex flex-row">
                            <p className="text-5xl sticky top-20">projects.</p>
                            <div className="flex flex-col gap-5">
                                <p className="text-xl">Carbon Conscious Cooking</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="text-3xl sm:text-5xl">
                        projects.
                    </div>
                    <div className="pt-5 sm:pt-10 flex flex-col gap-10 sm:gap-5">
                        <ProjectCard image={CCC} name="Carbon Conscious Cooking" description="Conceived, designed, and wrote e-book with 3000+ views in 45+ countries." link="https://github.com/mcapetz/Cookbook" />
                        <ProjectCard image={OAL} name="Our Anime List" description="Created client-server web-app for collaborative list creation etc for the Anime community." link="https://github.com/hametar0u/CS35L-project" />
                        <ProjectCard image={FIN} name="Friend in Need" description="Facilitated students borrowing items from their peers at LA Hacks 2022." link="https://devpost.com/software/friend-in-need-67l9od" />
                    </div>
                    <div className="text-3xl sm:text-5xl pt-10">
                        experience.
                    </div>
                    <div className="group flex flex-col sm:flex-row gap-1 sm:gap-5 sm:items-center">
                        <div className="text-2xl transform sm:-rotate-90 w-fit h-fit">
                            tech
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className=" flex flex-col gap-2">
                                <p className="flex group-hover:hidden text-xl sm:text-3xl font-bold">Software Engineering Intern</p>
                                <div className="hidden group-hover:flex flex-col gap-2">
                                    <div className="hidden group-hover:flex flex-row gap-2 justify-between items-end">
                                        <p className="hidden group-hover:flex text-xl sm:text-3xl font-bold">Software Engineering Intern</p>
                                        <a href="https://electricfish.co" target="_blank" className="hidden group-hover:flex text-md sm:text-md sm:text-xl underline text-right">Electric Fish↗</a>
                                    </div>
                                    <p className="bg-main p-2 rounded-md w-fit text-white italic">Build community resilience algorithm using data science and machine learning with Kedro and Pandas</p>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <p className="flex group-hover:hidden text-xl sm:text-3xl font-bold">Web Developer</p>
                                <div className="hidden group-hover:flex flex-col gap-2">
                                    <div className="hidden group-hover:flex flex-row gap-2 justify-between items-end">
                                        <p className="hidden group-hover:flex text-xl sm:text-3xl font-bold">Web Developer</p>
                                        <a href="https://empower-health.us/" target="_blank" className="hidden group-hover:flex text-md sm:text-xl underline text-right">Empower Health↗</a>
                                        {/* <p className="hidden group-hover:flex text-xl sm:text-3xl font-bold">eloper</p> */}
                                    </div>
                                    <p className="bg-main p-2 rounded-md w-fit text-white italic">Develop community review web application using React, Node.js for social impact startup to promote equity in healthcare</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="grid grid-cols-2 gap-5">
                            <XPCard image={Default} company="Electric Fish" title="Software Engineering Intern" time="June 2022 - Present" link="https://www.electricfish.co/"/>
                            <XPCard image={Default} company="Empower Health" title="Web Developer" time="Feb 2022 - Present" link="https://empower-health.us/"/>
                        </div> */}
                    </div>

                    <div className="group flex flex-col sm:flex-row gap-1 sm:gap-5 sm:items-center">
                        <div className="text-2xl transform sm:-rotate-90 w-fit h-fit">
                            leadership
                        </div>
                        <div className="flex flex-col gap-2">
                                <div className=" flex flex-col gap-2">
                                    <p className="flex group-hover:hidden text-xl sm:text-3xl font-bold">Technical Director</p>
                                    <div className="hidden group-hover:flex flex-col gap-2">

                                    <div className="hidden group-hover:flex flex-row gap-2 justify-between items-end">
                                        <p className="hidden group-hover:flex text-xl sm:text-3xl font-bold">Technical Director</p>
                                        <a href="https://www.qwerhacks.com/" target="_blank" className="hidden group-hover:flex text-md sm:text-xl underline text-right">SWE @ UCLA↗</a>
                                        {/* <p className="hidden group-hover:flex text-xl sm:text-3xl font-bold">Director</p> */}
                                    </div>
                                    <p className="bg-main p-2 rounded-md w-fit text-white italic">Organize annual UCLA QWER Hacks hackathon to celebrate the queer and trans community in tech</p>
                                </div>
                                </div>
                            <div className=" flex flex-col gap-2">
                                <p className="flex group-hover:hidden text-xl sm:text-3xl font-bold">Outreach Officer</p>
                                <div className="hidden group-hover:flex flex-col gap-2">

                                <div className="hidden group-hover:flex flex-row gap-2 justify-between items-end">
                                    <p className="hidden group-hover:flex text-xl sm:text-3xl font-bold">Outreach Officer</p>
                                    <a href="https://uclaacmai.github.io/" target="_blank" className="hidden group-hover:flex text-md sm:text-xl underline text-right">ACM AI @ UCLA↗</a>
                                    {/* <p className="hidden group-hover:flex text-xl sm:text-3xl font-bold">Officer</p> */}
                                </div>
                                <p className="bg-main p-2 rounded-md w-fit text-white italic">Teach high schoolers ML and AI concepts and provide AI podcast to empower students in tech</p>
                            </div>
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-2 gap-5">
                        <XPCard image={SWE} company="Technical Director" title="SWE @ UCLA" time="May 2022 - Present" link="https://www.qwerhacks.com/"/>
                        <XPCard image={Default} company="Outreach Officer" title="ACM AI @ UCLA" time="May 2022 - Present" link="https://uclaacmai.github.io/"/>
                        </div> */}
                    </div>
                    
                    
                    {/* <div className="text-xl">
                        <ul className="list-square list-inside">
                            <li>Technical</li>
                                <ul className="pl-7 list-disc list-inside text-sm">
                                <li>Software Engineering Intern, Electric Fish Co.</li>
                                <li>Web Developer, Empower Health</li>
                                </ul>
                            <li>Leadership</li>
                                <ul className="pl-7 list-disc list-inside text-sm">
                                <li>Technical Director, Society of Women Engineers @ UCLA</li>
                                <li>Outreach Officer, ACM AI @ UCLA</li>
                                <li>Copresident, Los Altos High School Green Team</li>
                                </ul>
                        </ul>
                    </div> */}
                    <div className="text-3xl sm:text-5xl pt-10">
                        recognition.
                    </div>
                    <div className="text-xl w-full pr-20">
                    <ul className="list-square list-inside text-xs">
                            <li className="py-2">Analog Devices Scholarship, Society of Women Engineers, Santa Clara Valley, 2022</li>
                            <li className="py-2">Society of Women Engineers, Los Angeles Scholarship, 2022</li>
                            <li className="py-2">Northrop Grumman Scholarhip, Society of Women Engineers, University of Los Angeles, 2022</li>
                            <li className="py-2">Dean's List Recognition, UCLA Samueli School of Engineering, 2022</li>
                            <li className="py-2">Dr. Vincent Ho Scholarship in Engineering, UCLA Samueli School of Engineering, 2021</li>
                            <li className="py-2">2nd Award, Biological Science and Engineering Category, Synopsys Science & Technology Championship, 2021</li>
                            <li className="py-2">5th Award, Senior Biochemistry Molecular Biology Category, California Science & Engineering Fair, 2021</li>
                            <li className="py-2">Esther Williams Memorial Endowment Scholarship, Society of Women Engineers, Santa Clara Valley, 2021</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
  };
  
  export default Projects;