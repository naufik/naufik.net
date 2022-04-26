import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { getAllProjectIds, getProjectPageById } from "../../lib/projects";
import { ParsedUrlQuery } from "querystring";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";

interface ProjectParams extends ParsedUrlQuery {
  projectId: string;
}

interface ProjectPageProps {
  meta: any;
  content: MDXRemoteSerializeResult<any>;
}

const ProjectPage: NextPage<ProjectPageProps> = (props) => {
  return (
    <div>
      <Link href="/projects">Back to projects</Link>
      <main>
        <div className="projectItem">
          <MDXRemote {...props.content} />
        </div>
      </main>
    </div>
  );
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
      content: await serialize(content),
    },
  };
};

export default ProjectPage;
