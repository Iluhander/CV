// Setting skills headings onclick events.
const skillsHeadings = document.querySelectorAll('.skill');

for (let heading of skillsHeadings) {
  heading.onclick = (e) => {
    if (e.target.tagName === 'H2') {
      if (e.currentTarget.classList.contains('skill_hidden')) {
        e.currentTarget.classList.remove('skill_hidden');
      } else {
        e.currentTarget.classList.add('skill_hidden');
      }
    }
  }
}