// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CBW\'s Docusaurus POC',
  tagline: 'INR 2024 - but not really',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cbw-dev.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'docusaurus-POC/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cbw-dev', // Usually your GitHub org/user name.
  projectName: 'docusaurus-POC', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-live-codeblock'],
  
  plugins: [ '@datalayer/jupyter-docusaurus-plugin',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'test',
        path: 'Testing',
        routeBasePath: 'Testing',
        sidebarPath: require.resolve('./testSidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'intro',
        path: 'Introduction',
        routeBasePath: 'Introduction',
        sidebarPath: require.resolve('./introSidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'content',
        path: 'Content',
        routeBasePath: 'Content',
        sidebarPath: require.resolve('./contentSidebars.js'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CBW\'s Docusaurus POC',
        logo: {
          alt: 'Bioinformatics.ca Logo',
          src: 'img/logo.png',
        },
        
        items: [
          // Introduction nav bar links
          {to: '/Introduction/intro', label: 'Introduction', position: 'left'},
          {to: '/Introduction/course-schedule', label: 'Schedule', position: 'left'},
          {to: '/Introduction/course-materials', label: 'Downloads', position: 'left'},

          {to: '/Content/day-1', label: 'Content', position: 'left'},

          {to: '/Testing/intro', label: 'Test', position: 'left'},
          
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs\' Tutorial',
          },
          
          {
            href: 'https://github.com/cbw-dev/docusaurus-POC',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Introduction',
            items: [
              {
                label: 'Intro Page',
                to: '/Introduction/intro',
              },
              {
                label: 'Meet Your Faculty',
                to: '/Introduction/meet-your-fac',
              },
              {
                label: 'Course Schedule',
                to: '/Introduction/course-schedule',
              },
              {
                label: 'Course Materials',
                to: '/Introduction/course-materials',
              },
              {
                label: 'Class Photo',
                to: '/Introduction/class-photo',
              },
              {
                label: '\*General Formatting\*',
                to: '/Introduction/general-formatting',
              },
            ],
          },
          {
            title: 'Content',
            items: [
              {
                label: 'Day 1',
                to: '/Content/day-1',
              },
              {
                label: 'Day 2',
                to: '/Content/day-2',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Bioinformatics.ca',
                href: 'https://bioinformatics.ca/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@bioinformaticsdotca',
              },
              {
                label: 'LinkedIn',
                href: 'https://ca.linkedin.com/school/bioinformaticsdotca/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cbw-dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
