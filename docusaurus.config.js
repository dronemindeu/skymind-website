module.exports = {
	title: 'SkyMind',
	tagline: 'Low coding complete functional web applications',
	url: 'https://autrik.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	favicon: 'icon/favicon.ico',
	organizationName: 'AUTRIK',
	projectName: 'autrik-website',
	baseUrl: '/',
	themeConfig: {
		navbar: {
			title: '',
			logo: {
				alt: 'AUTRIK',
				src: 'img/autrik_logo_transparent_background.png',
				srcDark: 'img/autrik_white_logo_transparent_background.png'
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
				{ to: 'https://autrik.com/dashboard', label: 'Login', position: 'right'},

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
							href: 'https://autrik.com/gsd-calculator',
						},
						{
							label: 'Online SORA',
							href: 'https://autrik.com/online-sora',
						},
						{
							label: 'Report Issue',
							href: 'mailto:yogesh@autrik.com',
						},
						
					],
				},
				{
					title: 'Contact',
					items: [
						{
							label: 'E-Mail',
							href: 'mailto:yogesh@autrik.com',
						},
						{
							label: 'LinkedIn',
							href: 'https://www.linkedin.com/company/autrikeu',
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
			copyright: `Copyright © ${new Date().getFullYear()} AUTRIK. Built with Docusaurus. `,
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
						copyright: `Copyright © ${new Date().getFullYear()} AUTRIK`,
					},
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
