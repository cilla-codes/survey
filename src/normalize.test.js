import normalize from './normalize';

const survey1TestCases = [
  {
    data: {
      Timestamp: '4/24/2019 11:44:00',
      'How old are you?': '25-34',
      'What industry do you work in?': 'Education',
      'Job title': 'English Teacher',
      'What is your annual salary?': '81,500',
      'Please indicate the currency': 'USD',
      'Where are you located? (City/state/country)': 'Boston/Massachusetts/USA',
      'How many years of post-college professional work experience do you have?':
        '5-7 years',
      'If your job title needs additional context, please clarify here:':
        'High School',
      'If "Other," please indicate the currency here:': ''
    },
    expected: {
      timestamp: new Date('4/24/2019 11:44:00'),
      employer: '',
      companySize: '',
      location: 'Boston/Massachusetts/USA',
      yearsOfExperience: '5-7',
      yearsAtEmployer: '',
      annualSalary: 81500,
      jobTitle: 'English Teacher',
      industry: 'Education',
      annualBonus: 0,
      annualStock: 0,
      signingBonus: 0,
      currency: 'USD',
      age: '25-34',
      gender: ''
    }
  },
  {
    data: {
      Timestamp: '4/24/2019 11:43:29',
      'How old are you?': '25-34',
      'What industry do you work in?': 'Healthcare',
      'Job title': 'Social worker (embedded in primary care)',
      'What is your annual salary?': '55000',
      'Please indicate the currency': 'USD',
      'Where are you located? (City/state/country)': 'Southeast Michigan, USA',
      'How many years of post-college professional work experience do you have?':
        '5-7 years',
      'If your job title needs additional context, please clarify here:': '',
      'If "Other," please indicate the currency here:': ''
    },
    expected: {
      timestamp: new Date('4/24/2019 11:43:29'),
      employer: '',
      companySize: '',
      location: 'Southeast Michigan, USA',
      yearsOfExperience: '5-7',
      yearsAtEmployer: '',
      annualSalary: 55000,
      jobTitle: 'Social worker (embedded in primary care)',
      industry: 'Healthcare',
      annualBonus: 0,
      annualStock: 0,
      signingBonus: 0,
      currency: 'USD',
      age: '25-34',
      gender: ''
    }
  },
  {
    data: {
      Timestamp: '4/24/2019 11:43:21',
      'How old are you?': '35-44',
      'What industry do you work in?': 'Government',
      'Job title': 'Talent Management Asst. Director',
      'What is your annual salary?': '75000',
      'Please indicate the currency': 'USD',
      'Where are you located? (City/state/country)': 'Nashville, TN',
      'How many years of post-college professional work experience do you have?':
        '11-20 years',
      'If your job title needs additional context, please clarify here:': '',
      'If "Other," please indicate the currency here:': ''
    },
    expected: {
      timestamp: new Date('4/24/2019 11:43:21'),
      employer: '',
      companySize: '',
      location: 'Nashville, TN',
      yearsOfExperience: '11-20',
      yearsAtEmployer: '',
      annualSalary: 75000,
      jobTitle: 'Talent Management Asst. Director',
      industry: 'Government',
      annualBonus: 0,
      annualStock: 0,
      signingBonus: 0,
      currency: 'USD',
      age: '35-44',
      gender: ''
    }
  }
];

const survey2TestCases = [
  {
    data: {
      Timestamp: '9/11/2019 14:02:32',
      'Employment Type': 'Full-time',
      'Company Name': '',
      'Company Size - # Employees': '100-999',
      'Primary Location (Country)': 'United States (US)',
      'Primary Location (City)': 'Maryland',
      'Industry in Company': 'Consulting',
      'Public or Private Company': 'Private',
      'Years Experience in Industry': '0-2',
      'Years of Experience in Current Company': '0-2',
      'Job Title In Company': 'Software Engineer',
      'Job Ladder': 'Software Engineer (SWE)',
      'Job Level': '',
      'Required Hours Per Week': '40+',
      'Actual Hours Per Week': '50-69',
      'Highest Level of Formal Education Completed': 'Undergraduate Degree',
      'Total Base Salary in 2018 (in USD)': '75000',
      'Total Bonus in 2018 (cumulative annual value in USD)': '12000',
      'Total Stock Options/Equity in 2018 (cumulative annual value in USD)':
        '0',
      'Health Insurance Offered': 'Yes',
      'Annual Vacation (in Weeks)': '5',
      'Are you happy at your current position?': 'Yes',
      'Do you plan to resign in the next 12 months?': 'No',
      'What are your thoughts about the direction of your industry?': '',
      Gender: 'Male',
      'Final Question: What are the top skills (you define what that means) that you believe will be necessary for job growth in your industry over the next 10 years?':
        '',
      'Have you ever done a bootcamp? If so was it worth it?':
        'No - never did one'
    },
    expected: {
      timestamp: new Date('9/11/2019 14:02:32'),
      employer: '',
      companySize: '100-999',
      location: 'Maryland, United States (US)',
      yearsOfExperience: '0-2',
      yearsAtEmployer: '0-2',
      annualSalary: 75000,
      jobTitle: 'Software Engineer',
      industry: 'Consulting',
      annualBonus: 12000,
      annualStock: 0,
      signingBonus: 0,
      currency: '',
      age: '',
      gender: 'Male'
    }
  },
  {
    data: {
      Timestamp: '9/11/2019 1:00:40',
      'Employment Type': 'Full-time',
      'Company Name': 'CoverMyMeds',
      'Company Size - # Employees': '1,000-10,000',
      'Primary Location (Country)': 'United States (US)',
      'Primary Location (City)': '',
      'Industry in Company': 'IT',
      'Public or Private Company': 'Public',
      'Years Experience in Industry': '10-20',
      'Years of Experience in Current Company': '0-2',
      'Job Title In Company': 'Systems Engineer',
      'Job Ladder': 'System Admin',
      'Job Level': '',
      'Required Hours Per Week': '40+',
      'Actual Hours Per Week': '40-50',
      'Highest Level of Formal Education Completed': 'Undergraduate Degree',
      'Total Base Salary in 2018 (in USD)': '107000',
      'Total Bonus in 2018 (cumulative annual value in USD)': '6000',
      'Total Stock Options/Equity in 2018 (cumulative annual value in USD)': '',
      'Health Insurance Offered': 'Yes',
      'Annual Vacation (in Weeks)': '6+',
      'Are you happy at your current position?': 'Yes',
      'Do you plan to resign in the next 12 months?': 'No',
      'What are your thoughts about the direction of your industry?': '',
      Gender: 'Female',
      'Final Question: What are the top skills (you define what that means) that you believe will be necessary for job growth in your industry over the next 10 years?':
        '',
      'Have you ever done a bootcamp? If so was it worth it?': ''
    },
    expected: {
      timestamp: new Date('9/11/2019 1:00:40'),
      employer: 'CoverMyMeds',
      companySize: '1,000-10,000',
      location: 'United States (US)',
      yearsOfExperience: '10-20',
      yearsAtEmployer: '0-2',
      annualSalary: 107000,
      jobTitle: 'Systems Engineer',
      industry: 'IT',
      annualBonus: 6000,
      annualStock: 0,
      signingBonus: 0,
      currency: '',
      age: '',
      gender: 'Female'
    }
  },
  {
    data: {
      Timestamp: '9/11/2019 0:47:40',
      'Employment Type': 'Full-time',
      'Company Name': 'Citi',
      'Company Size - # Employees': '10,000-100,000',
      'Primary Location (Country)': 'United States (US)',
      'Primary Location (City)': 'Manhattan',
      'Industry in Company': 'Finance',
      'Public or Private Company': 'Public',
      'Years Experience in Industry': '10-20',
      'Years of Experience in Current Company': '2-5',
      'Job Title In Company': 'Senior Vice President',
      'Job Ladder': 'Management',
      'Job Level': '1 (I)',
      'Required Hours Per Week': '40+',
      'Actual Hours Per Week': '50-70',
      'Highest Level of Formal Education Completed': 'Graduate Degree',
      'Total Base Salary in 2018 (in USD)': '180000',
      'Total Bonus in 2018 (cumulative annual value in USD)': '40000',
      'Total Stock Options/Equity in 2018 (cumulative annual value in USD)':
        '0',
      'Health Insurance Offered': 'Yes',
      'Annual Vacation (in Weeks)': '4',
      'Are you happy at your current position?': "It's Complicated",
      'Do you plan to resign in the next 12 months?': 'Yes',
      'What are your thoughts about the direction of your industry?': '',
      Gender: 'Male',
      'Final Question: What are the top skills (you define what that means) that you believe will be necessary for job growth in your industry over the next 10 years?':
        '',
      'Have you ever done a bootcamp? If so was it worth it?': ''
    },
    expected: {
      timestamp: new Date('9/11/2019 0:47:40'),
      employer: 'Citi',
      companySize: '10,000-100,000',
      location: 'Manhattan, United States (US)',
      yearsOfExperience: '10-20',
      yearsAtEmployer: '2-5',
      annualSalary: 180000,
      jobTitle: 'Senior Vice President',
      industry: 'Finance',
      annualBonus: 40000,
      annualStock: 0,
      signingBonus: 0,
      currency: '',
      age: '',
      gender: 'Male'
    }
  }
];

const survey3TestCases = [
  {
    data: {
      Timestamp: '3/21/2016 16:15:42',
      Employer: 'Accenture',
      Location: 'San Francisco',
      'Job Title': 'Technology Consultant',
      'Years at Employer': '2',
      'Years of Experience': '9',
      'Annual Base Pay': '105000',
      'Signing Bonus': '10000',
      'Annual Bonus': '',
      'Annual Stock Value/Bonus': '',
      Gender: 'Female',
      'Additional Comments': ''
    },
    expected: {
      timestamp: new Date('3/21/2016 16:15:42'),
      employer: 'Accenture',
      companySize: '',
      location: 'San Francisco',
      yearsOfExperience: '9',
      yearsAtEmployer: '2',
      annualSalary: 105000,
      jobTitle: 'Technology Consultant',
      industry: '',
      annualBonus: 0,
      annualStock: 0,
      signingBonus: 10000,
      currency: '',
      age: '',
      gender: 'Female'
    }
  },
  {
    data: {
      Timestamp: '3/21/2016 15:47:24',
      Employer: 'research non-profit',
      Location: 'Boulder, CO',
      'Job Title': 'Software Engineer',
      'Years at Employer': '20',
      'Years of Experience': '20',
      'Annual Base Pay': '102000',
      'Signing Bonus': '0',
      'Annual Bonus': '0',
      'Annual Stock Value/Bonus': '0',
      Gender: 'Male',
      'Additional Comments': ''
    },
    expected: {
      timestamp: new Date('3/21/2016 15:47:24'),
      employer: 'research non-profit',
      companySize: '',
      location: 'Boulder, CO',
      yearsOfExperience: '20',
      yearsAtEmployer: '20',
      annualSalary: 102000,
      jobTitle: 'Software Engineer',
      industry: '',
      annualBonus: 0,
      annualStock: 0,
      signingBonus: 0,
      currency: '',
      age: '',
      gender: 'Male'
    }
  },
  {
    data: {
      Timestamp: '3/21/2016 12:58:52',
      Employer: 'Opower',
      Location: 'San Francisco, CA',
      'Job Title': 'Systems Engineer',
      'Years at Employer': '2',
      'Years of Experience': '13',
      'Annual Base Pay': '125000',
      'Signing Bonus': '5000',
      'Annual Bonus': '0',
      'Annual Stock Value/Bonus': '5000 shares',
      Gender: 'Male',
      'Additional Comments': "Don't work here."
    },
    expected: {
      timestamp: new Date('3/21/2016 12:58:52'),
      employer: 'Opower',
      companySize: '',
      location: 'San Francisco, CA',
      yearsOfExperience: '13',
      yearsAtEmployer: '2',
      annualSalary: 125000,
      jobTitle: 'Systems Engineer',
      industry: '',
      annualBonus: 0,
      annualStock: 5000,
      signingBonus: 5000,
      currency: '',
      age: '',
      gender: 'Male'
    }
  }
];

survey1TestCases.forEach((testCase, index) => {
  test(`'survey 1 test case '${index}`, () => {
    const normalized = normalize(testCase.data);
    expect(normalized).toEqual(testCase.expected);
  });
});

survey2TestCases.forEach((testCase, index) => {
  test(`'survey 2 test case '${index}`, () => {
    const normalized = normalize(testCase.data);
    expect(normalized).toEqual(testCase.expected);
  });
});

survey3TestCases.forEach((testCase, index) => {
  test(`'survey 3 test case '${index}`, () => {
    const normalized = normalize(testCase.data);
    expect(normalized).toEqual(testCase.expected);
  });
});
