const template = {
  Timestamp: 'timestamp',
  'How old are you?': 'age',
  'What industry do you work in?': 'industry',
  'Job title': 'jobTitle',
  'What is your annual salary?': 'annualSalary',
  'Please indicate the currency': 'currency',
  'Where are you located? (City/state/country)': 'location',
  'How many years of post-college professional work experience do you have?':
    'yearsOfExperience',
  'If "Other," please indicate the currency here:': 'otherCurrency',
  Employer: 'employer',
  Location: 'location',
  'Job Title': 'jobTitle',
  'Years at Employer': 'yearsAtEmployer',
  'Years of Experience': 'yearsOfExperience',
  'Annual Base Pay': 'annualSalary',
  'Signing Bonus': 'signingBonus',
  'Annual Bonus': 'annualBonus',
  'Annual Stock Value/Bonus': 'annualStock',
  Gender: 'gender',
  'Company Name': 'employer',
  'Company Size - # Employees': 'companySize',
  'Primary Location (Country)': 'locationTwo',
  'Primary Location (City)': 'locationTwo',
  'Industry in Company': 'industry',
  'Years Experience in Industry': 'yearsOfExperience',
  'Years of Experience in Current Company': 'yearsAtEmployer',
  'Job Title In Company': 'jobTitle',
  'Total Base Salary in 2018 (in USD)': 'annualSalary',
  'Total Bonus in 2018 (cumulative annual value in USD)': 'annualBonus',
  'Total Stock Options/Equity in 2018 (cumulative annual value in USD)':
    'annualStock',
  Gender: 'gender'
};

function convertToInt(value) {
  const nonNumericChars = /[^0-9]/g;
  if (typeof value === 'string') {
    return parseInt(value.replaceAll(nonNumericChars, ''));
  }
  return value;
}

function normalizeLocation(salarySurvey) {
  const city = salarySurvey['Primary Location (City)'];
  const country = salarySurvey['Primary Location (Country)'];

  if (city) {
    return `${city}, ${country}`;
  }

  return country;
}

function normalize(salarySurvey) {
  const rangeRegex = /[^0-9-]/g;
  const numericProperties = [
    'annualSalary',
    'annualStock',
    'signingBonus',
    'annualBonus'
  ];

  const normalized = {
    timestamp: '',
    employer: '',
    companySize: '',
    location: '',
    yearsOfExperience: '',
    yearsAtEmployer: '',
    annualSalary: 0,
    jobTitle: '',
    industry: '',
    annualStock: 0,
    annualBonus: 0,
    signingBonus: 0,
    currency: '',
    age: '',
    gender: ''
  };
  Object.entries(template).forEach(([key, value]) => {
    if (!salarySurvey[key]) {
      return;
    }
    if (value === 'locationTwo') {
      normalized.location = normalizeLocation(salarySurvey);
      return;
    }

    normalized[value] = salarySurvey[key];
  });

  numericProperties.forEach(property => {
    normalized[property] = convertToInt(normalized[property]);
  });

  if (typeof normalized.yearsOfExperience === 'string') {
    normalized.yearsOfExperience = normalized.yearsOfExperience.replaceAll(
      rangeRegex,
      ''
    );
  }

  normalized.timestamp = new Date(normalized.timestamp);

  return normalized;
}

export default normalize;
