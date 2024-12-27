document.addEventListener('DOMContentLoaded', () => {
    const runButton = document.getElementById('runButton');
    const clearButton = document.getElementById('clearButton');
    const output = document.getElementById('output');
    const codeEditor = document.getElementById('codeEditor');
    const languageSelect = document.getElementById('languageSelect');

    function detectCompiledLanguage(code) {
        // Détection de code C/C++
        if (code.includes('#include <stdio.h>') || 
            code.includes('#include <iostream>') ||
            code.includes('int main()')) {
            return 'compiled';
        }
        // Détection de code Java
        if (code.includes('public class') && 
            code.includes('public static void main(String[] args)')) {
            return 'compiled';
        }
        // Détection de code C#
        if (code.includes('using System;') && 
            code.includes('class Program')) {
            return 'compiled';
        }
        return 'script';
    }

    // Execute code
    runButton.addEventListener('click', () => {
        const code = codeEditor.value;
        const language = languageSelect.value;
        const config = LANGUAGE_CONFIGS[language];
        
        output.innerHTML = '';
        
        try {
            // Vérifier si c'est un langage compilé
            if (detectCompiledLanguage(code) === 'compiled') {
                output.innerHTML = `<span style="color: #e53e3e;">Erreur: Ce code nécessite une compilation. Veuillez utiliser un environnement de développement approprié pour les langages compilés.</span>`;
                return;
            }

            if (language === 'javascript' && config.executable) {
                // Capture console.log output
                const oldLog = console.log;
                let logs = [];
                
                console.log = (...args) => {
                    logs.push(args.map(arg => 
                        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
                    ).join(' '));
                };
                
                // Execute the code
                eval(code);
                
                // Restore console.log and display output
                console.log = oldLog;
                output.textContent = logs.join('\n');
            } else if (config.errorMessage) {
                output.innerHTML = `<span style="color: #e53e3e;">${config.errorMessage}</span>`;
            } else {
                output.textContent = `Simulation d'exécution pour ${language}:\n${code}`;
            }
        } catch (error) {
            output.innerHTML = `<span style="color: #e53e3e;">Erreur: ${error.message}</span>`;
        }
    });

    // Clear output
    clearButton.addEventListener('click', () => {
        output.textContent = '';
    });
});