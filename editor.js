document.addEventListener('DOMContentLoaded', () => {
    const codeEditor = document.getElementById('codeEditor');
    const languageSelect = document.getElementById('languageSelect');

    // Handle tab key in editor
    codeEditor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = codeEditor.selectionStart;
            const end = codeEditor.selectionEnd;
            const spaces = '    ';
            
            codeEditor.value = codeEditor.value.substring(0, start) + spaces + codeEditor.value.substring(end);
            codeEditor.selectionStart = codeEditor.selectionEnd = start + spaces.length;
        }
    });

    // Update placeholder based on selected language
    languageSelect.addEventListener('change', () => {
        const language = languageSelect.value;
        const config = LANGUAGE_CONFIGS[language];
        
        if (codeEditor.value === '' || Object.values(LANGUAGE_CONFIGS).some(cfg => cfg.placeholder === codeEditor.value)) {
            codeEditor.value = config.placeholder || '';
        }
    });
});