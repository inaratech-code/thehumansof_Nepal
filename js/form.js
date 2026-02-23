/**
 * Contribution form: validation and success/failure feedback
 */

(function () {
  'use strict';

  var form = document.getElementById('contribute-form');
  var feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = (form.querySelector('#name') || {}).value || '';
    var email = (form.querySelector('#email') || {}).value || '';
    var title = (form.querySelector('#story-title') || {}).value || '';
    var storyText = (form.querySelector('#story-text') || {}).value || '';

    feedback.classList.remove('success', 'error', 'visible');

    if (!name.trim()) {
      showFeedback('Please enter your name.', 'error');
      return;
    }
    if (!email.trim()) {
      showFeedback('Please enter your email.', 'error');
      return;
    }
    if (!title.trim()) {
      showFeedback('Please enter a story title.', 'error');
      return;
    }
    if (!storyText.trim()) {
      showFeedback('Please write your story.', 'error');
      return;
    }

    // Simulate submit (replace with real API call)
    simulateSubmit();
  });

  function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = 'form-feedback visible ' + type;
    feedback.focus();
  }

  function simulateSubmit() {
    // In production: send to your backend/CMS
    showFeedback('Thank you! Your story has been submitted. We will review it and get back to you.', 'success');
    form.reset();
  }
})();
