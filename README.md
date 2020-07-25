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

### Connecting React with Redux

You will use connect with two or three arguments depending on the use case:

- a mapStateToProps function (you can name it also "select")
- a mapDispatchToProps function

### Form component and Redux actions

The class component will help keeping some local state, like form inputs. It receives a Redux action as well. This way it can update the global state by dispatching the addArticle action.

### Redux middleware

A Redux middleware is a function that is able to intercept, and act accordingly, our actions, before they reach the reducer. 

#### Benefits from using a Redux middleware

- most of the logic can live outside the UI library

- middleware become reusable pieces of logic, easy to reason about

- middleware can be tested in isolation

### asynchronous actions

Dispatching an action is synchronous.

Suppose we want to fetch data from an API. In React you would put a call in componentDidMount and call it a day. But how about Redux?

 "Error: Actions must be plain objects. Use custom middleware for async actions". We cannot call Fetch from within an action creator in Redux.

That's because Redux is expecting objects as actions, but we're trying to return a Promise.

### Asynchronous actions in Redux with Redux Thunk

With redux-thunk (it's a middleware) we can overcome the problem and return functions from action creators. This way we can call APIs, delay the dispatch of an action, and more.