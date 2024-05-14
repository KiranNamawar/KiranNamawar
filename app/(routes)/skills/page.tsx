// Purpose: Display the skills page.

// Importing External Dependencies

// Importing Internal Dependencies
import { getRecentSkills } from '@/app/util/data';
import { formatedDate } from '@/app/util/functions';
import { SkillCard } from '@/app/util/components';

// Exporting the Skills Page
export default async function Page() {
    const recentSkills = await getRecentSkills();
    return (
        <>
            {/* <h2>Skills</h2> */}
            <ul>
                {recentSkills?.map((recentSkill) => (
                    <li
                        key={recentSkill._id}
                        className="m-2 grid  grid-cols-8 "
                    >
                        <h3 id={recentSkill._id.toString()} className="col-span-1 m-2 justify-self-center text-xl font-light">
                            {formatedDate(recentSkill._id)}
                        </h3>
                        <ul className="col-span-7">
                            {recentSkill.skills.map((skill) => (
                                <li key={skill.skillId}>
                                    <SkillCard skill={skill} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}
