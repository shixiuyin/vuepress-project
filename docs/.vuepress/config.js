module.exports = {
    title: 'IT蚱蜢哥', 
    description: '今日长缨在手，何时缚住苍龙',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
		['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }],
		['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]

    ],
	plugins: ['@vuepress/back-to-top'],
	themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '博文',
              items: [
                { text: 'Android', link: '/android/' },
                { text: 'ios', link: '/ios/' },
                { text: 'Web', link: '/web/' }
              ] 
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/codeteenager' },
        ],
        sidebar: {
            '/android/': [
                        "",
                        "one",
						"two"
                         ],
                "/ios/":[
                        "",
                        "ios1"
                        ],
                "/web/":[
                        "",
                        "web1"
                             ],
				"/guide/":[
						"",
						"day01",
						"day02",
						"day03",
						"day04",
                        "day05",
						"day06",
						"day07",
						"day08",
						"day09",
						"day10",
						"day11",
						"day12",
						"day13",
						"day14",
						"day15",
						"day16",
						"day17",
						"day18",
						"day19",
						"day20"
						],
							'/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
                
            },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
		/*serviceWorker: true,
        sidebar: 'auto',
	    displayAllHeaders: true
		*/
    }
}