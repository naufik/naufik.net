import type { NextPage, GetStaticProps } from "next";
import { getAllProjectIds } from "../../lib/projects";

const ProjectsListPage: NextPage<{projects: string[]}> = (props) => {
    return (
        <div>
            <p>Hello!</p>
            <ol>
                {props.projects.map((projectId) => (
                    <li key={projectId}><a href={'/projects/' + projectId}>{projectId}</a></li>
                ))}
            </ol>
        </div>
    )
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            projects: getAllProjectIds(),
        },
    }
}

export default ProjectsListPage;