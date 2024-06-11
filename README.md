# Resume App

This is a resume app built using Vue, Vite, and TypeScript. It allows you to render and manage a resume on the web, with the ability to generate a PDF version of the resume.

## Setup

To set up the project, follow these steps:

Install the dependencies:

```sh
pnpm install
```

## Development

To run the app in development mode:

```sh
pnpm dev
```

The app will be available locally at: [http://localhost:3000](http://localhost:3000)

## Generate PDF

To generate a PDF of the locally running website:

```sh
pnpm pdf-gen
```

This will create a PDF version of the resume based on the current state of the app.

---

## Technologies Used

- **Vue 3**: JavaScript framework for building user interfaces.
- **Vite**: Frontend build tool for fast development.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **pnpm**: Fast, disk space efficient package manager.
- **puppeteer**: Used to create a PDF out of a web page

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any feature requests or bug reports.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
