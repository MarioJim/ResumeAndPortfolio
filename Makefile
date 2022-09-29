# Makefile to compile my portfolio and resume
# Mario Jiménez <mario.emilio.j@gmail.com>

# Usage:
# make                # compile all modules into build/
# make dev-portfolio  # start a dev server for the portfolio
# make docker-image   # create and push docker image
# make clean          # clean compiled files

all: languages-widget resume portfolio

prepare:
	yarn
	-rm -r build
	mkdir build

data: prepare
	yarn workspace data build

languages-widget: prepare
	yarn workspace languages-widget build
	mv languages-widget/lang_widget.svg build/

resume: prepare data
	yarn workspace resume build
	tectonic resume/build/resume.tex
	mv resume/build/resume.pdf build/mario_jimenez_resume.pdf
	rm resume/build/resume.tex

portfolio: prepare data
	-rm -r portfolio/out
	yarn workspace portfolio build
	mv portfolio/out/* build/

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
		languages-widget/lang_widget.svg \
		portfolio/out \
		resume/build/resume.pdf \
		resume/build/resume.tex

.PHONY = all prepare data languages-widget resume \
         portfolio dev-portfolio docker-image clean
