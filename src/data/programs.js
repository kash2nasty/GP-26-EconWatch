/**
 * GP EconWatch — Benefits Program Database
 * Designed for the Germination Project
 *
 * DISCLAIMER: This data is for educational purposes only.
 * Final eligibility is determined by official administering agencies.
 * Always verify current details at official program websites.
 */

export const CATEGORIES = {
  FOOD: 'food',
  HOUSING: 'housing',
  HEALTHCARE: 'healthcare',
  UTILITIES: 'utilities',
  DISABILITY: 'disability',
  VETERANS: 'veterans',
  CHILDCARE: 'childcare',
  SENIORS: 'seniors',
  WORKFORCE: 'workforce',
  TAX: 'tax',
  EMERGENCY: 'emergency',
  EDUCATION: 'education',
  TRANSPORTATION: 'transportation',
  LEGAL: 'legal',
  IMMIGRATION: 'immigration',
};

export const LEVELS = {
  FEDERAL: 'federal',
  STATE: 'state',
  COUNTY: 'county',
  CITY: 'city',
  NONPROFIT: 'nonprofit',
};

export const STATES = [
  'CT','DE','MA','MD','ME','NH','NJ','NY','PA','RI','VT','DC'
];

// ─────────────────────────────────────────────────────────────
// FEDERAL PROGRAMS
// ─────────────────────────────────────────────────────────────
export const FEDERAL_PROGRAMS = [
  {
    id: 'snap',
    name: 'SNAP (Supplemental Nutrition Assistance Program)',
    aliases: ['Food Stamps', 'EBT', 'Food Assistance'],
    category: CATEGORIES.FOOD,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Monthly electronic benefit (EBT card) to purchase groceries at authorized retailers. Benefits load monthly to a debit-style card accepted at most supermarkets, convenience stores, and some farmers markets.',
    benefitAmount: 'Avg. $187/person/month (FY2024); up to $975/month for family of 4',
    incomeLimitPercent: 130,
    incomeLimitNote: '130% of Federal Poverty Level (gross); 100% net after deductions',
    householdSizeMatters: true,
    citizenshipRequired: 'US citizens and certain qualified immigrants (LPRs, refugees, asylees after 5 years)',
    ageRequirements: 'All ages',
    workRequirements: 'ABAWDs (ages 18–52, no dependents) must meet work/training requirements or get waiver',
    disabilityConsideration: 'Disability may provide deductions increasing benefit amount',
    requiredDocuments: [
      'Photo ID (driver\'s license, state ID, passport)',
      'Proof of residency (utility bill, lease)',
      'Social Security numbers for all household members',
      'Proof of income (pay stubs, employer letter, benefit award letters)',
      'Proof of expenses (rent, utilities, childcare, medical if elderly/disabled)',
      'Immigration documents (if applicable)',
    ],
    applicationProcess: 'Apply online, by mail, or in person at local DSS/DHS office. Interview required (phone or in-person). Decision within 30 days (7 days if expedited).',
    onlineApplicationAvailable: true,
    processingTimeline: '7 days (expedited/emergency) or 30 days standard',
    renewalFrequency: 'Every 6–12 months depending on household circumstances',
    appealProcess: 'Request fair hearing within 90 days of adverse action',
    officialWebsite: 'https://www.fns.usda.gov/snap',
    applyLinks: {
      CT: 'https://www.ct.gov/dss/apply',
      MA: 'https://dtaconnect.eohhs.mass.gov',
      NY: 'https://mybenefits.ny.gov',
      NJ: 'https://www.njhelps.org',
      PA: 'https://www.compass.state.pa.us',
      MD: 'https://mydhrbenefits.dhr.state.md.us',
      ME: 'https://www.maine.gov/dhhs/ofi/programs-services/food-supplement',
      VT: 'https://dcf.vermont.gov/benefits/3SquaresVT',
      NH: 'https://nheasy.nh.gov',
      RI: 'https://healthyrhodeisland.com',
      DE: 'https://assist.dhss.delaware.gov',
      DC: 'https://dc.gov/service/apply-food-stamps',
    },
    contactPhone: '1-800-221-5689',
    confidenceFactors: ['income','householdSize','citizenshipStatus'],
    tags: ['food','grocery','ebt','nutrition'],
  },
  {
    id: 'medicaid',
    name: 'Medicaid',
    aliases: ['Medical Assistance', 'Medi-Cal equivalent', 'State Health Insurance'],
    category: CATEGORIES.HEALTHCARE,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Free or low-cost comprehensive health coverage for individuals and families with low incomes. Covers doctor visits, hospital care, prescriptions, mental health, dental (varies by state), and more.',
    benefitAmount: 'Comprehensive health insurance with $0 or very low premiums/copays',
    incomeLimitPercent: 138,
    incomeLimitNote: '138% FPL for adults in expansion states (all NE states expanded Medicaid)',
    householdSizeMatters: true,
    citizenshipRequired: 'US citizens and qualified immigrants; emergency Medicaid available to undocumented for emergency care',
    ageRequirements: 'All ages (CHIP for children up to 19)',
    requiredDocuments: [
      'Proof of identity', 'Social Security number', 'Proof of income',
      'Proof of state residency', 'Immigration status documents if applicable',
    ],
    applicationProcess: 'Apply through state marketplace, state Medicaid agency, or Healthcare.gov. Eligibility often determined same day.',
    onlineApplicationAvailable: true,
    processingTimeline: '45 days standard (90 days if disability-based)',
    renewalFrequency: 'Annual (continuous enrollment ended post-COVID)',
    officialWebsite: 'https://www.medicaid.gov',
    contactPhone: '1-877-267-2323',
    confidenceFactors: ['income','householdSize','citizenshipStatus','age'],
    tags: ['health','insurance','medical','doctor','prescription'],
  },
  {
    id: 'chip',
    name: "CHIP (Children's Health Insurance Program)",
    aliases: ["Children's Medicaid", 'SCHIP'],
    category: CATEGORIES.HEALTHCARE,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: "Low-cost health coverage for children in families who earn too much for Medicaid but can't afford private insurance. Covers routine checkups, immunizations, doctor visits, prescriptions, dental/vision.",
    benefitAmount: 'Comprehensive child health coverage, low/no premium',
    incomeLimitPercent: 200,
    incomeLimitNote: 'Up to 200–318% FPL depending on state (MA goes up to 300%)',
    ageRequirements: 'Children under 19',
    officialWebsite: 'https://www.insurekidsnow.gov',
    contactPhone: '1-877-543-7669',
    confidenceFactors: ['income','householdSize','age','hasChildren'],
    tags: ['children','health','kids','insurance'],
  },
  {
    id: 'aca-marketplace',
    name: 'ACA Marketplace Health Insurance (Premium Tax Credits)',
    aliases: ['Obamacare', 'Exchange Plans', 'Healthcare.gov subsidies'],
    category: CATEGORIES.HEALTHCARE,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Subsidized health insurance plans through the federal/state marketplace. Premium Tax Credits reduce monthly premiums; Cost-Sharing Reductions lower out-of-pocket costs. Enhanced subsidies through 2025.',
    benefitAmount: 'Premium Tax Credits averaging $536/month; many qualify for <$10/month plans',
    incomeLimitNote: 'No upper income limit for PTCs through 2025; CSR available up to 250% FPL',
    officialWebsite: 'https://www.healthcare.gov',
    contactPhone: '1-800-318-2596',
    confidenceFactors: ['income','householdSize','employmentStatus','age'],
    tags: ['health','insurance','marketplace','subsidy'],
  },
  {
    id: 'medicare',
    name: 'Medicare',
    aliases: ['Medicare Part A', 'Medicare Part B', 'Medicare Advantage'],
    category: CATEGORIES.HEALTHCARE,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Federal health insurance for people 65+, or under 65 with certain disabilities or End-Stage Renal Disease. Part A covers hospital care; Part B covers outpatient/preventive; Part D covers prescriptions.',
    benefitAmount: 'Comprehensive health coverage; Part A often premium-free; Part B ~$174/month (2024)',
    ageRequirements: '65+ (or under 65 with qualifying disability/condition)',
    officialWebsite: 'https://www.medicare.gov',
    contactPhone: '1-800-633-4227',
    confidenceFactors: ['age','disabilityStatus'],
    tags: ['senior','health','insurance','65+'],
  },
  {
    id: 'liheap',
    name: 'LIHEAP (Low Income Home Energy Assistance Program)',
    aliases: ['Heating Assistance', 'Energy Assistance', 'HEAP'],
    category: CATEGORIES.UTILITIES,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Helps low-income households pay heating and cooling energy costs, crisis assistance for utility shutoffs, and weatherization. Benefits paid directly to utility companies.',
    benefitAmount: 'Varies widely: $200–$1,500+ per heating season',
    incomeLimitPercent: 150,
    incomeLimitNote: '150% FPL or 60% of state median income, whichever is higher',
    officialWebsite: 'https://www.acf.hhs.gov/ocs/programs/liheap',
    contactPhone: '1-866-674-6327',
    confidenceFactors: ['income','householdSize','state','utilityHardship'],
    tags: ['energy','heat','utilities','electric','gas'],
  },
  {
    id: 'wic',
    name: 'WIC (Women, Infants, and Children)',
    aliases: ['WIC Program', 'Women Infants Children'],
    category: CATEGORIES.FOOD,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Nutrition program providing food benefits, nutrition education, breastfeeding support, and healthcare referrals for pregnant women, new mothers, infants, and children under 5.',
    benefitAmount: 'Monthly food package worth ~$50–$100/month depending on category',
    incomeLimitPercent: 185,
    ageRequirements: 'Pregnant/postpartum/breastfeeding women; infants; children under 5',
    officialWebsite: 'https://www.fns.usda.gov/wic',
    contactPhone: '1-800-942-3678',
    confidenceFactors: ['income','isPregnant','hasChildren','childAge'],
    tags: ['food','pregnancy','infant','nutrition','baby'],
  },
  {
    id: 'section8',
    name: 'Section 8 / Housing Choice Voucher Program',
    aliases: ['HCV', 'Housing Voucher', 'Rental Assistance'],
    category: CATEGORIES.HOUSING,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Rental assistance that pays the difference between 30% of household income and the local fair market rent. Voucher is portable to any landlord who accepts it.',
    benefitAmount: 'Covers portion of rent above 30% of income; avg. benefit ~$800/month',
    incomeLimitPercent: 50,
    incomeLimitNote: '50% of Area Median Income; priority for those at 30% AMI',
    officialWebsite: 'https://www.hud.gov/topics/housing_choice_voucher_program_section_8',
    contactPhone: '1-800-225-5342',
    confidenceFactors: ['income','householdSize','housingStatus','state'],
    tags: ['rent','housing','voucher','apartment'],
    knownWaitlists: 'Extremely long waitlists (2–10+ years) in most NE cities. Apply immediately.',
  },
  {
    id: 'ssa-disability',
    name: 'SSDI (Social Security Disability Insurance)',
    aliases: ['Social Security Disability', 'SSDI'],
    category: CATEGORIES.DISABILITY,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Monthly cash benefit for workers who become disabled and cannot work. Based on work history and Social Security earnings record. Also provides Medicare after 24 months.',
    benefitAmount: 'Average $1,537/month (2024); max ~$3,822/month',
    ageRequirements: 'Under full retirement age; must have sufficient work credits',
    requiredDocuments: ['Medical records documenting disability', 'Work history', 'Social Security earnings record'],
    officialWebsite: 'https://www.ssa.gov/disability',
    contactPhone: '1-800-772-1213',
    confidenceFactors: ['disabilityStatus','age','employmentStatus'],
    tags: ['disability','cash','monthly','social security'],
  },
  {
    id: 'ssi',
    name: 'SSI (Supplemental Security Income)',
    aliases: ['SSI Benefits', 'Supplemental Income'],
    category: CATEGORIES.DISABILITY,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Monthly cash benefit for elderly, blind, or disabled individuals with limited income and resources. Does NOT require work history — also covers those who never worked.',
    benefitAmount: 'Up to $943/month individual; $1,415/month couple (2024); states may supplement',
    incomeLimitNote: 'Limited income and resources ($2,000 individual/$3,000 couple in countable assets)',
    ageRequirements: '65+ OR blind/disabled any age',
    officialWebsite: 'https://www.ssa.gov/ssi',
    contactPhone: '1-800-772-1213',
    confidenceFactors: ['age','disabilityStatus','income','assets'],
    tags: ['disability','elderly','cash','monthly'],
  },
  {
    id: 'veterans-benefits',
    name: 'VA Disability Compensation',
    aliases: ['VA Benefits', 'Service-Connected Disability'],
    category: CATEGORIES.VETERANS,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Monthly tax-free compensation for veterans with service-connected disabilities. Rating from 0–100% determines benefit amount. Higher ratings include dependency allowances.',
    benefitAmount: '$171–$4,183+/month depending on disability rating (2024)',
    ageRequirements: 'Veterans of all ages',
    requiredDocuments: ['DD-214 discharge papers', 'Medical records', 'Nexus letter from physician'],
    officialWebsite: 'https://www.va.gov/disability',
    contactPhone: '1-800-827-1000',
    confidenceFactors: ['veteranStatus','disabilityStatus'],
    tags: ['veteran','military','disability','compensation'],
  },
  {
    id: 'va-healthcare',
    name: 'VA Healthcare',
    aliases: ['Veterans Health Administration', 'VA Medical'],
    category: CATEGORIES.VETERANS,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Comprehensive healthcare system for eligible veterans including primary care, mental health, substance abuse, specialty care, dental (limited), vision, and prescriptions at VA facilities.',
    benefitAmount: 'Free or very low-cost comprehensive care; prescriptions $0–$15/fill',
    officialWebsite: 'https://www.va.gov/health-care',
    contactPhone: '1-877-222-8387',
    confidenceFactors: ['veteranStatus','income','disabilityStatus'],
    tags: ['veteran','health','medical','military'],
  },
  {
    id: 'unemployment',
    name: 'Unemployment Insurance (UI)',
    aliases: ['Unemployment Benefits', 'Unemployment Compensation', 'UI Benefits'],
    category: CATEGORIES.WORKFORCE,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Weekly cash payments for workers who lose their job through no fault of their own. Amount based on prior wages. Federally funded; state administered.',
    benefitAmount: '40–60% of prior weekly wage; state maximums vary ($235–$1,015/week)',
    ageRequirements: 'Working age',
    workRequirements: 'Must be actively seeking work; must have earned sufficient wages in base period',
    officialWebsite: 'https://www.dol.gov/general/topic/unemployment-insurance',
    confidenceFactors: ['employmentStatus','recentJobLoss'],
    tags: ['job','work','income','layoff','unemployment'],
  },
  {
    id: 'eitc',
    name: 'Earned Income Tax Credit (EITC)',
    aliases: ['EITC', 'EIC', 'Earned Income Credit'],
    category: CATEGORIES.TAX,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Refundable federal tax credit for low-to-moderate income workers. Even if you owe no taxes, you can receive a refund. Largest for families with children.',
    benefitAmount: 'Up to $7,830 (3+ children, 2024); $632 with no children',
    incomeLimitNote: '~$24K (no children) to $66K (3+ children) — see IRS tables',
    officialWebsite: 'https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit',
    confidenceFactors: ['income','employmentStatus','hasChildren','filingStatus'],
    tags: ['tax','refund','credit','irs','working'],
  },
  {
    id: 'child-tax-credit',
    name: 'Child Tax Credit (CTC)',
    aliases: ['CTC', 'Child Credit'],
    category: CATEGORIES.TAX,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Tax credit of up to $2,000 per qualifying child under 17. Up to $1,600 may be refundable as Additional Child Tax Credit even if no tax owed.',
    benefitAmount: 'Up to $2,000 per child under 17',
    officialWebsite: 'https://www.irs.gov/credits-deductions/individuals/child-tax-credit',
    confidenceFactors: ['income','hasChildren','childAge'],
    tags: ['tax','children','credit','refund'],
  },
  {
    id: 'head-start',
    name: 'Head Start / Early Head Start',
    aliases: ['Head Start Program'],
    category: CATEGORIES.CHILDCARE,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: 'Free early childhood education, health, nutrition, and parent involvement program for low-income children birth to 5 and their families.',
    benefitAmount: 'Free comprehensive early childhood program',
    incomeLimitPercent: 100,
    ageRequirements: 'Children birth to 5',
    officialWebsite: 'https://www.acf.hhs.gov/ohs',
    confidenceFactors: ['income','hasChildren','childAge'],
    tags: ['childcare','preschool','education','children'],
  },
  {
    id: 'pell-grant',
    name: 'Federal Pell Grant',
    aliases: ['Pell Grant', 'FAFSA Grant'],
    category: CATEGORIES.EDUCATION,
    level: LEVELS.FEDERAL,
    states: STATES,
    description: "Need-based federal grant for undergraduate students. Does NOT need to be repaid. Applied to tuition, fees, and other education expenses.",
    benefitAmount: 'Up to $7,395/year (2024–25)',
    incomeLimitNote: 'Based on EFC/SAI from FAFSA; no hard income cutoff',
    ageRequirements: 'Undergraduate students',
    officialWebsite: 'https://studentaid.gov/understand-aid/types/grants/pell',
    confidenceFactors: ['income','studentStatus','age'],
    tags: ['education','college','grant','student','fafsa'],
  },
];

// ─────────────────────────────────────────────────────────────
// STATE PROGRAMS
// ─────────────────────────────────────────────────────────────
export const STATE_PROGRAMS = [
  // NEW YORK
  {
    id: 'ny-medicaid-plus',
    name: 'NY Medicaid / Essential Plan',
    level: LEVELS.STATE, states: ['NY'], category: CATEGORIES.HEALTHCARE,
    description: 'New York offers one of the most expansive Medicaid programs, plus the Essential Plan (free/low-cost for 138–250% FPL, ineligible for Medicaid). No deductibles.',
    benefitAmount: 'Free or up to $20/month premium for Essential Plan',
    officialWebsite: 'https://www.health.ny.gov/health_care/medicaid',
    applyLink: 'https://mybenefits.ny.gov',
    contactPhone: '1-800-541-2831',
    confidenceFactors: ['income','householdSize','state'],
    tags: ['health','insurance','new york'],
  },
  {
    id: 'ny-heap',
    name: 'NY HEAP (Home Energy Assistance Program)',
    level: LEVELS.STATE, states: ['NY'], category: CATEGORIES.UTILITIES,
    description: 'Provides regular, emergency, and heating equipment repair/replacement benefits. Also offers weatherization assistance through NYSerDA.',
    benefitAmount: 'Regular: $21–$774; Emergency: up to $500; Equipment: up to $4,500',
    officialWebsite: 'https://otda.ny.gov/programs/heap',
    contactPhone: '1-800-342-3009',
    confidenceFactors: ['income','householdSize','state','utilityHardship'],
    tags: ['energy','heat','utility','new york'],
  },
  {
    id: 'ny-erap',
    name: 'NY Emergency Rental Assistance',
    level: LEVELS.STATE, states: ['NY'], category: CATEGORIES.HOUSING,
    description: 'Emergency rental and utility assistance for renters financially impacted by COVID-19 or other hardships. Check current availability as funding is periodic.',
    officialWebsite: 'https://otda.ny.gov/programs/emergency-rental-assistance',
    confidenceFactors: ['income','householdSize','state','housingStatus'],
    tags: ['rent','emergency','housing','new york'],
  },
  // MASSACHUSETTS
  {
    id: 'ma-masshealth',
    name: 'MassHealth (MA Medicaid)',
    level: LEVELS.STATE, states: ['MA'], category: CATEGORIES.HEALTHCARE,
    description: 'Comprehensive Medicaid program covering extensive services. ConnectorCare plans for 100–300% FPL. Children\'s Medical Security Plan for children up to 18.',
    officialWebsite: 'https://www.mass.gov/masshealth',
    applyLink: 'https://www.mahix.org',
    contactPhone: '1-800-841-2900',
    confidenceFactors: ['income','householdSize','state','age'],
    tags: ['health','massachusetts','medicaid'],
  },
  {
    id: 'ma-tafdc',
    name: 'MA TAFDC (Transitional Aid to Families with Dependent Children)',
    level: LEVELS.STATE, states: ['MA'], category: CATEGORIES.EMERGENCY,
    description: 'Monthly cash assistance for families with children. Includes work support, childcare referrals, and job training. No time limit for families with children under 2.',
    benefitAmount: '$453–$1,006/month depending on household size',
    officialWebsite: 'https://www.mass.gov/tafdc',
    contactPhone: '1-877-382-2363',
    confidenceFactors: ['income','householdSize','state','hasChildren'],
    tags: ['cash','families','children','massachusetts'],
  },
  {
    id: 'ma-fuel',
    name: 'MA Fuel Assistance (LIHEAP + Low-Income Weatherization)',
    level: LEVELS.STATE, states: ['MA'], category: CATEGORIES.UTILITIES,
    description: 'Helps pay heating costs November–April. Also offers free weatherization (insulation, windows) to reduce future bills. Managed by community action agencies.',
    benefitAmount: 'Heating benefit $200–$1,400; weatherization up to $6,500 in services',
    officialWebsite: 'https://www.mass.gov/fuel-assistance',
    contactPhone: '1-800-632-8175',
    confidenceFactors: ['income','state','utilityHardship'],
    tags: ['heat','energy','massachusetts','utility'],
  },
  // PENNSYLVANIA
  {
    id: 'pa-compass',
    name: 'PA COMPASS (Combined Application)',
    level: LEVELS.STATE, states: ['PA'], category: CATEGORIES.FOOD,
    description: 'Single online application for SNAP, Medicaid, CHIP, LIHEAP, and Cash Assistance in Pennsylvania.',
    officialWebsite: 'https://www.compass.state.pa.us',
    contactPhone: '1-800-692-7462',
    confidenceFactors: ['income','householdSize','state'],
    tags: ['pennsylvania','food','health','combined'],
  },
  {
    id: 'pa-property-tax-rebate',
    name: 'PA Property Tax/Rent Rebate Program',
    level: LEVELS.STATE, states: ['PA'], category: CATEGORIES.TAX,
    description: 'Rebate of up to $1,000 on property taxes or rent paid by seniors and disabled residents. One of the most generous state programs for older adults.',
    benefitAmount: 'Up to $1,000 rebate',
    ageRequirements: '65+ (or 50+ widowed spouse) or permanently disabled',
    incomeLimitNote: 'Up to $45,000/year income',
    officialWebsite: 'https://www.revenue.pa.gov/ptrr',
    contactPhone: '1-888-222-9190',
    confidenceFactors: ['age','income','state','disabilityStatus'],
    tags: ['tax','rebate','seniors','pennsylvania','rent'],
  },
  // CONNECTICUT
  {
    id: 'ct-husky',
    name: 'CT HUSKY Health (Medicaid/CHIP)',
    level: LEVELS.STATE, states: ['CT'], category: CATEGORIES.HEALTHCARE,
    description: 'Connecticut\'s Medicaid and CHIP program offering free/low-cost healthcare. HUSKY A for families, HUSKY B for children, HUSKY C for seniors/disabled, HUSKY D for adults.',
    officialWebsite: 'https://www.ct.gov/husky',
    applyLink: 'https://www.ct.gov/dss/apply',
    contactPhone: '1-877-284-8759',
    confidenceFactors: ['income','householdSize','state','age'],
    tags: ['health','connecticut','medicaid','husky'],
  },
  {
    id: 'ct-state-eitc',
    name: 'CT Earned Income Tax Credit',
    level: LEVELS.STATE, states: ['CT'], category: CATEGORIES.TAX,
    description: 'Connecticut offers a state EITC equal to 30.5% of the federal EITC. Refundable — you get cash back even if no state tax owed.',
    benefitAmount: 'Up to ~$2,388 (30.5% of federal EITC)',
    officialWebsite: 'https://portal.ct.gov/DRS/Individuals/Individual-Tax-Page/Earned-Income-Tax-Credit',
    confidenceFactors: ['income','employmentStatus','state','hasChildren'],
    tags: ['tax','connecticut','eitc','refund'],
  },
  // NEW JERSEY
  {
    id: 'nj-familycare',
    name: 'NJ FamilyCare (Medicaid/CHIP)',
    level: LEVELS.STATE, states: ['NJ'], category: CATEGORIES.HEALTHCARE,
    description: 'New Jersey\'s combined Medicaid and CHIP program. Free for most enrollees. Covers doctor visits, hospital, dental, vision, mental health, and prescriptions.',
    officialWebsite: 'https://www.njfamilycare.org',
    applyLink: 'https://www.njhelps.org',
    contactPhone: '1-800-701-0710',
    confidenceFactors: ['income','householdSize','state'],
    tags: ['health','new jersey','medicaid'],
  },
  {
    id: 'nj-state-eitc',
    name: 'NJ Earned Income Tax Credit',
    level: LEVELS.STATE, states: ['NJ'], category: CATEGORIES.TAX,
    description: 'NJ EITC is 40% of the federal EITC — one of the most generous state credits. Fully refundable.',
    benefitAmount: 'Up to ~$3,132 (40% of federal EITC)',
    officialWebsite: 'https://www.njtaxation.org',
    confidenceFactors: ['income','employmentStatus','state'],
    tags: ['tax','new jersey','eitc'],
  },
  // MARYLAND
  {
    id: 'md-medicaid',
    name: 'Maryland Medicaid (HealthChoice)',
    level: LEVELS.STATE, states: ['MD'], category: CATEGORIES.HEALTHCARE,
    description: 'Maryland\'s Medicaid managed care program. Covers comprehensive health services through managed care organizations.',
    officialWebsite: 'https://mmcp.health.maryland.gov',
    applyLink: 'https://mydhrbenefits.dhr.state.md.us',
    contactPhone: '1-800-456-8900',
    confidenceFactors: ['income','householdSize','state'],
    tags: ['health','maryland','medicaid'],
  },
  // VERMONT
  {
    id: 'vt-3squares',
    name: 'Vermont 3SquaresVT (SNAP)',
    level: LEVELS.STATE, states: ['VT'], category: CATEGORIES.FOOD,
    description: 'Vermont\'s SNAP program, branded as 3SquaresVT. Vermont has higher income limits than federal minimums and no asset test for most households.',
    officialWebsite: 'https://dcf.vermont.gov/benefits/3SquaresVT',
    contactPhone: '1-800-479-6151',
    confidenceFactors: ['income','householdSize','state'],
    tags: ['food','vermont','snap','ebt'],
  },
  {
    id: 'vt-reach-up',
    name: 'VT Reach Up (TANF)',
    level: LEVELS.STATE, states: ['VT'], category: CATEGORIES.EMERGENCY,
    description: 'Vermont\'s TANF cash assistance for families with children. Includes job training, childcare, and supportive services.',
    officialWebsite: 'https://dcf.vermont.gov/benefits/reachup',
    contactPhone: '1-800-479-6151',
    confidenceFactors: ['income','state','hasChildren'],
    tags: ['cash','vermont','families','assistance'],
  },
  // MAINE
  {
    id: 'me-mainecare',
    name: 'Maine MaineCare (Medicaid)',
    level: LEVELS.STATE, states: ['ME'], category: CATEGORIES.HEALTHCARE,
    description: 'Maine expanded Medicaid in 2019. Now covers adults up to 138% FPL with comprehensive services including dental.',
    officialWebsite: 'https://www.maine.gov/dhhs/ofi/programs-services/mainecare',
    contactPhone: '1-800-977-6740',
    confidenceFactors: ['income','householdSize','state'],
    tags: ['health','maine','medicaid'],
  },
  // RHODE ISLAND
  {
    id: 'ri-medicaid',
    name: 'RI Medicaid (Neighborhood Health Plan of RI / UnitedHealthcare)',
    level: LEVELS.STATE, states: ['RI'], category: CATEGORIES.HEALTHCARE,
    description: 'Rhode Island Medicaid managed care. Apply through HealthSource RI for combined Medicaid/marketplace enrollment.',
    officialWebsite: 'https://eohhs.ri.gov/programs-and-services/medical-benefits',
    applyLink: 'https://healthyrhodeisland.com',
    contactPhone: '1-855-840-4774',
    confidenceFactors: ['income','householdSize','state'],
    tags: ['health','rhode island','medicaid'],
  },
  // NEW HAMPSHIRE
  {
    id: 'nh-healthy-families',
    name: 'NH Healthy Families (Medicaid)',
    level: LEVELS.STATE, states: ['NH'], category: CATEGORIES.HEALTHCARE,
    description: 'NH Medicaid managed care through Healthy Families and NH Medicaid. Covers adults, families, children, elderly, and disabled.',
    officialWebsite: 'https://www.dhhs.nh.gov/programs-services/medicaid',
    applyLink: 'https://nheasy.nh.gov',
    contactPhone: '1-800-852-3345',
    confidenceFactors: ['income','householdSize','state'],
    tags: ['health','new hampshire','medicaid'],
  },
  // DELAWARE
  {
    id: 'de-dhss',
    name: 'Delaware DHSS Benefits (Medicaid/SNAP)',
    level: LEVELS.STATE, states: ['DE'], category: CATEGORIES.HEALTHCARE,
    description: 'Delaware offers combined application for Medicaid, SNAP, and other benefits through DHSS ASSIST portal.',
    officialWebsite: 'https://dhss.delaware.gov/dhss/dss',
    applyLink: 'https://assist.dhss.delaware.gov',
    contactPhone: '1-866-843-7212',
    confidenceFactors: ['income','householdSize','state'],
    tags: ['health','delaware','medicaid','snap'],
  },
  // DC
  {
    id: 'dc-medicaid',
    name: 'DC Medicaid / Alliance',
    level: LEVELS.STATE, states: ['DC'], category: CATEGORIES.HEALTHCARE,
    description: 'DC has one of the most expansive Medicaid programs, covering up to 215% FPL for adults. DC Alliance provides coverage for non-citizens ineligible for Medicaid.',
    officialWebsite: 'https://dhcf.dc.gov/service/medicaid',
    applyLink: 'https://dc.gov/service/apply-medicaid',
    contactPhone: '1-202-442-9900',
    confidenceFactors: ['income','householdSize','state','citizenshipStatus'],
    tags: ['health','dc','medicaid','alliance'],
  },
];

// ─────────────────────────────────────────────────────────────
// NONPROFIT / COMMUNITY PROGRAMS
// ─────────────────────────────────────────────────────────────
export const NONPROFIT_PROGRAMS = [
  {
    id: '211-helpline',
    name: '211 Helpline (United Way)',
    level: LEVELS.NONPROFIT, states: STATES, category: CATEGORIES.EMERGENCY,
    description: 'Free, confidential service connecting people to local social services including food, housing, healthcare, childcare, senior care, and crisis services. Available 24/7 by phone.',
    benefitAmount: 'Navigation service — connects to benefits and programs',
    officialWebsite: 'https://www.211.org',
    contactPhone: 'Dial 2-1-1',
    tags: ['navigation','emergency','all services','hotline'],
  },
  {
    id: 'salvation-army',
    name: 'Salvation Army Emergency Assistance',
    level: LEVELS.NONPROFIT, states: STATES, category: CATEGORIES.EMERGENCY,
    description: 'Emergency financial assistance for rent, utilities, food, and other basic needs. Services vary by location. Walk-in and appointment-based.',
    officialWebsite: 'https://www.salvationarmyusa.org',
    contactPhone: '1-800-725-2769',
    tags: ['emergency','rent','utility','food','nonprofit'],
  },
  {
    id: 'catholic-charities',
    name: 'Catholic Charities (Emergency + Immigration + Housing)',
    level: LEVELS.NONPROFIT, states: STATES, category: CATEGORIES.EMERGENCY,
    description: 'Comprehensive social services regardless of religion/background. Services include emergency financial aid, food, housing, immigration legal services, mental health, and senior programs.',
    officialWebsite: 'https://catholiccharitiesusa.org',
    contactPhone: '1-800-919-9338',
    tags: ['emergency','immigration','housing','food','nonprofit'],
  },
  {
    id: 'local-food-banks',
    name: 'Feeding America Network Food Banks',
    level: LEVELS.NONPROFIT, states: STATES, category: CATEGORIES.FOOD,
    description: 'Network of 200+ food banks across the US. Free groceries, no income verification required at most sites. Find your local food bank at feedingamerica.org/find-your-local-foodbank.',
    benefitAmount: 'Free groceries; typical household receives ~20 lbs/visit',
    officialWebsite: 'https://www.feedingamerica.org',
    tags: ['food','groceries','pantry','free','no income test'],
  },
  {
    id: 'nefe-financial-counseling',
    name: 'NFCC — National Foundation for Credit Counseling',
    level: LEVELS.NONPROFIT, states: STATES, category: CATEGORIES.EMERGENCY,
    description: 'Free and low-cost financial counseling including debt management, budgeting, housing counseling, and bankruptcy alternatives.',
    officialWebsite: 'https://www.nfcc.org',
    contactPhone: '1-800-388-2227',
    tags: ['debt','credit','financial counseling','nonprofit'],
  },
  {
    id: 'legal-aid',
    name: 'Legal Aid Society / Legal Services Corporation',
    level: LEVELS.NONPROFIT, states: STATES, category: CATEGORIES.LEGAL,
    description: 'Free civil legal assistance for low-income individuals in housing, family, benefits, immigration, and consumer matters. Does not handle criminal cases.',
    officialWebsite: 'https://www.lsc.gov/what-legal-aid/find-legal-aid',
    tags: ['legal','attorney','housing','eviction','free'],
  },
  {
    id: 'national-domestic-violence',
    name: 'National Domestic Violence Hotline',
    level: LEVELS.NONPROFIT, states: STATES, category: CATEGORIES.EMERGENCY,
    description: '24/7 crisis support, safety planning, and referrals to local shelters and services. Available in 200+ languages via chat and phone. Completely confidential.',
    officialWebsite: 'https://www.thehotline.org',
    contactPhone: '1-800-799-7233 (SAFE); Text START to 88788',
    tags: ['domestic violence','safety','crisis','shelter','emergency'],
  },
];

// ─────────────────────────────────────────────────────────────
// UTILITY: ELIGIBILITY ESTIMATION ENGINE
// ─────────────────────────────────────────────────────────────

export const FPL_2024 = {
  1: 15060, 2: 20440, 3: 25820, 4: 31200,
  5: 36580, 6: 41960, 7: 47340, 8: 52720,
};

export function estimateFPL(annualIncome, householdSize) {
  const size = Math.min(Math.max(householdSize, 1), 8);
  const fpl = FPL_2024[size] || (FPL_2024[8] + (size - 8) * 5380);
  return Math.round((annualIncome / fpl) * 100);
}

export function estimateEligibility(program, profile) {
  const {
    annualIncome, householdSize, state, age, citizenshipStatus,
    hasChildren, childAges, isPregnant, disabilityStatus, veteranStatus,
    employmentStatus, housingStatus, utilityHardship, studentStatus,
  } = profile;

  const fplPercent = estimateFPL(annualIncome, householdSize);
  let confidence = 0;
  let reasons = [];
  let concerns = [];

  // State match
  if (program.states && !program.states.includes(state)) {
    return { eligible: false, confidence: 0, reasons: [], concerns: ['Program not available in your state'] };
  }

  // Income check
  if (program.incomeLimitPercent) {
    if (fplPercent <= program.incomeLimitPercent) {
      confidence += 40;
      reasons.push(`Your income (~${fplPercent}% FPL) is within the ${program.incomeLimitPercent}% FPL limit`);
    } else {
      concerns.push(`Your income (~${fplPercent}% FPL) may exceed the ${program.incomeLimitPercent}% FPL limit`);
      confidence -= 30;
    }
  } else {
    confidence += 20; // No hard income limit known
  }

  // Factor-based confidence
  const factors = program.confidenceFactors || [];

  if (factors.includes('age') && age) {
    if (program.id === 'medicare' && age >= 65) { confidence += 30; reasons.push('Age 65+ qualifies for Medicare'); }
    if (program.id === 'ssi' && age >= 65) { confidence += 25; reasons.push('Age 65+ may qualify for SSI'); }
    if (program.id === 'pa-property-tax-rebate' && age >= 65) { confidence += 20; }
  }

  if (factors.includes('hasChildren') && hasChildren) {
    confidence += 15;
    reasons.push('Having children increases likelihood for family programs');
  }

  if (factors.includes('isPregnant') && isPregnant) {
    confidence += 25;
    reasons.push('Pregnancy qualifies you for expanded WIC and Medicaid coverage');
  }

  if (factors.includes('disabilityStatus') && disabilityStatus) {
    if (['ssa-disability', 'ssi'].includes(program.id)) {
      confidence += 35;
      reasons.push('Reported disability aligns with program eligibility criteria');
    } else {
      confidence += 10;
    }
  }

  if (factors.includes('veteranStatus') && veteranStatus) {
    if (program.category === CATEGORIES.VETERANS) {
      confidence += 40;
      reasons.push('Veteran status directly qualifies you for VA programs');
    }
  }

  if (factors.includes('employmentStatus') && employmentStatus === 'recently_unemployed') {
    if (program.id === 'unemployment') { confidence += 35; reasons.push('Recent job loss aligns with UI eligibility'); }
  }

  if (factors.includes('utilityHardship') && utilityHardship) {
    if (program.category === CATEGORIES.UTILITIES) {
      confidence += 30;
      reasons.push('Reported utility hardship aligns with energy assistance programs');
    }
  }

  if (factors.includes('citizenshipStatus')) {
    if (citizenshipStatus === 'citizen') {
      confidence += 15;
      reasons.push('US citizenship meets citizenship requirements');
    } else if (citizenshipStatus === 'lpr') {
      confidence += 8;
      reasons.push('LPR status may meet citizenship requirements after 5-year waiting period for some programs');
    } else if (citizenshipStatus === 'undocumented') {
      concerns.push('Citizenship requirements may limit eligibility for this program');
      confidence -= 20;
    }
  }

  // Clamp confidence
  confidence = Math.min(Math.max(confidence, 0), 95);

  let eligibilityLevel;
  if (confidence >= 60) eligibilityLevel = 'likely';
  else if (confidence >= 30) eligibilityLevel = 'potential';
  else eligibilityLevel = 'unlikely';

  return { eligible: eligibilityLevel !== 'unlikely', eligibilityLevel, confidence, reasons, concerns };
}

export const ALL_PROGRAMS = [...FEDERAL_PROGRAMS, ...STATE_PROGRAMS, ...NONPROFIT_PROGRAMS];

export function getMatchingPrograms(profile) {
  return ALL_PROGRAMS
    .map(program => ({
      ...program,
      eligibility: estimateEligibility(program, profile),
    }))
    .filter(p => p.eligibility.eligible)
    .sort((a, b) => b.eligibility.confidence - a.eligibility.confidence);
}