# Counter - Compiled Package

## Compilation Strategies

Depending on what you need from your library, you can choose one of three compilation strategies:

- Just-in-Time Packages: Create minimal configuration for your package by allowing application bundlers to compile the package as it uses it.

        - No build script:
        - No TypeScript paths:

- Compiled Packages: With a moderate amount of configuration, compile your package using a build tool like tsc or a bundler.

- Publishable Packages: Compile and prepare a package to publish to the npm registry. This approach requires the most configuration.
