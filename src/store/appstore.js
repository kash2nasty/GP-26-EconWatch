/**
 * GP EconWatch — Application State Store (Zustand)
 * Designed for the Germination Project
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getMatchingPrograms } from '../data/programs.js';

// Anonymous session ID — no PII
const generateSessionId = () => `anon_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

const defaultProfile = {
  state: '',
  county: '',
  zipCode: '',
  householdSize: 1,
  annualIncome: '',
  age: '',
  employmentStatus: '',
  veteranStatus: false,
  disabilityStatus: false,
  citizenshipStatus: '',
  studentStatus: false,
  isPregnant: false,
  hasChildren: false,
  childAges: [],
  housingStatus: '',
  utilityHardship: false,
  hasHealthInsurance: false,
  isRetired: false,
  recentJobLoss: false,
};

export const useAppStore = create(
  persist(
    (set, get) => ({
      // Session
      sessionId: generateSessionId(),
      language: 'en',

      // Profile (anonymous by default)
      profile: { ...defaultProfile },
      profileComplete: false,
      currentStep: 0,

      // Results
      matchedPrograms: [],
      likelyPrograms: [],
      potentialPrograms: [],
      isSearching: false,
      hasSearched: false,

      // UI state
      activeCategory: 'all',
      searchQuery: '',
      selectedProgram: null,
      chatOpen: false,
      chatMessages: [],

      // Document wallet
      documents: [],
      readinessScore: 0,

      // Analytics (anonymous)
      totalBenefitsDiscovered: 0,
      searchCount: 0,

      // Actions
      setLanguage: (lang) => set({ language: lang }),

      updateProfile: (updates) => {
        set(state => ({
          profile: { ...state.profile, ...updates }
        }));
      },

      setCurrentStep: (step) => set({ currentStep: step }),

      runEligibilitySearch: () => {
        set({ isSearching: true });
        const { profile } = get();

        // Simulate async processing
        setTimeout(() => {
          const matched = getMatchingPrograms(profile);
          const likely = matched.filter(p => p.eligibility.eligibilityLevel === 'likely');
          const potential = matched.filter(p => p.eligibility.eligibilityLevel === 'potential');

          // Benefits discovered estimate
          const totalBenefits = likely.reduce((sum, p) => {
            const match = (p.benefitAmount || '').match(/\$[\d,]+/);
            if (match) return sum + parseInt(match[0].replace(/[$,]/g, ''));
            return sum;
          }, 0);

          set({
            matchedPrograms: matched,
            likelyPrograms: likely,
            potentialPrograms: potential,
            isSearching: false,
            hasSearched: true,
            profileComplete: true,
            totalBenefitsDiscovered: totalBenefits,
            searchCount: get().searchCount + 1,
            readinessScore: calculateReadinessScore(profile),
          });
        }, 1200);
      },

      setActiveCategory: (cat) => set({ activeCategory: cat }),
      setSearchQuery: (q) => set({ searchQuery: q }),
      setSelectedProgram: (p) => set({ selectedProgram: p }),
      toggleChat: () => set(state => ({ chatOpen: !state.chatOpen })),

      addChatMessage: (message) =>
        set(state => ({
          chatMessages: [...state.chatMessages, { ...message, id: Date.now() }]
        })),

      clearProfile: () =>
        set({
          profile: { ...defaultProfile },
          matchedPrograms: [],
          likelyPrograms: [],
          potentialPrograms: [],
          hasSearched: false,
          profileComplete: false,
          currentStep: 0,
          readinessScore: 0,
        }),

      addDocument: (doc) =>
        set(state => ({
          documents: [...state.documents, { ...doc, id: Date.now() }]
        })),

      removeDocument: (id) =>
        set(state => ({
          documents: state.documents.filter(d => d.id !== id)
        })),
    }),
    {
      name: 'gp-econwatch-session',
      partialize: (state) => ({
        sessionId: state.sessionId,
        language: state.language,
        profile: state.profile,
        documents: state.documents,
        chatMessages: state.chatMessages,
      }),
    }
  )
);

function calculateReadinessScore(profile) {
  let score = 0;
  const checks = [
    [!!profile.state, 10],
    [!!profile.annualIncome, 20],
    [!!profile.householdSize, 10],
    [!!profile.age, 10],
    [!!profile.employmentStatus, 10],
    [!!profile.citizenshipStatus, 10],
    [!!profile.housingStatus, 10],
    [profile.veteranStatus !== undefined, 5],
    [profile.disabilityStatus !== undefined, 5],
    [!!profile.zipCode, 10],
  ];
  checks.forEach(([condition, points]) => {
    if (condition) score += points;
  });
  return Math.min(score, 100);
}