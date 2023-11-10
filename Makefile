install:
	pip install -r requirements.txt
	cd frontend && npm install && npm run build

start-backend:
	python3 manage.py runserver

start-frontend:
	cd frontend && npm run start

start:
	make start-backend & npx serve -s ./frontend/build
