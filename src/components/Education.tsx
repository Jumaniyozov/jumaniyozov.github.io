const education = [
    {
        uni: "TASHKENT STATE TECHNICAL UNIVERSITY",
        year: "2017-2021",
        field: "Mechatronics and Robotics",
        description: "Studied mechanical, electrical engineering with blend of computer science.Programming robotics with controllers and designing the system."
    },
    {
        uni: "ASIA PACIFIC UNIVERSITY",
        year: "2016-2017",
        field: "Software Engineering",
        description: "Studied computer science, gained foundation for programming, learned algorithms and data structure as well as discrete mathematics.",
    }
]

export const Education = () => {
    return (
        <section className="flex-1 2xl:px-8 xl:px-4">
            <div className="flex flex-col ">
                <div className="flex 2xl:flex-row 2xl:gap-2 xl:gap-2">
                    <div className="flex justify-center items-center dark:hidden">
                        <svg className="2xl:h-24 xl:h-24" viewBox="0 0 124 124" fill="none"
                             preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.0943 60.9705V16.1705H39.8303V60.9705H35.0943Z" fill="#2A2D31"/>
                            <path
                                d="M88.1784 108.384C85.6611 108.384 83.2931 107.829 81.0744 106.72C78.8984 105.611 77.1491 104.032 75.8264 101.984L78.5784 98.784C79.8157 100.576 81.2451 101.941 82.8664 102.88C84.4877 103.819 86.2797 104.288 88.2424 104.288C93.7891 104.288 96.5624 101.003 96.5624 94.432V67.296H80.1784V63.2H101.234V94.24C101.234 98.976 100.125 102.517 97.9064 104.864C95.7304 107.211 92.4877 108.384 88.1784 108.384Z"
                                fill="#2A2D31"/>
                            <path d="M122 2.03771L2.00972 122M2 2H121.99V121.962H2V2Z" stroke="#2A2D31"
                                  strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className="flex justify-center items-center border-primary-500 border-l-2 2xl:pl-2">
                        <p className="text-justify 2xl:text-md xl:text-base">
                            <b>Hello</b>, I am a <b>Fullstack Developer</b> from Uzbekistan.
                            Currently working for State Unitary Enterprise “Technocorp”
                            based in Tashkent.{" "}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col 2xl:mt-10 justify-center 2xl:gap-6">
                    <div>
                        <h1 className="font-konstant text-center 2xl:text-4xl">EDUCATION</h1>
                    </div>
                    <div className="flex flex-col 2xl:gap-10">
                        {education.map(el => (
                            <div key={el.field}
                                 className="border-primary-500 flex flex-col  border-b-2 border-r-2 2xl:gap-2 2xl:pb-4  2xl:pr-4">
                                <h2 className="2xl:text-2xl font-semibold">
                                    {el.uni}
                                    <span className="2xl:text-sm align-top font-semibold">{" "}{el.year}</span>
                                </h2>
                                <h3 className="2xl:text-xl font-semibold">
                                    {el.field}
                                </h3>
                                <p>
                                    {el.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}