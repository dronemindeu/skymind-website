module.exports = {
	title: 'SkyMind',
	tagline: 'Low coding complete functional web applications',
	url: 'https://sky-mind.eu',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	favicon: 'icon/favicon.ico',
	organizationName: 'SKYMIND',
	projectName: 'skymind-website',
	baseUrl: '/',
	themeConfig: {
		navbar: {
			title: '',
			logo: {
				alt: 'SKYMIND',
				src: 'img/logo.png',
				// srcDark: 'img/logo white.svg'
			},
			hideOnScroll: true,
			items: [
				//{ to: 'blog', label: 'Use Cases', position: 'left'},
				{
					alt: 'Github repository',
					href: 'https://github.com/ykhedar/',
					className: 'header-github-link',
					position: 'right'
				},
				{ to: 'blog', label: 'Blog', position: 'right'},
				{ to: 'https://dashboard.sky-mind.eu', label: 'Login', position: 'right'},

			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'More',
					items: [
						{
							label: 'GSD Calculator',
							href: 'https://gsd.sky-mind.eu',
						},
						{
							label: 'Online SORA',
							href: 'https://sora.sky-mind.eu',
						},
						{
							label: 'Feature Requests',
							href: 'https://discuss.sky-mind.eu',
						},
						
					],
				},
				{
					title: 'Contact',
					items: [
						{
							label: 'E-Mail',
							href: 'mailto:khedar@sky-mind.eu',
						},
						{
							label: 'LinkedIn',
							href: 'https://www.linkedin.com/company/skymindeu',
						},
						{
							label: 'Slack',
							href: 'https://join.slack.com/t/skymindtalk/shared_invite/zt-195qkbo1v-t8ddgESA3vROiqfQNXFyaw',
						},
						{
							label: 'Discord',
							href: 'https://discord.gg/H9Jcjxng',
						},

					],
				},
				{
					title: 'Legal',
					items: [
						{
							to: 'docs/privacy',
							label: 'Privacy',
						},
						{
							to: 'docs/impressum',
							label: 'Impressum',
						},
						{
							html: `
								<a href="https://www.braunschweig.de/wirtschaft_wissenschaft/gruenderzentren/start_up_zentrum_mobilitaet.php" target="_blank" rel="noreferrer noopener" aria-label="Funder by MOIN">
								  <img src="img/MOIN_Logo.jpg" alt="Funded MOIN" width="294" height="127" />
								</a>
							  `,
						},
						
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Skymind. Built with Docusaurus. `,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/ykhedar/skymind-website/edit/master/',
					includeCurrentVersion: true,
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
				},
				blog: {
					showReadingTime: true,
					editUrl: 'https://github.com/ykhedar/skymind-website/edit/master/',
					postsPerPage: 3,
					feedOptions: {
						type: 'all',
						language: 'en',
						copyright: `Copyright © ${new Date().getFullYear()} Skymind`,
					},
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
