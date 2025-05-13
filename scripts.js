
// Toggle Side Menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event propagation
    const isOpen = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
        menu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
 }
});

document.addEventListener("DOMContentLoaded", function() {
    // Array holding the service data (images, titles, descriptions)
    const services = [
        {
            img: "images/cybersecurity_assessments.png", 
            title: "Cybersecurity Assessments", 
            desc: "Evaluating the security of networks and systems to identify vulnerabilities. Our company offers and thoroughly evaluates your network and systems for vulnerabilities. Identify potential threats and provide actionable recommendations to strengthen your security posture."
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

    // Select the container where the services will be displayed
    const serviceContainer = document.querySelector('.services');

    // Iterate through the services array and generate the HTML for each service
    services.forEach(service => {
        // Create a new div element for each service
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service-item');
        
        // Add the service content
        serviceDiv.innerHTML = `
            <h3>${service.title}:</h3>
            <img src="${service.img}" alt="${service.title} Image" style="width: 100%; height: auto;">
            <p>${service.desc}</p>
        `;
        
        // Append the service div to the container
        serviceContainer.appendChild(serviceDiv);
    });
});
