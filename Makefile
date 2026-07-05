# === FILES/DIRECTORIES ===

SRC_PATH    := src
DIST_PATH   := dist
DRAFTS_PATH := drafts

BLOCKS_DIR   := blocks
IMAGES_DIR   := images
STYLES_DIR   := styles
WRITING_DIR  := writing
PROJECTS_DIR := projects

DRAFT ?= writing
BLOCK ?=

# === UTILITIES ===

DEV_PORT := 8080

# === TASKS ===

.PHONY: dev
dev:
	@cd $(SRC_PATH) && pnpx serve && echo "Command not found: pnpx"

.PHONY: deploy
deploy: checkcommit build
	@pnpx wrangler pages deploy --project-name 'namnme' $(DIST_PATH)

.PHONY: checkcommit
checkcommit:
	@if [[ -n "$$(git status -s)" ]]; then \
		echo "The repo has uncommitted changes!"; \
		exit 1; \
	fi

.PHONY: build
build: blocks
	@echo "\n==> Deleting $(DIST_PATH)..."
	@rm -rf $(DIST_PATH)
	@echo "\n==> Preparing files..."
	@rsync -rPavhz --delete --exclude $(BLOCKS_DIR) --exclude '.DS_Store' $(SRC_PATH)/ $(DIST_PATH)

.PHONY: blocks
blocks:
	@find $(SRC_PATH)/$(BLOCKS_DIR) -type file \
		-exec echo ";" \
		-exec echo "==> Updating {} block in all pages" ";" \
		-exec ./scripts/block.sh "{}" ";"

.PHONY: block
block:
	@./scripts/block.sh $(BLOCK)

.PHONY: gen
gen:
	# kate for light, breezedark for dark
	@echo "Generating $(DRAFTS_PATH)/$(DRAFT).html..."
	@pandoc $(DRAFTS_PATH)/$(DRAFT).md \
		--toc \
		--standalone \
		--wrap=preserve \
		--syntax-highlighting=kate \
		--output=$(DRAFTS_PATH)/$(DRAFT).html
	@echo "Generated $(DRAFTS_PATH)/$(DRAFT).html!"

.PHONY: bookmarks
bm:
	@echo "Generating bookmarks..."
	@./scripts/bookmarks.sh
	@./scripts/block.sh "back-to-top" "$(SRC_PATH)/$(BLOCKS_DIR)/bookmarks.html"
	@./scripts/block.sh "bookmarks"
	@echo "Generated bookmarks..."

.PHONY: clean
clean:
	rm -rf $(DIST_PATH)
