import {ReactNode} from "react";
// Assets
import DarkLogo from "./assets/logo-dark.svg";
import LightLogo from "./assets/logo-light.svg";
import Node from "./assets/icons/nodejs.svg";
import TS from "./assets/icons/ts.svg";
import Python from "./assets/icons/python.svg";
import Golang from "./assets/icons/golang.svg";
import ReactSVG from "./assets/icons/react.svg";
import Postgresql from "./assets/icons/postgresql.svg";
import Mongo from "./assets/icons/mongodb_2.svg";
import Docker from "./assets/icons/docker.svg";
import Nginx from "./assets/icons/nginx.svg";
import Git from "./assets/icons/git.svg";

const rows: { items: { el: ReactNode, name: string }[] }[] = [
    {
        items:
            [
                {el: <Node/>, name: "Node.js"},
                {el: <TS/>, name: "TypeScript"},
                {el: <Python/>, name: "Python"},
                {el: <Golang/>, name: "Golang"}
            ]
    },
    {
        items:
            [
                {el: <ReactSVG/>, name: "React"},
                {el: <Postgresql/>, name: "PostgreSQL"},
                {el: <Mongo/>, name: "MongoDB"},
                {el: <Docker/>, name: "Docker"},
            ]
    },
    {
        items:
            [
                {el: <></>, name: ""},
                {el: <Nginx/>, name: "Nginx"},
                {el: <Git/>, name: "Git"},
                {el: <></>, name: ""},
            ]
    }
]

function App() {
    return (
        <main
            className="w-full h-screen bg-secondary-500 dark:bg-primary-500 dark:text-secondary-500 flex max-w p-12 text-primary-500">
            <section className="flex-1 px-8">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className="py-4 flex justify-center items-center w-full dark:hidden">
                            <DarkLogo/>
                        </div>
                        <div className="hidden py-4 dark:flex justify-center items-center w-full">
                            <LightLogo/>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-justify text-lg">
                                <b>Hello</b>, I am a <b>Fullstack Developer</b> from Uzbekistan.
                                Currently working for State Unitary Enterprise “Technocorp”
                                based in Tashkent.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 justify-center gap-8">
                        <div>
                            <h1 className="font-konstant text-center text-4xl">EDUCATION</h1>
                        </div>
                        <div className="flex flex-col gap-4 border-b-2 border-r-2 pb-4 border-primary-500 pr-4">
                            <h2 className="text-3xl font-semibold">
                                TASHKENT STATE TECHNICAL UNIVERSITY
                                <span className="text-base align-top font-semibold">
                  {" "}
                                    2017-2021
                </span>
                            </h2>
                            <h3 className="text-2xl font-semibold">
                                Mechatronics and Robotics
                            </h3>
                            <p>
                                Studied mechanical, electrical engineering with blend of
                                computer science. Programming robotics with controllers and
                                designing the system.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 border-b-2 border-r-2 pb-4 border-primary-500 pr-4">
                            <h2 className="text-3xl font-semibold">
                                ASIA PACIFIC UNIVERSITY
                                <span className="text-base align-top font-semibold">
                  {" "}
                                    2016-2017
                </span>
                            </h2>
                            <h3 className="text-2xl font-semibold">Software Engineering</h3>
                            <p>
                                Studied computer science, gained foundation for programming,
                                learned algorithms and data structure as well as discrete
                                mathematics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex-1 border-x-2 border-primary-500">
                <div className="flex flex-col border-primary-500 border-b-2">
                    <div className="flex flex-col gap-4 px-8 pb-4">
                        <h1 className="font-konstant text-4xl">INFORMATION</h1>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl font-semibold">
                                Islom Jumaniyozov (@eeslum)
                            </h2>
                            <p className="text-lg">
                                <span className="font-medium">Born in:</span> 13/09/1997{" "}
                                <span className="font-semibold">|</span> Khwarezm, Uzbekistan
                            </p>
                            <p className="text-lg">
                                <span className="font-medium">Email:</span>{" "}
                                Jumaniyozovse@gmail.com
                            </p>
                            <p className="text-lg">
                                <span className="font-medium">Phone:</span> +998 (90) 069-58-69
                            </p>
                            <p className="text-lg">
                                <span className="font-medium">Instagram:</span> @eeslum{" "}
                                <span className="font-semibold">/</span>{" "}
                                <span className="font-medium">Telegram:</span> @eeslum
                            </p>
                            <p className="text-lg">
                                <span className="font-medium">Twitter:</span> @eeslum_music
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 px-8">
                    <div className="pt-8">
                        <h1 className="font-konstant text-4xl  text-center">
                            TECHNOLOGIES
                        </h1>
                    </div>
                    <div className="flex flex-col gap-6">
                        {rows.map(el => (
                            <ul className="flex flex-1">
                                {
                                    el.items.map(item => (
                                        <li className="flex flex-col flex-1 font-semibold text-lg justify-center items-center gap-2">
                                            <div className="fill-primary-500">{item.el}</div>
                                            {item.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 px-8">
                    <div className="pt-8">
                        <h1 className="font-konstant text-4xl  text-center">
                            LANGUAGES
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <p className="text-lg flex-1"><span
                                className="font-semibold">English - C1 </span><em>(FLUENT)</em>
                            </p>
                            <p className="text-lg flex-1"><span
                                className="font-semibold">German - A2 </span><em>(ELEMENTARY)</em>
                            </p>
                        </div>
                        <div className="flex">
                            <p className="text-lg flex-1"><span
                                className="font-semibold">Russian - C2 </span><em>(FLUENT)</em></p>
                            <p className="text-lg flex-1"><span
                                className="font-semibold">Uzbek - </span><em>NATIVE</em></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex-1 px-8">
                <div className="flex flex-col">
                    <div className="flex flex-col mt-8 justify-center gap-8">
                        <div>
                            <h1 className="font-konstant text-center text-4xl">WORK EXPERIENCE</h1>
                        </div>
                        <div className="flex flex-col gap-4 border-b-2 border-l-2 pb-4 border-primary-500 pl-4">
                            <h2 className="text-3xl font-semibold">
                                TECHNOCORP
                                <span className="text-base align-top font-semibold">
                  {" "}
                                    12/2021 - NOW
                </span>
                            </h2>
                            <h3 className="text-2xl font-semibold">
                                Leading Specialist
                            </h3>
                            <p>
                                Fullstack Developer making RESTful APIs and Single Page Applications for various
                                internal uses. Automating tedious manual work and boosting productivity of departments
                                and workers.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 border-b-2 border-l-2 pb-4 border-primary-500 pl-4">
                            <h2 className="text-3xl font-semibold">
                                BOTMAKER.uz
                                <span className="text-base align-top font-semibold">
                  {" "}
                                    08/2020 - 03/2021
                </span>
                            </h2>
                            <h3 className="text-2xl font-semibold">Junior Javascript Developer</h3>
                            <p>
                                Developed many kind of bots for shops, contests and organization. Automated daily tasks
                                for managers to monitor their employees work schedule and results. Made SPAs in React
                                framework.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 border-b-2 border-l-2 pb-4 border-primary-500 pl-4">
                            <h2 className="text-3xl font-semibold">
                                EOPC (Uzcard)
                                <span className="text-base align-top font-semibold">
                  {" "}
                                    01/2019 - 08/2019
                </span>
                            </h2>
                            <h3 className="text-2xl font-semibold">Specialist of 3rd degree</h3>
                            <p>
                                Tested, analyzed software applications and hardware for ATM. Provided support service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


export default App;
