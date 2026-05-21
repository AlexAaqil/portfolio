---
title: 'Working with markdown files'
description: 'How to write proper markdown files that follow .md rules'
pubDate: 'May 21 2026'
heroImage: '../../../assets/blog-placeholder.jpg'
---

## Images

For normal images, just use:

```markdown
![Test Image](../../../assets/blogs/devops.jpeg)
```

With captions:

```markdown
![Growth chart](./chart.jpg)
*Figure 1: Channel growth over 6 months*

![Content calendar](./calendar.jpg)
*Figure 2: Weekly content roadmap*
```

For clickable images:

```markdown
[![Thumbnail example](./thumb.jpg)](https://youtube.com/watch?v=example)
```

## Iframes

```markdown
<iframe width="560" height="315" src="https://www.youtube.com/embed/LeUUxLRdvho?si=pC-hqETk3_QZRd2V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

When using a markdown linter, you can disable the check for iframes using:

```json
"markdownlint.config": {
    "MD033": {
        "allowed_elements": ["iframe"]
    }
}
```

But this only affects local linting in VS Code. If you have markdownlint running in CI/CD (GitHub Actions, pre-commit hooks, etc.), you'll need to add the same .markdownlint.json file to your repository root to make it pass there too.
