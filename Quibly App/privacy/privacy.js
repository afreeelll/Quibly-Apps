export function renderPrivacyPolice() {
  const container = document.createElement("div");
  container.className = "container";

  container.innerHTML = `
    <h1>Privacy Policy</h1>
    <p>This Privacy Policy describes how Quibly ("we", "us", or "our") collects, uses, and shares personal information when you use our website <strong>[www.quibly.com]</strong> (the "Site"). By accessing or using the Site, you agree to the terms of this Privacy Policy.</p>

    <h2>Information We Collect</h2>
    <p>We may collect certain information automatically when you visit our Site, including:</p>
    <ul>
      <li><strong>Log Files:</strong> Our servers automatically record certain information when you access the Site, including your IP address, browser type, referring/exit pages, and the date/time of your visit.</li>
    </ul>

    <h2>How We Use Your Information</h2>
    <p>We may use the information we collect for various purposes, including:</p>
    <ul>
      <li><strong>Personalization:</strong> To personalize your experience on the Site and to provide you with tailored content and advertisements.</li>
      <li><strong>Service Improvement:</strong> To analyze trends, track user movements, and improve the functionality and performance of the Site.</li>
    </ul>

    <h2>Sharing Information</h2>
    <p>Your data won't be transferred, used, or sold by any third party, regardless of:</p>
    <ul>
      <li>Google Scholar</li>
    </ul>

    <h2>Acceptance of this Policy</h2>
    <p>By using our Site, you indicate your acceptance of this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Site.</p>

    <h2>Third Party Services</h2>
    <p>We may use third-party services, such as analytics providers and data sources, which may also collect information about your online activities through cookies and similar technologies. These third parties have their own privacy policies that govern the use of your information.</p>

    <h2>Data Security</h2>
    <p>We take reasonable steps to protect the security of your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

    <p class="last-updated"><strong>Last updated:</strong> 13/05/2025</p>
  `;

  return container;
}
