# working-with-glamorous

Understanding how to use dynamic styles &amp; animations.

## Notes

1. Don't need `babel-jest` it's included under the hood with `jest`.
1. Don't need to specific `NODE_ENV=test` `jest` does this by default.
1. There are a few properties that must be _integers_ & not _string_ values. (i.e. `opacity` & `zIndex`)
1. Follow animation notes [here](https://github.com/paypal/glamorous#example-style-objects) & [here](https://github.com/threepointone/glamor/blob/master/docs/howto.md#animations) for using `glamor` & `glamorous`.

## Todo

- [ ] Recreate the dynamic search bar found [here](http://icanbecreative.com/article/css3-animated-search-box) using `glamorous`.
- [ ] Write tests for the search bar.