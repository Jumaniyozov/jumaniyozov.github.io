import {ReactNode} from "react";
import Node from "../assets/icons/nodejs.svg";
import TS from "../assets/icons/ts.svg";
import Python from "../assets/icons/python.svg";
import Golang from "../assets/icons/golang.svg";
import ReactSVG from "../assets/icons/react.svg";
import Postgresql from "../assets/icons/postgresql.svg";
import Mongo from "../assets/icons/mongodb_2.svg";
import Docker from "../assets/icons/docker.svg";
import Nginx from "../assets/icons/nginx.svg";
import Git from "../assets/icons/git.svg";
//
// const rows: { key: number, items: { el: ReactNode, name: string }[] }[] = [
//     {
//         key: 1,
//         items:
//             [
//                 {el: <Node/>, name: "Node.js"},
//                 {el: <TS/>, name: "TypeScript"},
//                 {el: <Python/>, name: "Python"},
//                 {el: <Golang/>, name: "Golang"},
//                 {el: <ReactSVG/>, name: "React"},
//             ]
//     },
//     {
//         key: 2,
//         items:
//             [
//
//                 {el: <Postgresql/>, name: "PostgreSQL"},
//                 {el: <Mongo/>, name: "MongoDB"},
//                 {el: <Docker/>, name: "Docker"},
//                 {el: <Nginx/>, name: "Nginx"},
//                 {el: <Git/>, name: "Git"},
//             ]
//     }
// ]

const rows: { el: ReactNode, name: string }[] = [
    {el: <Node/>, name: "Node.js"},
    {el: <TS/>, name: "TypeScript"},
    {el: <Python/>, name: "Python"},
    {el: <Golang/>, name: "Golang"},
    {el: <ReactSVG/>, name: "React"},
    {el: <Postgresql/>, name: "PostgreSQL"},
    {el: <Mongo/>, name: "MongoDB"},
    {el: <Docker/>, name: "Docker"},
    {el: <Nginx/>, name: "Nginx"},
    {el: <Git/>, name: "Git"},
]

const languages = [
    {
        lang: "English - C1",
        em: " (FLUENT)"
    },
    {
        lang: "German - A2",
        em: " (ELEMENTARY)"
    },
    {
        lang: "Russian - C2",
        em: " (FLUENT)"
    },
    {
        lang: "Uzbek -",
        em: " NATIVE"
    },

]

export const GeneralInfo = () => {
    return (
        <section className="flex-1 border-x-2 border-primary-500">
            <div className="flex flex-col border-primary-500 border-b-2">
                <div className="flex flex-col 3xl:gap-4 3xl:px-8 2xl:gap-3 2xl:px-4 2xl:pb-4">
                    <h1 className="font-konstant 3xl:text-4xl 2xl:text-3xl text-center">INFORMATION</h1>
                    <div className="flex flex-col 2xl:gap-2 3xl:gap-4">
                        <h2 className="3xl:text-3xl 2xl:text-2xl font-semibold">
                            Islom Jumaniyozov (@eeslum)
                        </h2>
                        <p className="3xl:text-lg 2xl:text-md">
                            <span className="font-medium">Born in:</span> 13/09/1997{" "}
                            <span className="font-semibold">|</span> Khwarezm, Uzbekistan
                        </p>
                        <p className="3xl:text-lg 2xl:text-md">
                            <span className="font-medium">Email:</span>{" "}
                            Jumaniyozovse@gmail.com
                        </p>
                        <p className="3xl:text-lg 2xl:text-md">
                            <span className="font-medium">Phone:</span> +998 (90) 069-58-69
                        </p>
                        <p className="3xl:text-lg 2xl:text-md">
                            <span className="font-medium">Instagram:</span> @eeslum{" "}
                            <span className="font-semibold">/</span>{" "}
                            <span className="font-medium">Telegram:</span> @eeslum
                        </p>
                        <p className="3xl:text-lg 2xl:text-md">
                            <span className="font-medium">Twitter:</span> @eeslum_music
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col 2xl:gap-4 2xl:px-4 3xl:px-8">
                <div className="2xl:mt-8">
                    <h1 className="font-konstant 3xl:text-4xl 2xl:text-3xl  text-center">
                        TECHNOLOGIES
                    </h1>
                </div>
                <div className="flex flex-col 2xl:gap-6 3xl:gap-8">
                    {/*{rows.map(el => (*/}
                    <ul className="grid 2xl:grid-cols-4 xl:grid-cols-5 justify-items-center 3xl:gap-6 2xl:gap-2">
                        {rows.map(el =>
                            <li key={el.name}
                                className="flex flex-col  font-semibold 2xl:text-sm 3xl:text-base w-0 justify-center items-center 2xl:gap-2">
                                <div className="fill-primary-500">{el.el}</div>
                                {el.name}
                            </li>
                        )}
                    </ul>

                </div>
            </div>
            <div className="flex flex-col 2xl:mt-8 2xl:gap-4 2xl:px-4 3xl:px-8">
                <div>
                    <h1 className="font-konstant 3xl:text-4xl 2xl:text-3xl  text-center">
                        LANGUAGES
                    </h1>
                </div>
                <div className="grid grid-cols-2 justify-items-center 2xl:gap-2 3xl:gap-2">
                    {languages.map(el => (
                        <p key={el.lang} className="3xl:text-base 2xl:text-sm w-full"><span
                            className="font-semibold 3xl:text-lg 2xl:text-base">{el.lang}</span><em>{el.em}</em>
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}
