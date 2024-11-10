function openModal(itemTitle) {
    const modal = document.getElementById('portfolioModal');
    const modalInfo = document.getElementById('modalInfo');
  
    // Sample content for each item
    const portfolioData = {
      "Foodieland": {
        title: "Foodieland",
        description: "Foodieland is a recipe-sharing website offering food recipes, calorie information, and a blog, designed for easy access to healthy cooking ideas.",
       // created: "4 oct 2023",
        technologies: "HTML, CSS",
        role: "Frontend",
        link: "https://foodieland-navy.vercel.app/"
      },
      "Book-Store": {
        title: "Book Store Design",
        description: "Book Store is an online platform where users can browse, search, and purchase books across various genres, with features like user reviews, ratings, and a seamless checkout process",
        //created: "10 Dec 2023",
        technologies: "HTML, CSS, JavaScript",
        role: "Full Stack",
        link: "https://book-store-hazel-one.vercel.app/index.html"
      },
      "Travel #7": {
        title: "Travel App Landing Page",
        description: "Travel is a website that helps users explore popular travel destinations, book trips, and access helpful travel guides and tips..",
        //created: "18 Feb 2024",
        technologies: "HTML, CSS, JavaScript",
        role: "Frontend",
        link: "https://travelia-seven.vercel.app/"
      },
      "Canteen-Food": {
        title: "Canteen Food Delivery App",
        description: "Canteen Food is a web-site that allows users to view and order food items from a canteen menu, with features for easy browsing and ordering",
       // created: "10 Mar 2024",
        technologies: "React, Node.js",
        role: "Full Stack",
        link: "https://www.canteenfood.com"
      }
    };
  
    const content = portfolioData[itemTitle];
  
    modalInfo.innerHTML = `
      <span class="portfolio-tag"></span>
      <h2 class="portfolio-title">${content.title}</h2>
      <p class="portfolio-description">${content.description}</p>
      <p class="portfolio-info"><strong>Technologies</strong> - ${content.technologies}</p>
      <p class="portfolio-info"><strong>Role</strong> - ${content.role}</p>
      <p class="portfolio-info"><strong>View</strong> - <a href="${content.link}" target="_blank">${content.link}</a></p>
    `;
  
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'none';
  }
  