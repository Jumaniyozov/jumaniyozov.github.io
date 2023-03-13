import {Education} from "./components/Education";
import {GeneralInfo} from "./components/GeneralInfo";
import {WorkExperience} from "./components/WorkExperience";


function App() {
    return (
        <main>
            {/*<div className="absolute"></div>*/}
            <div className="w-full h-screen bg-secondary-500 dark:bg-primary-500 dark:text-secondary-500
                flex max-w 2xl:py-8 2xl:px-8 xl:py-8 xl:px-6 3xl:py-12 text-primary-500">
                <Education/>
                <GeneralInfo/>
                <WorkExperience/>
            </div>
        </main>
    );
}


export default App;
