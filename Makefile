.PHONY: commit help

help:
	@echo "Available commands:"
	@echo "  make commit    - Run the interactive conventional commit script"

## commit: Run the interactive conventional commit script
commit:
	@./scripts/commit.sh
