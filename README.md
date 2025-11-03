# Rangeway Energy - Main Website

Official website for Rangeway Energy, America's premier electric vehicle charging network for scenic corridors.

## Overview

This repository contains the main Rangeway Energy website, built with Jekyll and hosted on GitHub Pages.

## Structure

- `_config.yml` - Jekyll configuration with site settings and metadata
- `_layouts/` - Page layouts
- `_includes/` - Reusable components (header, footer)
- `assets/` - CSS, JavaScript, and other static assets
- `images/` - Site images
- Page files: `index.html`, `why-rangeway.html`, `network.html`, `for-travelers.html`, `contact.html`

## Development

### Prerequisites

- Ruby 2.6 or later
- Bundler

### Local Setup

1. Install dependencies:
   ```bash
   bundle install --path vendor/bundle
   ```

2. Build the site:
   ```bash
   bundle exec jekyll build
   ```

3. Serve locally (with auto-rebuild):
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## Deployment

This site is designed to be deployed to GitHub Pages. Simply push to the main branch and GitHub will automatically build and deploy the site.

## Related Repositories

- **Newsroom:** [rangeway-newsroom](https://github.com/zakwinnick/rangeway-newsroom) - Press releases, case studies, and blog

## Features

- Responsive design with mobile-first approach
- SEO optimized with structured data and meta tags
- Integration with Tinylytics analytics
- Fireside FM podcast player
- Social media integration
- Climate-controlled indoor lounge information
- Network expansion planning details

## License

© 2024 Rangeway Energy. All rights reserved.
