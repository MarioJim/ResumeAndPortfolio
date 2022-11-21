# Makefile to compile my portfolio and resume
# Mario Jiménez <mario.emilio.j@gmail.com>

# Usage:
# make                # compile all modules into build/
# make dev-portfolio  # start a dev server for the portfolio
# make docker-image   # create and push docker image
# make clean          # clean compiled files

all: resume

prepare:
	yarn
	-rm -r build
	mkdir build

data: prepare
	yarn workspace data build

resume: prepare data
	yarn workspace resume build
	tectonic resume/build/resume.tex
	mv resume/build/resume.pdf build/mario_jimenez_resume.pdf
	rm resume/build/resume.tex

dev-portfolio: prepare data
	yarn workspace portfolio dev

lint:
	yarn
	yarn workspace portfolio lint

docker-image:
	docker build . -t mariojim/resume-portfolio:latest
	docker push mariojim/resume-portfolio:latest

clean:
	-rm -r \
		build \
		data/lib \
		resume/build/resume.pdf \
		resume/build/resume.tex

.PHONY = all prepare data resume dev-portfolio docker-image clean
