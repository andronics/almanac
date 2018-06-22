export const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        title: true,
        name: 'Games'
    },
    {
        name: 'Colors',
        url: '/theme/colors',
        icon: 'icon-drop'
    },
    {
        name: 'Typography',
        url: '/theme/typography',
        icon: 'icon-pencil'
    },
    {
        divider: true
    },
    {
        title: true,
        name: 'Modules'
    },
    {
        name: 'Engine',
        url: '/engine',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'Rules',
                url: '/engine/rules',
                icon: 'icon-equalizer'
            },
            {
                name: 'Facts',
                url: '/engine/facts',
                icon: 'icon-list'
            },
            {
                name: 'Operators',
                url: '/engine/operators',
                icon: 'icon-pencil'
            }
        ]
    },

    {
        name: 'Statistics',
        url: '/statistics',
        icon: 'icon-pie-chart'
    },
    {
        name: 'Machine Learning',
        url: '/machine-learning',
        icon: 'icon-layers',
        children: [
            {
                name: 'Models',
                url: '/machine-learning/models',
                icon: 'icon-star',
                badge: {
                    variant: 'success',
                    text: 'NEW'
                }
            },
            {
                name: 'Algorithms',
                url: '/machione-learning/algorithms',
                icon: 'icon-star'
            },
            {
                name: 'Neureal Networks',
                url: '/machine-learning/neureal-networks',
                icon: 'icon-star',
                badge: {
                    variant: 'secondary',
                    text: '4.7'
                }
            }
        ]
    },
    {
        divider: true
    },
    {
        title: true,
        name: 'Links',
        class: 'mt-auto'
    },
    {
        name: 'National Lottery',
        url: 'https://www.national-lottery.co.uk/',
        icon: 'icon-globe',
        variant: 'success'
    },
    {
        name: 'EuroMillions',
        url: 'https://www.euro-millions.com/',
        icon: 'icon-globe',
        variant: 'danger'
    }
];
