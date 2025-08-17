/// <reference types="vite/client" />

// Extend Window interface for Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export {};