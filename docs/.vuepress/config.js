module.exports = {
    themeConfig: {
        logo: '/assets/img/logo.jpg',
        // navbar: false,
        nav: [{
                text: 'Home',
                link: '/'
            },

            {
                text: 'External',
                link: 'https://google.com'
            },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [{
                        text: 'Chinese',
                        link: '/language/chinese/'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese/'
                    }
                ]
            },
            {
                text: 'Languages',
                items: [{
                        text: 'Group1',
                        items: [{
                            text: 'Home',
                            link: '/'
                        }, {
                            text: 'Home',
                            link: '/'
                        }, ]
                    },
                    {
                        text: 'Group2',
                        items: [{
                            text: 'Home',
                            link: '/'
                        }, {
                            text: 'Home',
                            link: '/'
                        }, ]
                    }
                ]
            },
            {
                text: 'Guide',
                link: '/about'
            },
        ],
        sidebar: {
            "/css/": [
                'c-aaa',
                'c-bbb',
                'c-ccc',
            ],
            "/javascript/": [
                'j-aaa',
                'j-bbb',
                'j-ccc',
            ]
        }
    }
}