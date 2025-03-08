# Job Listing Aggregator

A modern full-stack application that aggregates job listings from multiple sources including Adzuna and GoRemote into a single, intuitive interface.

![Job Listing Aggregator Screenshot](https://placeholder-for-screenshot.com)

## Overview

This Next.js application allows users to:
- Search for jobs based on multiple criteria
- View paginated results of matching opportunities
- Access detailed information for individual job listings
- Experience a seamless, responsive interface across devices

## Developer's Notes

This application was built as a showcase of my full-stack development skills, with a self-imposed time constraint of 20 hours.  To maintain the integrity of this demonstration, I've established clear boundaries regarding AI assistance:

### AI Usage Disclosure

**Where AI (Chat-GPT) was used:**
✅ Technology stack consultation and trending technology discussions
✅ Design decision feedback and application architecture review
✅ Project configuration troubleshooting (ESLint, Jest, etc.)
✅ README editing and documentation refinement
✅ Debugging assistance for complex issues

**Where AI was NOT used:**
❌ Application code generation (no AI-written or auto-completed code)
❌ Unit test creation
❌ UI/UX design decisions or implementation
❌ Debugging 95% of issues. I only used AI assistance for the most complicated bugs.

AI was employed as a collaborative tool, similar to consulting with a peer who was also senior engineer, rather than as a code generator.

## Looking for a Senior Engineer?

If you are hiring a Senior Fullstack Engineer or Senior Frontend Engineer, please check out my [LinkedIn profile](https://www.linkedin.com/in/sueraisty/) and get in touch. I am considering in-person opportunities in Silicon Valley as well as remote positions.


## Technology Stack

### Core Technologies

- **Frontend**: [React v19](https://react.dev/), [TypeScript v5](https://www.typescriptlang.org/docs/)
- **Framework**: [Next.js v15](https://nextjs.org)
- **Backend**: [Express](https://expressjs.org), [Node.js 22](https://nodejs.org/docs/latest/api/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **API Approaches**: REST API, GraphQL API

### Key Libraries

- **UI Styling**: [Tailwind CSS](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com/docs)
- **Data Management**: [TanStack Query](https://tanstack.com/query/latest/docs)
- **Database ORM**: [Knex.js](https://knexjs.org/)
- **State Management**: [React Context](https://react.dev/learn/passing-data-deeply-with-context)
- **Validation**: [Zod](https://github.com/colinhacks/zod)

### Development & Testing

- **Build Tools**: [Vite](https://vite.dev/guide/)
- **Testing**: [Vitest](https://vitest.dev/), [Jest](https://jestjs.io/docs/getting-started), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **Package Management**: [npm](https://docs.npmjs.com/)
- **Runtime Management**: [ASDF](https://asdf-vm.com/)
- **Monorepo Management**:  [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

### Data Sources

- [Adzuna API](https://developer.adzuna.com/): Job listings and market insights

## Getting Started

### Prerequisites

- Node.js v22 or later
- Git
- [direnv](https://direnv.net/) (optional, for step 3)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/job-listing-aggregator.git
   cd job-listing-aggregator
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure API credentials
   - Sign up for free API access from [Adzuna Developer Portal](https://developer.adzuna.com/)
   - Set up environment variables for your credentials:

     ```bash
     # Option 1: Add to your shell profile (.zshrc/.bashrc)
     export ADZUNA_APP_ID="your_app_id"
     export ADZUNA_APP_KEY="your_app_key"
     
     # Option 2: Use direnv with a .envrc file (recommended, git-ignored)
     echo 'export ADZUNA_APP_ID="your_app_id"' > .envrc
     echo 'export ADZUNA_APP_KEY="your_app_key"' >> .envrc
     direnv allow
     ```

4. Verify API access

   ```bash
   curl --request GET \
     --url 'https://api.adzuna.com/v1/api/jobs/us/categories?app_id="'"$ADZUNA_APP_ID"'"&app_key="'"$ADZUNA_APP_KEY"'"' \
     --header 'Content-Type: application/json'
   ```

5. Start the development server on your local machine:

   ```bash
   npm run dev
   ```

6. Search for some jobs with this application
   - Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.




## Deployment

You can see a live version of this application running at [https://sueraisty.com/job-listings]( https://sueraisty.com/job-listings)
This application was deployed to [Vercel](https://vercel.com) with minimal configuration:

1. Push your code to a GitHub repository
2. Import the project into Vercel
3. Configure environment variables
4. Deploy

For more detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Future Enhancements

- User accounts and saved job listings
- Email notifications for new matching jobs
- Advanced filtering options
- Mobile application

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Adzuna API Documentation](https://developer.adzuna.com/docs)

## License

[MIT](LICENSE)
