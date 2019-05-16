const initialState = [
	{
		id: 1,
		name: 'Vasay',
		surname: 'Rogov',
		birthday: '12/23/1992',
		contacts: {
			email: 'Rogov@ru.ru',
			phone: '+375441234567',
			skype: 'example',
			linkedin: 'example'
		},
		trainer: 'trainer@profile.com',
		graduate: '12/23/2017',
		score: '0',
		whereRecommended: ['EPAM','ISsoft'],
		objective: 'I am applying for a position of Stream title',
		summary: 'bla bla bla',
		skills: ['Android', 'HTML', 'User Acceptance Testing'],
		languages: {
			lang: 'English',
			level: 'c1 advanced'
		},
		education: {
			level: 'higher',
			institution: [
				{
					name: 'Belarusian state university',
					start: '2004',
					end: '2009',
					department: 'Marketing',
					specialization: 'Marketing'
				}
			]
		},
		profDev: [
			{
				name: 'EPAM',
				end: '2016',
				specialization: 'UI/UX Desing'
			}
		],
		electronicCertificates: [
			{
				name: 'Streamline',
				end: '2014',
				certificate: 'English language Advanced',
				file: true
			}
		],
		tests: [
			{
				name: 'MBA',
				end: '2015',
				certificate: 'Business English'
			}
		],
		experience: [
			{
				name: 'Velcom',
				start: {
					month: 'January',
					years: '2000'
				},
				end: {
					month: 'February',
					years: '2016'
				},
				position: 'Marketing Assistant',
				responsibilities: 'bla bla bla'
			}
		],
		portfolio: [
			{
				link: 'Link 1'
			},
			{
				link: 'Link 2'
			}
		],
		militaryStatus: {
			doesnotApply: false,
			exempted: false,
			completed: true,
			postponed: false,
			currentlyServing: false
		},
		additionalInfo: {
			text: 'bla bla bla'
		},
		recommendations: {
			link: 'Link 1',
			text: 'Ivanova Olga +375299876543'
		},
		resumeStatus: 'New 10:58 PM, 5/13/2019',
		lookingJob: false
	},
	{
		id: 2,
		name: 'Petya',
		surname: 'Petrov',
		birthday: '12/23/1992',
		contacts: {
			email: 'Rogov@ru.ru',
			phone: '+375441234567',
			skype: 'example',
			linkedin: 'example'
		},
		trainer: 'trainer@profile.com',
		graduate: '12/23/2017',
		score: '0',
		whereRecommended: ['EPAM','ISsoft'],
		objective: 'I am applying for a position of Stream title',
		summary: 'bla bla bla',
		skills: ['Android', 'HTML', 'User Acceptance Testing'],
		languages: {
			lang: 'English',
			level: 'c1 advanced'
		},
		education: {
			level: 'higher',
			institution: [
				{
					name: 'Belarusian state university',
					start: '2004',
					end: '2009',
					department: 'Marketing',
					specialization: 'Marketing'
				}
			]
		},
		profDev: [
			{
				name: 'EPAM',
				end: '2016',
				specialization: 'UI/UX Desing'
			}
		],
		electronicCertificates: [
			{
				name: 'Streamline',
				end: '2014',
				certificate: 'English language Advanced',
				file: true
			}
		],
		tests: [
			{
				name: 'MBA',
				end: '2015',
				certificate: 'Business English'
			}
		],
		experience: [
			{
				name: 'Velcom',
				start: {
					month: 'January',
					years: '2000'
				},
				end: {
					month: 'February',
					years: '2016'
				},
				position: 'Marketing Assistant',
				responsibilities: 'bla bla bla'
			}
		],
		portfolio: [
			{
				link: 'Link 1'
			},
			{
				link: 'Link 2'
			}
		],
		militaryStatus: {
			doesnotApply: false,
			exempted: false,
			completed: true,
			postponed: false,
			currentlyServing: false
		},
		additionalInfo: {
			text: 'bla bla bla'
		},
		recommendations: {
			link: 'Link 1',
			text: 'Ivanova Olga +375299876543'
		},
		resumeStatus: 'New 10:58 PM, 5/13/2019',
		lookingJob: false
	},
	{
		id: 3,
		name: 'Vanyanka',
		surname: 'Ivanka',
		birthday: '12/23/1992',
		contacts: {
			email: 'Rogov@ru.ru',
			phone: '+375441234567',
			skype: 'example',
			linkedin: 'example'
		},
		trainer: 'trainer@profile.com',
		graduate: '12/23/2017',
		score: '0',
		whereRecommended: ['EPAM','ISsoft'],
		objective: 'I am applying for a position of Stream title',
		summary: 'bla bla bla',
		skills: ['Android', 'HTML', 'User Acceptance Testing'],
		languages: {
			lang: 'English',
			level: 'c1 advanced'
		},
		education: {
			level: 'higher',
			institution: [
				{
					name: 'Belarusian state university',
					start: '2004',
					end: '2009',
					department: 'Marketing',
					specialization: 'Marketing'
				}
			]
		},
		profDev: [
			{
				name: 'EPAM',
				end: '2016',
				specialization: 'UI/UX Desing'
			}
		],
		electronicCertificates: [
			{
				name: 'Streamline',
				end: '2014',
				certificate: 'English language Advanced',
				file: true
			}
		],
		tests: [
			{
				name: 'MBA',
				end: '2015',
				certificate: 'Business English'
			}
		],
		experience: [
			{
				name: 'Velcom',
				start: {
					month: 'January',
					years: '2000'
				},
				end: {
					month: 'February',
					years: '2016'
				},
				position: 'Marketing Assistant',
				responsibilities: 'bla bla bla'
			}
		],
		portfolio: [
			{
				link: 'Link 1'
			},
			{
				link: 'Link 2'
			}
		],
		militaryStatus: {
			doesnotApply: false,
			exempted: false,
			completed: true,
			postponed: false,
			currentlyServing: false
		},
		additionalInfo: {
			text: 'bla bla bla'
		},
		recommendations: {
			link: 'Link 1',
			text: 'Ivanova Olga +375299876543'
		},
		resumeStatus: 'New 10:58 PM, 5/13/2019',
		lookingJob: false
	}
];

export function students(state = initialState) {
	return state
}