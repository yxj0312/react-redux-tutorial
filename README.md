# React Redux Tutorial

## What is the state

In general a typical JavaScript application is full of state. For example, state is:

- what the user sees (data)
- the data we fetch from an API
- the URL
- the items selected inside a page
- eventual errors to show to the user

## What problem does Redux solve

Unfortunately a ton of logic gets stuffed into frontend components these days. Is there an alternative to this agony?

Redux can solve exactly those issues. It might not be clear in the beginning, but Redux helps giving each frontend component the exact piece of state it needs.

Even better, Redux can hold business logic inside its own layer (middleware), alongside with the code for fetching data. The benefits of this approach are manifold.

## Redux reducers

What’s a reducer? A Redux reducer is just a JavaScript function. It takes two parameters: the current state and action (more about actions soon).

## Redux actions and named constants

### Actions

Redux actions are nothing more than JavaScript objects. This is how an action looks like:

```js
{
  type: 'ADD_ARTICLE',
  payload: { title: 'React Redux Tutorial', id: 1 }
}
```

The type property drives how the state should change and it's always required by Redux. The payload property instead describes what should change, and might be omitted if you don't have new data to save in the store.

### Constants

You can notice that the type property is a string. Strings are prone to typos and duplicates and for this reason it's better to declare actions as constants.

You can follow the [Redux duck](https://github.com/erikras/ducks-modular-redux) convention if you want, it keeps every Redux related piece in a single file.

