
module.exports = {
    title: 'lxy个人笔记',
    description: '主要用于开始个人系统性学习进行一次记录',
    base: '/learn/',
    theme: 'reco', // 主题
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '冴羽的 JavaScript 博客',
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                    { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            }
        ],
        sidebar: [
            {
                title: 'vuepress注意事项',
                path: '/',
                collapsable: false, // 不折叠
                // children: [
                //     { title: "vuepress", path: '/' },
                // ]
            },
            {
                title: 'vuepress',
                path: '/vuepress/learn',
                collapsable: true,
                // children: [
                //     { title: 'vuepress', path: '/vuepress/learn' }
                // ]
            },
            {
                title: 'js主题内容',
                path: '/js/demo',
                collapsable: false, // 不折叠
                children: [
                    // { title: "个人记录", path: '/js/index' },
                    { title: 'demo', path: '/js/demo2' },
                ]
            },

        ]
    }
}