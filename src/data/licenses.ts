export interface LicensePreset {
  id: string;
  name: string;
  badgeValue: string;
  summary: string;
  clause: string;
}

export const LICENSE_PRESETS: LicensePreset[] = [
  {
    id: 'MIT',
    name: 'MIT',
    badgeValue: 'MIT',
    summary: 'A short, permissive license requiring copyright notice preservation.',
    clause: 'This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.',
  },
  {
    id: 'Apache-2.0',
    name: 'Apache 2.0',
    badgeValue: 'Apache--2.0',
    summary: 'A permissive license that provides an express grant of patent rights.',
    clause: 'This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.\n\n```text\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n```',
  },
  {
    id: 'GPL-3.0',
    name: 'GPL-3.0',
    badgeValue: 'GPL--3.0',
    summary: 'A strong copyleft license requiring source code availability for derivative works.',
    clause: 'This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.\n\n```text\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n```',
  },
  {
    id: 'BSD-3-Clause',
    name: 'BSD-3-Clause',
    badgeValue: 'BSD--3--Clause',
    summary: 'A permissive license prohibiting using contributor names for endorsements.',
    clause: 'This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details.',
  },
  {
    id: 'Unlicense',
    name: 'Unlicense',
    badgeValue: 'Unlicense',
    summary: 'Dedicated completely to the public domain with no conditions.',
    clause: 'This is free and unencumbered software released into the public domain.\n\nAnyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means. See the [LICENSE](LICENSE) file for details.',
  },
];

export interface ContributingPreset {
  id: string;
  name: string;
  content: string;
}

export const CONTRIBUTING_PRESETS: ContributingPreset[] = [
  {
    id: 'standard',
    name: 'Standard Fork & PR',
    content: `Contributions are welcome! Follow these steps to contribute:

1. **Fork** the repository
2. **Clone** your fork (\`git clone https://github.com/username/project.git\`)
3. **Create a branch** (\`git checkout -b feature/amazing-feature\`)
4. **Commit changes** (\`git commit -m "feat: add amazing feature"\`)
5. **Push to branch** (\`git push origin feature/amazing-feature\`)
6. **Open a Pull Request\``,
  },
  {
    id: 'issue-first',
    name: 'Issue-First Guidelines',
    content: `We welcome community contributions!

### How to Contribute
- **Report bugs:** Open an issue with reproduction steps and environment info.
- **Suggest features:** Open a discussion or issue outlining the proposal.
- **Submit PRs:** Reference the issue you are working on, follow coding standards, and include tests.`,
  },
];
