// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Translations object
    const translations = {
        en: {
            nav_about: "About",
            nav_features: "Features",
            nav_campaign: "Campaign",
            nav_download: "Download",
            hero_title: "Revolutionizing Chess Experience",
            hero_subtitle: "The ultimate chess platform for players of all levels",
            hero_cta1: "Download Now",
            hero_cta2: "Support Our Campaign",
            about_title: "About YourChess",
            about_text1: "YourChess is a revolutionary chess platform designed to transform how players learn, practice, and enjoy the game of chess.",
            about_text2: "Founded by passionate chess enthusiasts, our mission is to make chess more accessible and enjoyable for everyone.",
            features_title: "Key Features",
            feature1_title: "AI Opponents",
            feature1_text: "Play against our advanced chess AI with adjustable difficulty levels.",
            feature2_title: "Interactive Lessons",
            feature2_text: "Learn from comprehensive tutorials and improve your skills.",
            feature3_title: "Online Multiplayer",
            feature3_text: "Challenge players from around the world in real-time matches.",
            campaign_title: "Indiegogo Campaign",
            campaign_text1: "We're running an Indiegogo campaign to bring YourChess to the next level.",
            campaign_text2: "Your support will help us develop more features and reach more chess enthusiasts worldwide.",
            campaign_cta: "Support Us",
            download_title: "Download YourChess",
            download_subtitle: "Get Started Now",
            download_text: "Download the YourChess installer and begin your chess journey today.",
            download_btn: "Download (v1.0)",
            requirements_title: "System Requirements:",
            req1: "Windows 10/11",
            req2: "2GB RAM",
            req3: "500MB disk space",
            footer_about: "About",
            footer_features: "Features",
            footer_campaign: "Campaign",
            footer_download: "Download",
            footer_copyright: "© 2023 YourChess. All rights reserved."
        },
        cs: {
            nav_about: "O nás",
            nav_features: "Vlastnosti",
            nav_campaign: "Kampaň",
            nav_download: "Stáhnout",
            hero_title: "Revoluce v šachovém zážitku",
            hero_subtitle: "Špičková šachová platforma pro hráče všech úrovní",
            hero_cta1: "Stáhnout nyní",
            hero_cta2: "Podpořte naši kampaň",
            about_title: "O YourChess",
            about_text1: "YourChess je revoluční šachová platforma navržená k transformaci toho, jak se hráči učí, trénují a užívají si šachovou hru.",
            about_text2: "Založeno vášnivými šachovými nadšenci, naším cílem je učinit šachy dostupnější a příjemnější pro všechny.",
            features_title: "Klíčové vlastnosti",
            feature1_title: "AI Soupeři",
            feature1_text: "Hrajte proti našemu pokročilému šachovému AI s nastavitelnou úrovní obtížnosti.",
            feature2_title: "Interaktivní lekce",
            feature2_text: "Učte se z komplexních tutoriálů a zlepšujte své dovednosti.",
            feature3_title: "Online multiplayer",
            feature3_text: "Vyzyvejte hráče z celého světa v reálném čase.",
            campaign_title: "Indiegogo Kampaň",
            campaign_text1: "Pořádáme kampaň na Indiegogo, abychom posunuli YourChess na vyšší úroveň.",
            campaign_text2: "Vaše podpora nám pomůže vyvinout více funkcí a oslovit více šachových nadšenců po celém světě.",
            campaign_cta: "Podpořte nás",
            download_title: "Stáhnout YourChess",
            download_subtitle: "Začněte nyní",
            download_text: "Stáhněte si instalační program YourChess a začněte svou šachovou cestu již dnes.",
            download_btn: "Stáhnout (v1.0)",
            requirements_title: "Systémové požadavky:",
            req1: "Windows 10/11",
            req2: "2GB RAM",
            req3: "500MB místa na disku",
            footer_about: "O nás",
            footer_features: "Vlastnosti",
            footer_campaign: "Kampaň",
            footer_download: "Stáhnout",
            footer_copyright: "© 2023 YourChess. Všechna práva vyhrazena."
        }
    };

    // Set initial language
    let currentLang = 'en';
    
    // Language switcher buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Set new language
            currentLang = this.getAttribute('data-lang');
            
            // Update all translatable elements
            updateLanguage(currentLang);
        });
    });
    
    // Function to update language
    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll animation to sections
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Theme switcher (optional)
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
});
