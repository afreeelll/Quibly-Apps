// app.js - Main application entry point
import './main.css';
import { router } from './routes.js';

// Application initialization
class QuiblyApp {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setupApp();
      });
    } else {
      this.setupApp();
    }
  }

  setupApp() {
    // Create and add navbar
    const navbar = document.createElement('app-navbar');
    document.body.prepend(navbar);

    // Create and add footer
    const footer = document.createElement('app-footer');
    document.body.appendChild(footer);

    // Initialize router (already done in routes.js import)
    console.log('Quibly App initialized');

    // Setup global event handlers
    this.setupGlobalHandlers();
  }

  setupGlobalHandlers() {
    // Handle summarize functionality
    document.addEventListener('click', (e) => {
      if (e.target.id === 'summarizeBtn') {
        this.handleSummarize();
      }
    });

    // Handle file upload
    document.addEventListener('change', (e) => {
      if (e.target.id === 'pdfUpload') {
        this.handleFileUpload(e.target.files[0]);
      }
    });

    // Handle form submissions
    document.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (e.target.closest('.contact-form')) {
        this.handleContactForm(e.target);
      } else if (e.target.closest('.auth-form')) {
        this.handleAuthForm(e.target);
      }
    });

    // Handle action buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('action-btn')) {
        this.handleActionButton(e.target);
      }
    });
  }

  handleSummarize() {
    const textInput = document.getElementById('textInput');
    const summaryOutput = document.getElementById('summaryOutput');
    
    if (!textInput || !summaryOutput) return;

    const text = textInput.value.trim();
    
    if (!text) {
      alert('Please enter some text to summarize.');
      return;
    }

    // Simulate AI summarization (replace with actual API call)
    summaryOutput.innerHTML = '<div class="loading">Generating summary...</div>';
    
    setTimeout(() => {
      const summary = this.generateMockSummary(text);
      summaryOutput.innerHTML = `
        <div class="summary-content">
          <h3>Summary</h3>
          <p>${summary}</p>
          <div class="keywords">
            <h4>Key Terms:</h4>
            <span class="keyword">AI</span>
            <span class="keyword">Technology</span>
            <span class="keyword">Innovation</span>
          </div>
        </div>
      `;
    }, 2000);
  }

  generateMockSummary(text) {
    // Simple mock summarization - in real app, this would call an API
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const summaryLength = Math.max(1, Math.ceil(sentences.length / 3));
    const selectedSentences = sentences.slice(0, summaryLength);
    return selectedSentences.join('. ') + '.';
  }

  handleFileUpload(file) {
    if (!file) return;

    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file.');
      return;
    }

    // Simulate PDF processing
    const textInput = document.getElementById('textInput');
    if (textInput) {
      textInput.value = 'PDF content extracted... (This is a mock extraction. In a real app, this would extract actual PDF text.)';
    }
  }

  handleContactForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    alert(`Thank you for your message, ${data.name}! We'll get back to you soon.`);
    form.reset();
  }

  handleAuthForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate authentication
    if (data.email && data.password) {
      alert(`Welcome back! You're now signed in as ${data.email}`);
      router.navigate('/');
    }
  }

  handleActionButton(button) {
    const action = button.textContent.toLowerCase();
    
    switch (action) {
      case 'download':
        this.downloadSummary();
        break;
      case 'copy':
        this.copySummary();
        break;
      case 'save to library':
        this.saveToLibrary();
        break;
      default:
        console.log('Unknown action:', action);
    }
  }

  downloadSummary() {
    const summaryContent = document.querySelector('.summary-content');
    if (summaryContent) {
      const text = summaryContent.textContent;
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'summary.txt';
      a.click();
      URL.revokeObjectURL(url);
    }
  }

  copySummary() {
    const summaryContent = document.querySelector('.summary-content p');
    if (summaryContent) {
      navigator.clipboard.writeText(summaryContent.textContent)
        .then(() => alert('Summary copied to clipboard!'))
        .catch(() => alert('Failed to copy summary.'));
    }
  }

  saveToLibrary() {
    // Simulate saving to library
    alert('Summary saved to your library!');
  }
}

// Initialize the application
const app = new QuiblyApp();

// Export for potential external use
export default app;