# Columbus Metro MLS Board

Source for the **Columbus Metro MLS Board** artifact:
https://claude.ai/artifact/QMQUcvBEFgK8spRzN9LF66

Updated by the scheduled Cowork task **Columbus mls daily refresh**
(`columbus-mls-daily-refresh`), which runs the `columbus-mls-refresh` skill.

## What's here

- `index.html`: the page as published. The artifact service adds the
  `<!doctype>`, `<head>` and `<body>` wrapper when it publishes, so the file
  starts at `<title>`.

## Updating the numbers

All data sits in the `<script>` block at the bottom of `index.html`:

- `lastUpdated`: the date shown in the header pill.
- `DATA`: one row per city with `comingSoon`, `new7` and `sold7` counts,
  taken from the Flexmls saved searches "DAILY Coming Soon 20",
  "DAILY New 7d 20" and "DAILY Sold 7d 20".

The totals and the sort order (by New + Sold) are computed on load, so only
the counts need editing.

## Publishing

Republish this file to the same artifact URL above so the link stays the same.
This folder is not served by the Netlify site (see `netlify.toml`).
