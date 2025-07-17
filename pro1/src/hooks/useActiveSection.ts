import { useState, useEffect } from 'react';
import { getActiveSection } from '@utils/scrollUtils';

export const useActiveSection = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState(sections[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(getActiveSection(sections));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return activeSection;
};