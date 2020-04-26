export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea5856b3ea009d6bd4ef300',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-un6gcsam',
                  apiId: '053275cf-3a2f-4db7-8f94-6db47896032c'
                },
                {
                  buildHookId: '5ea5856b03d6d4c416083376',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-85thsw12',
                  apiId: '684c317f-ab39-4bfe-be72-b94b5093c93c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bruknown/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-85thsw12.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
