document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const themeToggle = document.getElementById('theme-toggle');
  const customizeToggle = document.getElementById('customize-toggle');
  const customizePanel = document.getElementById('customizer-panel');
  const panelClose = document.getElementById('panel-close');
  const printBtn = document.getElementById('print-btn');
  
  // Customizer Controls
  const togglePhotoCheckbox = document.getElementById('toggle-photo');
  const toggleSummaryCheckbox = document.getElementById('toggle-summary');
  const toggleCertsCheckbox = document.getElementById('toggle-certs');
  const toggleAchievementsCheckbox = document.getElementById('toggle-achievements');
  const toggleActivitiesCheckbox = document.getElementById('toggle-activities');
  const styleBtns = document.querySelectorAll('.style-btn');
  
  // Resume Blocks to Toggle
  const photoBlock = document.getElementById('photo-block');
  const summaryBlock = document.getElementById('section-summary');
  const certsBlock = document.getElementById('section-certs');
  const achievementsBlock = document.getElementById('section-achievements');
  const activitiesBlock = document.getElementById('section-activities');
  
  // Interactive Elements
  const skillTags = document.querySelectorAll('.skill-tag');
  const projectCards = document.querySelectorAll('.project-card');

  // ==========================================================================
  // THEME MANAGEMENT (Dark / Light Mode)
  // ==========================================================================
  // Retrieve saved theme or default to 'dark'
  const savedTheme = localStorage.getItem('resume-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('resume-theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
      themeToggle.title = 'Switch to Light Mode';
    } else {
      icon.className = 'fa-solid fa-moon';
      themeToggle.title = 'Switch to Dark Mode';
    }
  }

  // ==========================================================================
  // CUSTOMIZER PANEL ACTIONS
  // ==========================================================================
  customizeToggle.addEventListener('click', () => {
    customizePanel.classList.toggle('closed');
  });

  panelClose.addEventListener('click', () => {
    customizePanel.classList.add('closed');
  });

  // Close panel if clicked outside
  document.addEventListener('click', (e) => {
    if (!customizePanel.contains(e.target) && 
        !customizeToggle.contains(e.target) && 
        !customizePanel.classList.contains('closed')) {
      customizePanel.classList.add('closed');
    }
  });

  // ==========================================================================
  // RESUME CUSTOMIZATION & PRINT SETTINGS
  // ==========================================================================
  
  // Toggle visibility of sections in web and print view
  togglePhotoCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      photoBlock.classList.remove('hide-element', 'no-print');
    } else {
      photoBlock.classList.add('hide-element', 'no-print');
    }
  });

  toggleSummaryCheckbox.addEventListener('change', (e) => {
    toggleSectionVisibility(summaryBlock, e.target.checked);
  });

  toggleCertsCheckbox.addEventListener('change', (e) => {
    toggleSectionVisibility(certsBlock, e.target.checked);
  });

  toggleAchievementsCheckbox.addEventListener('change', (e) => {
    toggleSectionVisibility(achievementsBlock, e.target.checked);
  });

  toggleActivitiesCheckbox.addEventListener('change', (e) => {
    toggleSectionVisibility(activitiesBlock, e.target.checked);
  });

  function toggleSectionVisibility(element, isVisible) {
    if (isVisible) {
      element.classList.remove('hide-element');
    } else {
      element.classList.add('hide-element');
    }
  }

  // Print Style switching
  styleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      styleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const selectedStyle = btn.dataset.style;
      
      // Clean print style body classes
      document.body.classList.remove('print-classic-formal', 'print-minimalist');
      
      if (selectedStyle === 'classic') {
        document.body.classList.add('print-classic-formal');
      } else if (selectedStyle === 'minimal') {
        document.body.classList.add('print-minimalist');
      }
    });
  });

  // Trigger browser print
  printBtn.addEventListener('click', () => {
    window.print();
  });

  // ==========================================================================
  // INTERACTIVE SKILL-PROJECT FILTERING
  // ==========================================================================
  skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const targetSkill = tag.dataset.skill;
      const isAlreadyHighlighted = tag.classList.contains('selected-highlight');
      
      // Clear previous tags highlights
      skillTags.forEach(t => t.classList.remove('selected-highlight'));
      
      if (isAlreadyHighlighted) {
        // Reset everything if clicking the same tag
        projectCards.forEach(card => {
          card.classList.remove('dimmed', 'highlighted-project');
        });
      } else {
        // Highlight clicked tag
        tag.classList.add('selected-highlight');
        
        projectCards.forEach(card => {
          const cardSkills = card.dataset.skills || '';
          if (cardSkills.includes(targetSkill)) {
            card.classList.remove('dimmed');
            card.classList.add('highlighted-project');
          } else {
            card.classList.add('dimmed');
            card.classList.remove('highlighted-project');
          }
        });
      }
    });
  });

  // Clicking on background resets project highlights
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.skill-tags') && !e.target.closest('.project-card') && !e.target.closest('.customizer-panel') && !e.target.closest('.app-header')) {
      skillTags.forEach(t => t.classList.remove('selected-highlight'));
      projectCards.forEach(card => {
        card.classList.remove('dimmed', 'highlighted-project');
      });
    }
  });
});
