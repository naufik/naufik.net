import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { getAllProjectIds, getProjectPageById } from "../../lib/projects";
import { ParsedUrlQuery } from "querystring";

interface ProjectParams extends ParsedUrlQuery {
  projectId: string;
}

interface ProjectPageErrorProps {
  error: string;
}

interface ProjectPageLoadProps {
  meta: any;
  content: string;
}

type ProjectPageProps = ProjectPageLoadProps | ProjectPageErrorProps;

const ProjectPage: NextPage<ProjectPageProps> = (props) => {
  return <div>{'meta' in props ? props.content : props.error}</div>;
};

export const getStaticPaths: GetStaticPaths<ProjectParams> = async () => {
  return {
    paths: getAllProjectIds().map((projectId) => ({
      params: {
        projectId,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, ProjectParams> = async (
  context
) => {
  if (!context.params) {
    return {
      props: {
        error: "No params",
      },
    };
  }

  const { meta, content } = getProjectPageById(context.params.projectId);

  return {
    props: {
      meta,
      content,
    },
  };
};

export default ProjectPage;