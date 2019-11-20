FROM ruby:2.6-alpine

RUN apk add --no-cache build-base gcc bash cmake git

RUN gem install jekyll bundler:2.0.2

EXPOSE 4000

WORKDIR /site

COPY ./ /site

RUN bundle install

CMD [ "bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0", "-P", "4000" ]
