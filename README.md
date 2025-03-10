## JSON Schema Conference Website

[![JSON Schema logo - Build more, break less, empower others.](https://raw.githubusercontent.com/json-schema-org/.github/main/assets/json-schema-banner.png)](https://json-schema.org)

## Run Locally

This section is for those interested in contributing or running the landscape website locally.

**Prerequisites:**

- Install [Hugo](https://gohugo.io/installation/)

**Cloning the Website:**

```bash
git clone https://github.com/{{your_username}}/conference.git
```

**Initializing Git Submodules**

```bash
git submodule update --init
```

**Running Dev Server**

```bash
hugo server
```

This starts a local server and opens the website in your web browser at http://localhost:1313.

---

## Project Structure

The repository is organized as follows:

```
json-schema-org/conference
├── archetypes            
├── assets                
│   └── css
├── backgrounds  
│   
├── content                
│   ├── faq
│   ├── partners
│   ├── schedule
│   ├── sessions
│   └── speakers
│
├── data                   
├── layouts              
│   ├── _default
│   ├── partials
│   ├── schedule
│   ├── sessions
│   ├── shortcodes
│   └── speakers
│
├── static                 
│   ├── images
│   ├── presentation
│   ├── schedule
│   └── theme.css
├── themes                
│   └── default-theme -hugo        
│       ├── archetypes
│       ├── i18n
│       ├── images
│       ├── layouts
│       ├── src
│       └── static
├── .gitignore  
├── .gitmodules
├── .hugo_build.lock
├── CONTRIBUTING.md           
├── hugo.toml            
├── README.md             
└── yarn.lock         
```

---

## Contributors

Thanks to all the amazing contributors to this project:

[![Contributors](https://contrib.rocks/image?repo=json-schema-org/conference)](https://github.com/json-schema-org/conference/graphs/contributors)

Want to join the list? Check out our [Contributing Guide](CONTRIBUTING.md) to get started!

---

## Contributing

- We warmly welcome your contributions to this project! A dedicated [CONTRIBUTING.md](CONTRIBUTING.md) file outlines the various ways you can get involved, including:
  - Reporting bugs and requesting features
  - Contributing code
  - Improving documentation
  - Adding new entries to the landscape
  - Improving the user interface

---

## Contact

For any questions or feedback, please feel free to open an issue on this repository.

---

## Get Involved!

Explore the website and see how you can contribute to this evolving space. Whether through contributions, partnerships, or feedback, your involvement can help shape the future of JSON Schema.

---

## Connect with the JSON Schema Community

<p align="left">
    <a href="https://json-schema.org/slack" target="blank" style="margin-right: 5px;">
        <img align="center" src="https://img.icons8.com/color/48/null/slack-new.png" alt="JSON Schema Slack" height="30" width="40" />
    </a>
    <a href="https://twitter.com/jsonschema" target="blank" style="margin-right: 5px;">
    <img align="center" src="./static/images/logos/x-social-media-logo-icon.svg" alt="JSON Schema X" height="30" width="40" />
    </a>
    <a href="https://www.linkedin.com/company/jsonschema" target="blank" style="margin-right: 5px;">
        <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="JSON Schema LinkedIn" height="30" width="40" />
    </a>
    <a href="https://www.youtube.com/@JSONSchemaOrgOfficial" target="blank">
        <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="JSON Schema YouTube" height="30" width="40" />
    </a>
</p>

