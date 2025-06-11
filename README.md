# SAA Next Client

This is a Next.js application serving as the client for the Syndicat Apicole Artésien website. A key feature of this project is its implementation of Google Sheets as a Content Management System (CMS), providing a user-friendly way for content creators to manage website content without needing technical expertise.

## Features

- **Google Sheets as CMS:** Content is fetched directly from Google Sheets using the Google Sheets API.
- **Dual Environment Support (Staging & Production):** The application is configured to fetch data from different Google Sheets based on the deployment environment.
- **Automated Builds via Netlify & Google Apps Script:** Changes in the Google Sheet can automatically trigger a website rebuild on Netlify via webhooks.
- **Unique Slug Generation:** Ensures each content piece has a unique URL based on its location in the Google Sheet.
- **MUI (Material UI):** Utilizes the MUI component library for a consistent and modern UI.
- **Next.js:** Leverages Next.js for server-side rendering, routing, and API routes.
- **TypeScript:** Provides static typing for improved code maintainability.

## Getting Started

To get a copy of the project up and running on your local machine for development and testing, follow these steps.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Access to a Google Account
- A Google Sheet to serve as the data source (you'll need its ID)
- A Google Cloud Platform project with the Google Sheets API enabled
- A Google Service Account with access to your Google Sheet (you'll need its JSON key file)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd saa-next-client
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or yarn install
    ```

### Environment Variables

This project uses environment variables to connect to the Google Sheet CMS and manage different environments locally.

1.  **Create environment files:** In the root of the project, create two files: `.env.staging.local` and `.env.production.local`. **Ensure these files are added to your `.gitignore` to prevent committing sensitive keys.**

2.  **Obtain your Google Service Account Key:**

    - If you don't have a Google Service Account key JSON file, follow the Google Cloud documentation to create one and grant it access to your Google Sheet.
    - Encode the content of your JSON key file in Base64. You can do this using online tools or a command-line tool like `base64` (on macOS/Linux) or PowerShell (on Windows).

3.  **Populate environment files:** Add the following variables to each file, replacing the placeholder values:

    - `.env.staging.local`:

      ```
      DATA_SOURCE=sheet
      GOOGLE_SHEET_ID=<YOUR_STAGING_GOOGLE_SHEET_ID>
      GOOGLE_SERVICE_ACCOUNT_KEY_BASE64=<YOUR_BASE64_ENCODED_SERVICE_ACCOUNT_KEY>
      ```

    - `.env.production.local`:

      ```
      DATA_SOURCE=sheet
      GOOGLE_SHEET_ID=<YOUR_PRODUCTION_GOOGLE_SHEET_ID>
      GOOGLE_SERVICE_ACCOUNT_KEY_BASE64=<YOUR_BASE64_ENCODED_SERVICE_ACCOUNT_KEY>
      ```

    Replace `<YOUR_STAGING_GOOGLE_SHEET_ID>`, `<YOUR_PRODUCTION_GOOGLE_SHEET_ID>`, and `<YOUR_BASE64_ENCODED_SERVICE_ACCOUNT_KEY>` with your actual Google Sheet IDs and the Base64 encoded service account key.

### Running Locally

Use the following commands to run the development server with data from different environments:

- Run with **staging** data:

  ```bash
  npm run dev:staging
  # or yarn dev:staging
  ```

- Run with **production** data:

  ```bash
  npm run dev:prod
  # or yarn dev:prod
  ```

- Run with **mock** data (if configured in `fetchPost.ts`):

  ```bash
  npm run dev:local
  # or yarn dev:local
  ```

## Google Sheets CMS Structure

Your Google Sheet should have tabs representing different sections of your website (e.g., `accueil`, `actualites`, `association`, etc.). Each tab should contain your content data in a structured format.

A crucial tab is likely the `authors` tab, which should contain author information with a unique `id` for each author. This `id` is used to link posts to authors.

**Important Considerations for Content Creators:**

- Each row in a content tab represents a single post.
- The order of columns in your sheet tabs must match the expected data structure in `lib/fetchPost.ts`. The columns should be in this order:
  1. Title
  2. Published Date
  3. Feature Image URL
  4. Content
  5. Featured (TRUE/FALSE)
  6. Author ID (references the authors tab)
- The `id` column in the `authors` tab **must** contain unique values for each author. Using Google Sheets Data Validation to enforce uniqueness is highly recommended for this column.
- The slug for each post is automatically generated based on the tab name and row number (e.g., `actualites-3` for the post on the 3rd data row of the 'actualites' tab), ensuring uniqueness for routing.
- Post IDs are automatically generated using a combination of the section name and a UUID, so you don't need to manage IDs manually.

## Deployment to Netlify

This project is configured for deployment on Netlify with support for staging and production environments.

1.  **Connect to Netlify:** Connect your Git repository to a new or existing Netlify project.
2.  **Configure Build Settings:** In Netlify, configure the build command (`npm run build` or `yarn build`) and the publish directory (`.next`).
3.  **Set Environment Variables in Netlify:** Go to "Build & deploy" -> "Environment" in your Netlify project settings.
    - Add `GOOGLE_SHEET_ID`. Under "Values", select "Different value for each deploy context". Enter your production sheet ID for the "Production" context and your staging sheet ID for a "Branch deploy" context specifically for your staging branch (`staging`).
    - Add `GOOGLE_SERVICE_ACCOUNT_KEY_BASE64`. You can likely set this with the "Same value for all deploy contexts" if you are using the same service account for both.
    - Ensure `NODE_VERSION` is set to "20" (or a supported LTS version) in the build environment settings.
4.  **Configure Branch Deploys:** In Netlify's "Continuous Deployment" settings, set your production branch to `prod` and add `staging` as a branch deploy context.
5.  **Set up Build Hooks:** In Netlify's "Build hooks" section, create two build hooks: one for staging and one for production. Copy their URLs. **Keep these URLs secure and do not share them publicly.**
6.  **Google Apps Script for Build Triggers:** A Google Apps Script is used within the Google Sheet to trigger the appropriate Netlify build hook when content is updated. **Note: The script containing your sensitive build hook URLs should NOT be included in this repository.** You can find basic examples of how to write Google Apps Scripts to make web requests in the Google Apps Script documentation.

## Project Structure (Simplified)

- `components/`: Reusable React components (using MUI).
- `lib/`: Utility functions, including `fetchPost.ts` for fetching data from Google Sheets.
- `pages/`: Next.js pages for routing.
- `public/`: Static assets.
- `styles/`: Global styles.
- `netlify.toml`: Netlify configuration for builds and environments.
- `.env.*.local`: Local environment variable files (should be in `.gitignore`).
- `package.json`: Project dependencies and scripts.

## Contributing

Feel free to fork this repository and contribute!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Material UI](https://mui.com/)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Netlify](https://www.netlify.com/)
- [dotenv-cli](https://github.com/dotenv-org/dotenv-cli)
- [Picsum Photos](https://picsum.photos/) (for mock data images)
- [DiceBear Avatars](https://www.dicebear.com/) (for mock author images)
