---
title: API Reference
---

# API Documentation Exclusion in Development

This documentation project uses Hugo to generate content. During local development, we have configured Hugo to **exclude the API section** to speed up the build process and avoid processing thousands of files unnecessarily.

The API documentation is crucial, but due to its size, it is disabled by default when you run Hugo locally in development mode. This exclusion is managed by the `excludefiles` configuration, which prevents Hugo from including the API folder during local builds.

```go
However, *in production*, the API section is re-enabled
```

### Why is this done?
- **Improved performance**: Skipping the large API section significantly improves local build times, allowing for faster feedback and iteration.
- **Focus on other content**: During development, it's often more important to focus on pages other than the API, which doesn't change as frequently.

### What do you need to do?
If you're running Hugo locally and need to see the API documentation, don't worry. It will be included automatically when the site is deployed in production.

Feel free to check other sections or work on non-API content while developing. The API content will always be available once the site goes live.

If you encounter any issues or need to preview the API section locally, contact the team or refer to the build settings for adjusting the `excludefiles` configuration.
