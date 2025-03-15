// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  setTimeout(() => {
    document.getElementById("preloader").style.opacity = "0"
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none"
    }, 500)
  }, 2000)

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active")
    document.body.classList.toggle("no-scroll")

    // Animate toggle button
    const spans = this.querySelectorAll("span")
    if (mobileMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll(".mobile-nav-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.body.classList.remove("no-scroll")

      const spans = menuToggle.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    })
  })

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light")

    // Save theme preference
    if (body.classList.contains("light")) {
      localStorage.setItem("theme", "light")
    } else {
      localStorage.setItem("theme", "dark")
    }
  })

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    body.classList.add("light")
  }

  // Typing effect
  const typedTextElement = document.getElementById("typed-text")
  const fullText = "VISHAL BOBHATE"
  let currentIndex = 0

  function typeText() {
    if (currentIndex <= fullText.length) {
      typedTextElement.textContent = fullText.slice(0, currentIndex)
      currentIndex++
      setTimeout(typeText, 100)
    } else {
      setTimeout(resetTyping, 2000)
    }
  }

  function resetTyping() {
    currentIndex = 0
    typeText()
  }

  typeText()

  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons and panes
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabPanes.forEach((pane) => pane.classList.remove("active"))

      // Add active class to clicked button and corresponding pane
      this.classList.add("active")
      const tabId = this.getAttribute("data-tab")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Animate skill progress bars when in viewport
  const skillCards = document.querySelectorAll(".skill-card")

  function animateSkills() {
    skillCards.forEach((card) => {
      const progressBar = card.querySelector(".progress-bar")
      const progressValue = progressBar.getAttribute("data-progress")

      const cardPosition = card.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (cardPosition < screenPosition) {
        progressBar.style.width = `${progressValue}%`
      }
    })
  }

  // Project modal
  const projectModal = document.getElementById("project-modal")
  const projectExpandButtons = document.querySelectorAll(".project-expand")
  const projectDetailsButtons = document.querySelectorAll(".project-details-btn")
  const modalCloseButtons = document.querySelectorAll(".modal-close")

  const projects = [
    {
      title: "Effect Of Corrosion of a Queous H2S On AM316L Stainless Steel",
      description:
        "Collaborative research project with Department of Civil Engineering PCCOER, Ravet, Pune & Department of Metallurgical and Materials Engineering DIAT, Girinagar Pune. Conducted comprehensive analysis of how aqueous H2S affects AM316L stainless steel, with implications for construction in corrosive environments.",
      image: "https://placehold.co/1200x800",
      tags: ["Materials Engineering", "Corrosion Analysis", "Stainless Steel", "Research"],
    },
    {
      title: "Breathing Bricks",
      description:
        "Created pollution-absorbing bricks by introducing a coupler made of recycled plastic between two bricks. Implemented a hopper at the base for efficient collection of particles. This innovative design helps reduce air pollution while providing a sustainable construction solution.",
      image: "https://placehold.co/1200x800",
      tags: ["Sustainable Construction", "Air Pollution", "Recycled Materials", "Innovation"],
    },
    {
      title: "Effect Of Partial Binding Of Coconut Shell On Concrete",
      description:
        "Conducted research to evaluate the feasibility and benefits of using coconut shell as a partial binding material in concrete. Explored how incorporating coconut shells as a partial binding agent affects concrete properties, including strength, durability, and environmental impact.",
      image: "https://placehold.co/1200x800",
      tags: ["Sustainable Materials", "Concrete Technology", "Research", "Waste Utilization"],
    },
  ]

  function openProjectModal(index) {
    const project = projects[index]

    document.getElementById("modal-title").textContent = project.title
    document.getElementById("modal-image").src = project.image
    document.getElementById("modal-description").textContent = project.description

    // Clear and populate tags
    const modalTags = document.getElementById("modal-tags")
    modalTags.innerHTML = ""
    project.tags.forEach((tag) => {
      const tagElement = document.createElement("span")
      tagElement.className = "project-tag"
      tagElement.textContent = tag
      modalTags.appendChild(tagElement)
    })

    projectModal.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  projectExpandButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      openProjectModal(index)
    })
  })

  projectDetailsButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      openProjectModal(index)
    })
  })

  // Achievement modal
  const achievementModal = document.getElementById("achievement-modal")
  const achievementImages = document.querySelectorAll(".achievement-image")

  const achievements = [
    {
      title: "Bridge Making Competition",
      issuer: "J.S.P.M College",
      date: "April 2023",
      image: "https://placehold.co/800x600",
      description: "1st Prize in Bridge Making Competition Using Popsicle Sticks",
    },
    {
      title: "State Level Bridge Making Competition",
      issuer: "State Engineering Association",
      date: "September 2022",
      image: "https://placehold.co/800x600",
      description: "2nd Prize in State Level Bridge Making Competition Using Popsicle Sticks",
    },
    {
      title: "CAD MASTER Competition",
      issuer: "Engineering Design Association",
      date: "2022",
      image: "https://placehold.co/800x600",
      description: "2nd Prize in CAD MASTER Competition showcasing advanced AutoCAD skills",
    },
  ]

  function openAchievementModal(index) {
    const achievement = achievements[index]

    document.getElementById("achievement-modal-title").textContent = achievement.title
    document.getElementById("achievement-modal-image").src = achievement.image
    document.getElementById("achievement-modal-issuer").textContent = achievement.issuer
    document.getElementById("achievement-modal-date").textContent = achievement.date
    document.getElementById("achievement-modal-description").textContent = achievement.description

    achievementModal.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  achievementImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      openAchievementModal(index)
    })
  })

  // Close modals
  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      projectModal.classList.remove("active")
      achievementModal.classList.remove("active")
      document.body.style.overflow = "auto"
    })
  })

  // Close modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      projectModal.classList.remove("active")
      document.body.style.overflow = "auto"
    }
    if (event.target === achievementModal) {
      achievementModal.classList.remove("active")
      document.body.style.overflow = "auto"
    }
  })

  // Carousel navigation
  const carousel = document.querySelector(".achievements-carousel")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" })
  })

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" })
  })

  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  const formSuccess = document.getElementById("form-success")
  const submitBtn = document.querySelector(".submit-btn")

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault()

    // Show loading state
    submitBtn.classList.add("loading")

    // Simulate form submission
    setTimeout(() => {
      submitBtn.classList.remove("loading")
      contactForm.style.display = "none"
      formSuccess.style.display = "block"

      // Reset form
      contactForm.reset()

      // Hide success message after 5 seconds
      setTimeout(() => {
        contactForm.style.display = "flex"
        formSuccess.style.display = "none"
      }, 5000)
    }, 1500)
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Scroll animations
  function checkScroll() {
    // Animate skill progress bars
    animateSkills()

    // Add more scroll-based animations here
  }

  // Check scroll position on page load and scroll
  checkScroll()
  window.addEventListener("scroll", checkScroll)

  // Easter eggs
  const easterEgg = document.querySelector(".easter-egg")

  // Random position for easter egg on mousemove
  document.addEventListener("mousemove", (e) => {
    // 1 in 100 chance to show easter egg in a new position
    if (Math.random() < 0.001) {
      const x = Math.random() * (window.innerWidth - 100)
      const y = Math.random() * (window.innerHeight - 100)

      easterEgg.style.top = `${y}px`
      easterEgg.style.left = `${x}px`
      easterEgg.style.opacity = "0.1"

      setTimeout(() => {
        easterEgg.style.opacity = "0"
      }, 3000)
    }
  })

  // Konami code easter egg
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]
  let konamiIndex = 0

  document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++

      if (konamiIndex === konamiCode.length) {
        // Activate special effect when Konami code is entered
        document.body.classList.add("konami-active")

        // Create matrix-like effect
        const matrix = document.createElement("div")
        matrix.className = "matrix-effect"
        document.body.appendChild(matrix)

        for (let i = 0; i < 100; i++) {
          const drop = document.createElement("div")
          drop.className = "matrix-drop"
          drop.style.left = `${Math.random() * 100}%`
          drop.style.animationDuration = `${Math.random() * 2 + 1}s`
          drop.style.animationDelay = `${Math.random() * 2}s`
          drop.textContent = Math.random() > 0.5 ? "1" : "0"
          matrix.appendChild(drop)
        }

        setTimeout(() => {
          document.body.classList.remove("konami-active")
          matrix.remove()
        }, 5000)

        konamiIndex = 0
      }
    } else {
      konamiIndex = 0
    }
  })
})

