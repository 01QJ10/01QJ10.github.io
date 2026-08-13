// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications and research outputs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research across scientific machine learning, medical AI, quantum information, and industrial time-series modelling.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Research experience, education, publications, projects, and technical skills. Use the PDF icon to download the latest resume.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-被讨厌的勇气-courage-to-be-disliked",
          title: '被讨厌的勇气 (Courage to be Disliked)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-attended-the-16th-conference-on-learning-factories-in-bolzano-italy-and-co-authored-the-accepted-abstract-from-signals-to-decisions-a-pedagogical-pipeline-for-tool-wear-prediction-using-few-shot-learning",
          title: 'Attended the 16th Conference on Learning Factories in Bolzano, Italy, and co-authored the...',
          description: "",
          section: "News",},{id: "news-our-paper-autoencoding-assisted-quantum-cloning-machine-was-published-in-entropy",
          title: 'Our paper “Autoencoding-Assisted Quantum Cloning Machine” was published in Entropy.',
          description: "",
          section: "News",},{id: "projects-autoencoding-assisted-quantum-cloning",
          title: 'Autoencoding-Assisted Quantum Cloning',
          description: "A hybrid quantum autocloning method for improving the cloning of high-dimensional quantum states.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/autoencoding-assisted-quantum-cloning/";
            },},{id: "projects-generative-machine-learning-for-medical-diagnostics",
          title: 'Generative Machine Learning for Medical Diagnostics',
          description: "Variational autoencoding, scalable experimentation, and research-matching tools developed at IMH.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/imh-medical-ml/";
            },},{id: "projects-meta-pinn-for-fusion-plasma-equilibrium",
          title: 'Meta-PINN for Fusion Plasma Equilibrium',
          description: "JAX-based forward prediction and inverse parameter inference for the Grad–Shafranov equation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/meta-pinn-grad-shafranov/";
            },},{id: "projects-industrial-time-series-learning-for-predictive-maintenance",
          title: 'Industrial Time-Series Learning for Predictive Maintenance',
          description: "Foundation-model adaptation and few-shot learning for industrial fault detection and tool-wear prediction at A*STAR SIMTech.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/simtech-industrial-time-series/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%71%6A%75%6E%30%30%30%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/01QJ10", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/qjphotog", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/qjbeh", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
