module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'feat',
    'fix',
    'docs',
    'style',
    'refactor',
    'perf',
    'test',
    'build',
    'ci',
    'release',
    'chore',
    'revert',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: {
    feat: {
      description: 'A new feature',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix',
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '✏️',
      value: 'docs',
    },
    style: {
      description:
        'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
      emoji: '💄',
      value: 'style',
    },
    refactor: {
      description: 'A code change that neither fixes a bug nor adds a feature',
      emoji: '💡',
      value: 'refactor',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '⚡️',
      value: 'perf',
    },
    test: {
      description: 'Adding missing tests or correcting existing tests',
      emoji: '💍',
      value: 'test',
    },
    build: {
      description:
        'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
      emoji: '🌴',
      value: 'build',
    },
    ci: {
      description:
        'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
      emoji: '🎡',
      value: 'ci',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release',
    },
    chore: {
      description: "Other changes that don't modify src or test files",
      emoji: '🤖',
      value: 'chore',
    },
    revert: {
      description: 'Reverts a previous commit',
      emoji: '🗑',
      value: 'revert',
    },
    messages: {
      type: "Select the type of change that you're committing:",
      customScope:
        'What is the scope of this change (e.g. component or file name): (press enter to skip)',
      subject:
        ' Write a short, imperative tense description of the change (max 94 chars):\n',
      body: 'Provide a longer description of the change: (press enter to skip)\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n',
    },
  },
};
