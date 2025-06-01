# Adding New Conference Editions Guide

This guide provides step-by-step instructions for adding new conference editions to the JSON Schema Conference website.

## Table of Contents
- [Content Directory Structure](#content-directory-structure)
- [1. Create Edition Content File](#1-create-edition-content-file)
- [2. Add Session Content](#2-add-session-content)
- [3. Add Speaker Information](#3-add-speaker-information)
- [Important Notes](#important-notes)
- [Best Practices](#best-practices)

## Content Directory Structure
```
content/
├── _index.md
├── previous-editions/
│   ├── _index.md
│   ├── {year}.md
│   ├── {year}.md
│   └── ... (one file per edition)
├── archive-sessions/
│   ├── {year}/
│   │   ├── _index.md
│   │   ├── {session_name}.md
│   │   ├── {session_name}.md
│   │   ├── {session_name}.md
│   │   └── ... (one file per session)
│   └── ... (one directory per edition)
├── sessions/
│   ├── _index.md
│   ├── {session_name}.md
│   ├── {session_name}.md
│   ├── {session_name}.md
│   └── ... (current/main edition sessions)
├── faq/
│   └── index.md
├── partners/
│   ├── _index.md
│   └── {partner_type}/
├── schedule/
│   └── _index.md
└── speakers/
    ├── _index.md
    ├── {speaker_name}.md
    ├── {speaker_name}.md
    └── ... (one file per speaker)
```

## 1. Create Edition Content File

1. Navigate to the `content/previous-editions/` directory
2. Create a new markdown file named `YYYY.md` (replace YYYY with the year)
3. Use the following template structure:

```yaml
---
title: "JSON Schema Conference YYYY"
date: YYYY-MM-DD
year: YYYY
location: "Event Location"
summary: "Brief description of the conference edition"
sessionLink: "/archive-sessions/YYYY/"
---

Detailed description of the conference edition.

## Conference Highlights

- Key point 1
- Key point 2
- Key point 3

## Resources

- [Conference Website](https://conference.json-schema.org)
- [JSON Schema Organization](https://json-schema.org)

Additional information and links.
```

## 2. Add Session Content

1. Navigate to the `content/archive-sessions/` directory
2. Create a new directory named `YYYY/` (replace YYYY with the year)
3. Create an `_index.md` file in the new directory with the following structure:

```yaml
---
title: "YYYY Conference Sessions"
editionTitle: "JSON Schema Conference YYYY"
editionLink: "/previous-editions/YYYY/"
---

Description of the sessions for this edition (For example, Browse through all sessions from the JSON Schema Conference YYYY. Click on a session to view details, watch the presentation, and access related resources.)
```

4. Add individual session files in the `content/archive-sessions/YYYY/` directory with the following structure:

```yaml
---
key: file-name-without-extension
title: Session Title
id: file-name-without-extension
format: talk
duration: total-duration-in-minutes
tags:
  - talk
presentation: presentation/file-name.pdf
speakers_info:
  - name: "Speaker Name"
    company: "Company Name"
    city: "City, Country"
    photoURL: "/images/speakers/speaker-photo.jpg"
draft: false
---

Session description and content.
```

## 3. Add Speaker Information

1. Navigate to the `public/speakers` directory
2. Check if the speaker already exists by searching for their name in the `speakers/` directory
3. If the speaker does not exist:
    - Create a new directory named after the speaker (e.g., `utkarsh/`)
    - Inside the new directory, create an index.html file which follows the previous speaker's index.html structure with the modified content based on the new speaker's information

## Important Notes

### File Naming Conventions
- Use lowercase for filenames
- Use hyphens for spaces
- Include the year in relevant filenames

### Front Matter
- Always include required fields
- Refer to the existing files for the required fields

### Content Organization
- Keep content organized by year
- Maintain consistent formatting across all files
- Use relative links for internal navigation

### Media Files
- Store images in the `static/images/` directory
- Use appropriate subdirectories for different types of media
- Optimize images before adding them

### Testing
- After adding new content, test the website locally
- Verify all links work correctly
- Check that the content displays properly on different screen sizes

---

## Best Practices

1. **Content Consistency**
   - Maintain consistent formatting across all files
   - Use the same date format throughout
   - Follow the established naming conventions

2. **Version Control**
   - Create a new branch for each conference edition
   - Use descriptive commit messages

3. **Content Review**
   - Proofread all content before publishing
   - Verify all links are working
   - Check for proper formatting

4. **Accessibility**
   - Ensure all images have alt text
   - Use proper heading hierarchy

5. **Performance**
   - Optimize images before adding them
   - Keep file sizes reasonable
   - Use appropriate image formats

---

For any questions or issues, please contact the website maintainers or open an issue in the repository.