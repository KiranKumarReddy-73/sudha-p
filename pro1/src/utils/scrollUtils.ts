export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const getActiveSection = (sections: string[]): string => {
  const scrollPosition = window.scrollY + 100;
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return section;
      }
    }
  }
  
  return sections[0] || 'home';
};