# Commit & Branching Skill

Whenever the user asks to "make a commit" or "commit the changes", follow this workflow:

## 1. Branching Strategy
Before committing, check the current branch:
- If you are on `main`, you MUST create a new branch first.
- **Branch Naming**: `AmitRaikwar/{description-of-change}`
  - The description should be 3-7 words, kebab-cased (e.g., `AmitRaikwar/add-interactive-commit-script`).
- If you are already on a feature branch (not `main`), you can commit directly to it.

## 2. Committing
Use the following command to perform the commit:
```bash
make commit
```
This command invokes the interactive script (`scripts/commit.sh`).

## 3. Automation & Permissions
- For the branching and staging commands (`git checkout -b`, `git add`), set `SafeToAutoRun: true`.
- For `make commit`, ensure you provide the necessary inputs via `send_command_input` to complete the interactive prompts.
- The user has granted permission to execute these steps without individual command approval where possible.
