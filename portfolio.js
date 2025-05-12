
      // Theme Toggle
      document.getElementById("theme-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark");
      });

      // Scroll Progress Bar & Back-to-Top Button
      window.addEventListener("scroll", () => {
        const progressBar = document.getElementById("progress-bar");
        const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progressBar.style.width = ((window.scrollY / scrollTotal) * 100) + "%";
        document.getElementById("back-to-top").style.display = window.scrollY > 300 ? "block" : "none";
      });
      document.getElementById("back-to-top").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Reveal Sections on Scroll
      const sections = document.querySelectorAll("section");
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      sections.forEach(section => observer.observe(section));

      // Interactive Project Modals
      const projects = document.querySelectorAll(".project");
      const modal = document.getElementById("modal");
      const modalTitle = document.getElementById("modal-title");
      const modalDescription = document.getElementById("modal-description");
      const modalClose = document.getElementById("modal-close");
      projects.forEach(project => {
        project.addEventListener("click", function () {
          modalTitle.textContent = this.dataset.title;
          modalDescription.textContent = this.dataset.description;
          modal.style.display = "flex";
        });
      });
      modalClose.addEventListener("click", () => { modal.style.display = "none"; });
      window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });
