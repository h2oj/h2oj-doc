module.exports = {
    title: 'Hydrogen OJ Document',
    description: 'To build an efficient online judge system.',
    themeConfig: {
        // logo: '/favicon.ico',
        nav: [
            { text: '部署', link: '/install/' },
            { text: 'API', link: '/api/' }
        ],
        sidebarDepth: 2,
        lastUpdated: '上次更新',
        docsRepo: 'hydrogen-oj/h2oj-doc',
        docsBranch: 'docs',
        editLinks: true,
        editLinkText: '编辑本页',
        displayAllHeaders: true,
        smoothScroll: true,
        sidebar: {
            '/install/': [
                {
                    title: '部署',
                    collapsable: false,
                    children: [
                        '/install/'
                    ],
                }
            ],
            '/api/': [
                {
                    title: 'API',
                    collapsable: false,
                    children: [
                        '/docs/'
                    ],
                }
            ]
        }
    }
};
