import { skills } from "../../../data/data";
import SkillCard from "./SkillCard";

export const MyAdvantage = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Top horizontal divider line */}
            <hr className="w-10/12 border-1 border-solid border-gray-400 my-6" />

            {/* Section title */}
            <h3 className="text-center text-3xl font-medium my-6 font-imfell">My Advantage</h3>

            {/* Container for skill cards with responsive layout */}
            <div className="flex flex-wrap justify-center gap-14 my-8 mx-4">
                {skills.map((skill, index) => (
                    /* Rendering each skill as a SkillCard component */
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>

            {/* Bottom horizontal divider line */}
            <hr className="w-10/12 border-1 border-solid border-gray-400 my-6" />
        </div>
    );
};
