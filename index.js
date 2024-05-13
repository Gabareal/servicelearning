function handleScroll() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav_link');
  
    sections.forEach((section, index) => {
      const top = section.offsetTop -200;
      const bottom = top + section.clientHeight;
  
      if (window.scrollY >= top && window.scrollY < bottom) {
        // Highlight corresponding nav link
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Function to handle click event on nav links
  document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const yOffset = -100; // Adjust offset as needed
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({top: y, behavior: 'smooth'});
    });
  });