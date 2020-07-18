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