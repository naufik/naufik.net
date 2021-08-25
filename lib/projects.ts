import Path from 'path';
import File from 'fs';
import Matter from 'gray-matter';

const ENTRIES_REGEX = /\.md$/i;
const projectFolder = Path.join(process.cwd(), 'data', 'projects');

export const getAllProjectIds = () => {
  return File.readdirSync(projectFolder)
    .filter(filename => ENTRIES_REGEX.test(filename))
    .map(filename => filename.replace(ENTRIES_REGEX, ''));
}

export const getProjectPageById = (projectId: string) => {
  // TODO: add optional .mdx extension support
  const fileContents = File.readFileSync(Path.join(
    projectFolder, `${projectId}.md`
  ));

  const { data, content } = Matter(fileContents);

  return {
    meta: data,
    content
  }
}