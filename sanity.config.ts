import { Config } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@schemas';

export const config: Config = {
  name: 'default',
  title: 'RW BUY',
  projectId: 'xx6di94e',
  dataset: 'production',
  basePath: '/studio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
};
