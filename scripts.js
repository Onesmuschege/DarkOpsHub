// Toggle Side Menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const backToTopButton = document.getElementById('backToTop');
    const contactForm = document.getElementById('contact-form');

    // Toggle menu when button is clicked
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = menu.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (menu && !menu.contains(e.target)) {
            menu.classList.remove('open');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', false);
            }
        }
    });

    // Back to top button functionality
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Array holding the service data (images, titles, descriptions)
    const services = [
        {
            img: "images/cybersecurity_assessments.png",
            title: "Cybersecurity Assessments",
            desc: "Evaluating the security of networks and systems to identify vulnerabilities. Our company thoroughly evaluates your network and systems for vulnerabilities, identifies potential threats, and provides actionable recommendations to strengthen your security posture."
        },
        {
            img: "images/data_encryption.png",
            title: "Data Encryption Services",
            desc: "Ensure your data is secure from unauthorized access. Implement robust encryption protocols to protect sensitive information at rest and in transit."
        },
        {
            img: "images/incident_response.png",
            title: "Incident Response",
            desc: "Offer rapid response services to mitigate the impact of cyberattacks. Contain, eradicate, and recover from security incidents to minimize damage and restore normal operations."
        },
        {
            img: "images/network_security_monitoring.png",
            title: "Network Security Monitoring",
            desc: "Continuously monitor your network for suspicious activities. Detect and respond to potential threats in real-time to prevent security breaches before they happen."
        },
        {
            img: "images/compliance_consulting.png",
            title: "Compliance Consulting",
            desc: "Help your business comply with data protection regulations such as GDPR, HIPAA, and others. Provide guidance on implementing necessary policies and controls to meet legal requirements."
        },
        {
            img: "images/penetration_testing.png",
            title: "Penetration Testing",
            desc: "Simulate cyberattacks to identify and fix security weaknesses. Conduct comprehensive tests to expose vulnerabilities that could be exploited by malicious actors."
        },
        {
            img: "images/security_awareness_training.png",
            title: "Security Awareness Training",
            desc: "Educate your employees on best practices for preventing security breaches. Conduct training sessions to raise awareness about phishing, social engineering, and other common threats."
        },
        {
            img: "images/managed_security_services.png",
            title: "Managed Security Services",
            desc: "Outsource your security management to our team of experts. Provide ongoing protection and support, including threat monitoring, incident response, and regular security updates."
        },
        {
            img: "images/disaster_recovery.png",
            title: "Disaster Recovery Planning",
            desc: "Prepare for and respond to catastrophic data loss events. Develop and implement a comprehensive disaster recovery plan to ensure business continuity and minimize downtime."
        }
    ];

    // Additional services
    const additionalServices = [
        {
            img: "images/social_engineering_assessment.png",
            title: "Social Engineering Assessment",
            desc: "Test your organization's resilience against manipulation techniques. Our experts simulate real-world social engineering attacks to identify vulnerabilities in human security protocols and provide targeted training to strengthen your human firewall."
        },
        {
            img: "images/ransomware_protection.png",
            title: "Ransomware Protection",
            desc: "Comprehensive protection against the growing threat of ransomware. We implement multi-layered defense strategies including regular backups, network segmentation, endpoint protection, and employee training to prevent, detect, and recover from ransomware attacks."
        },
        {
            img: "images/iot_security.png",
            title: "IoT Security Solutions",
            desc: "Secure your growing Internet of Things ecosystem. From smart devices to industrial systems, we help secure all connected devices with proper network isolation, continuous monitoring, and firmware vulnerability assessment."
        },
        {
            img: "images/secure_coding.png",
            title: "Secure Coding Practices",
            desc: "Train your development team in secure coding methodologies. Our workshops cover OWASP Top 10 vulnerabilities, secure API development, input validation, and other essential practices to build security into your applications from the ground up."
        },
        {
            img: "images/dark_web_monitoring.png",
            title: "Dark Web Monitoring",
            desc: "Monitor the dark web for leaked credentials and sensitive information. Our specialized tools continuously scan dark web forums, marketplaces, and data dumps to alert you when your organization's data appears in unauthorized locations."
        }
    ];

    // Combine services and additional services
    const allServices = [...services, ...additionalServices];

    // Select the container where the services will be displayed
    const serviceContainer = document.getElementById('services-container');

    if (serviceContainer) {
        // Iterate through the combined services array and generate the HTML for each service
        allServices.forEach(service => {
            const serviceDiv = document.createElement('div');
            serviceDiv.classList.add('service-item');

            serviceDiv.innerHTML = `
                <h3>${service.title}</h3>
                <img src="${service.img}" alt="${service.title} Image">
                <p>${service.desc}</p>
            `;

            serviceContainer.appendChild(serviceDiv);
        });
    }

    // Statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number');

    // Helper function to animate counters
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100; // Divide the animation into 100 steps
        const duration = 2000; // Total animation duration in milliseconds
        const interval = duration / 100; // Time between steps

        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.round(current);

            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, interval);
    }

    // Intersection Observer to trigger animation when stats are visible
    const observerOptions = {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-count'), 10);
                animateCounter(element, target);
                observer.unobserve(element); // Stop observing once animation starts
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });

    // Client logos carousel/slider functionality (optional)
    const clientLogos = document.querySelector('.client-logos');
    if (clientLogos) {
        // Optional: Add automatic scrolling for logos
        // This is just a placeholder - you might want to use a proper carousel library

        /* Example of simple auto-scroll:
        let scrollPosition = 0;
        const scrollSpeed = 1;
        const scrollInterval = setInterval(() => {
            scrollPosition += scrollSpeed;
            if (scrollPosition >= clientLogos.scrollWidth / 2) {
                scrollPosition = 0;
            }
            clientLogos.scrollLeft = scrollPosition;
        }, 30);
        */
    }
});