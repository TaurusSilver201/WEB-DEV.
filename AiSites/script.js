const links = document.querySelectorAll('#linkList li a');
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  links.forEach(link => {
    const linkText = link.textContent.toLowerCase();
    if (linkText.includes(searchTerm)) {
      link.parentElement.style.display = 'block';
    } else {
      link.parentElement.style.display = 'none';
    }
  });
});

function sendClaudePrompt() {
  const promptText = document.getElementById('claudePrompt').value;
  // Simulate sending the prompt to Claude (replace with actual API call if available)
  const response = "Here's a possible response from Claude: " + promptText;
  document.getElementById('claudeResponse').textContent = response;
}
