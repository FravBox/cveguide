// Sidebar navigation for Docute.
// Edit this file to add, remove, or reorder sidebar items.
// Each entry in `children` maps to a .md file in the repo root.
// `toc: true` (the default) makes Docute automatically inject the
// active page's headers as collapsible sub-links in the sidebar.

window.SIDEBAR = [
  {
    title: 'Contents',
    toc: true,          // auto sub-links from page headers
    collapsable: false,  // the section has an expand/collapse arrow
    children: [
      { title: 'Welcome',                  link: '/'          },
      { title: 'Community considerations', link: '/community' },
      { title: 'Tools & Subscriptions',    link: '/tools'     },
      { title: 'Technicals',               link: '/tech'      },
      { title: 'Schedule & To Do Lists',   link: '/schedule'  },
    ]
  }
]
