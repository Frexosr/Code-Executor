const LANGUAGE_CONFIGS = {
    javascript: {
        executable: true,
        placeholder: '// Écrivez votre code JavaScript ici\nconsole.log("Hello, World!");',
        extension: 'js'
    },
    python: {
        executable: false,
        placeholder: '# Écrivez votre code Python ici\nprint("Hello, World!")',
        extension: 'py'
    },
    html: {
        executable: false,
        placeholder: '<!-- Écrivez votre code HTML ici -->\n<h1>Hello, World!</h1>',
        extension: 'html'
    },
    css: {
        executable: false,
        placeholder: '/* Écrivez votre code CSS ici */\nbody {\n    color: blue;\n}',
        extension: 'css'
    },
    c: {
        executable: false,
        placeholder: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
        extension: 'c',
        errorMessage: "L'exécution de code C n'est pas disponible dans le navigateur. Utilisez un environnement de développement local."
    },
    cpp: {
        executable: false,
        placeholder: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
        extension: 'cpp',
        errorMessage: "L'exécution de code C++ n'est pas disponible dans le navigateur. Utilisez un environnement de développement local."
    },
    csharp: {
        executable: false,
        placeholder: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}',
        extension: 'cs',
        errorMessage: "L'exécution de code C# n'est pas disponible dans le navigateur. Utilisez un environnement de développement local."
    },
    ruby: {
        executable: false,
        placeholder: 'puts "Hello, World!"',
        extension: 'rb'
    },
    java: {
        executable: false,
        placeholder: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
        extension: 'java',
        errorMessage: "L'exécution de code Java n'est pas disponible dans le navigateur. Utilisez un environnement de développement local."
    },
    rust: {
        executable: false,
        placeholder: 'fn main() {\n    println!("Hello, World!");\n}',
        extension: 'rs'
    }
};