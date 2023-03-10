
const work = [
    {
        org: "TECHNOCORP",
        year: "12/2021 - NOW",
        position: "Leading Specialist",
        description: "Fullstack Developer making RESTful APIs and Single Page Applications for various internal uses. Automating tedious manual work and boosting productivity of departments and workers.",
    },
    {
        org: "BOTMAKER.uz",
        year: "08/2020 - 03/2021",
        position: "Junior Javascript Developer",
        description: "Developed many kind of bots for shops, contests and organization. Automated daily tasks for managers to monitor their employees work schedule and results. Made SPAs in React framework.",
    },
    {
        org: "EOPC (Uzcard)",
        year: "01/2019 - 08/2019",
        position: "Specialist of 3rd degree<",
        description: "Tested, analyzed software applications and hardware for ATM. Provided support service.",
    },
]

export const WorkExperience = () => {
    return (
        <section className="flex-1 2xl:px-8 xl:px-4">
            <div className="flex flex-col">
                <div className="flex flex-col justify-center gap-8">
                    <div>
                        <h1 className="font-konstant text-center 2xl:text-4xl">WORK EXPERIENCE</h1>
                    </div>
                    <div className="flex flex-col 2xl:gap-6">
                        {work.map(el => (
                            <div key={el.org}
                                 className="border-primary-500 flex flex-col  border-b-2 border-r-2 2xl:gap-2 2xl:pb-4  2xl:pr-4">
                                <h2 className="2xl:text-2xl font-semibold">
                                    {el.org}
                                    <span className="2xl:text-sm align-top font-semibold">{" "}{el.year}</span>
                                </h2>
                                <h3 className="2xl:text-xl font-semibold">
                                    {el.position}
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