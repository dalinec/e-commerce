import { Config } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@schemas';
import { rwTheme } from '@src/app/theme';
import StudioNavbar from '@src/components/StudioNavbar';

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

  theme: rwTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
};
