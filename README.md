# Website of the SOON project

The repository store the source code of the website for the SOON project. It is hosted by GitHub Pages.

## Run locally

In the folder *tools*, the script (*build_and_run.sh*) run the website inside a docker container (Docker is required). The script create a container and launch it (need to be executed from the root of the repository):
``` bash
./tools/build_and_run.sh
```
When the execution of the script is done, the website can be open with the URL [http://localhost:4000](http://localhost:4000).

The script (*build_and_run-with-refresh.sh*) can be used to detect when a modification is made to files and automatically rebuild the website from sources (p.ex. during development, testing, etc).

## Credits

Thanks to [Tian Qi](https://github.com/kitian616/jekyll-TeXt-theme) for the TeXt Theme ([MIT license](https://github.com/kitian616/jekyll-TeXt-theme/blob/master/LICENSE)).

## Licence

The TeXt Theme is under [MIT license](https://github.com/kitian616/jekyll-TeXt-theme/blob/master/LICENSE).
