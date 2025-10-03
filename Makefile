lint:
	pylint main.py src

format:
	@echo "Running black..."
	@black .
	@echo "Running isort..."
	@isort .
	@echo "Formatting complete!"

.PHONY: lint format