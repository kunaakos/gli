# Exchange Rates App

### Goals

I was shooting for finishing this in one afternoon or the equivalent of a workday, which includes reading the docs, setting up boilerplates, and coming up with a design.

See the app live [here](https://kunaakos.github.io/gli/).

### Design / UX

I usually just implement and tweak designs, but whenever I have to make something look like anything, I go with a minimalist, brutalist look - because that's what I personally like, and it's also real fast for prototyping.

UX-wise the app is pretty standard, there's two tiny details that I very much like, but would drive any user (or product person) crazy in a real world situation:

1. the border on the left of currency cards acts as a flagpole if there's an icon available :D
2. search is case-sensitive, *UPPERCASE* will match currency codes (e.g. AUD), *lowercase* will match currency names

... but this isn't the real world, so I went with it!

I used a not so common but pretty nice approach to handling different screen sizes: try zooming out!

### Tooling

I went with CRA for scaffolding the application, because it's the default and a very good tool to go to. It had all the tooling I needed and made it easy to set up regression testing.
I wrote a standard react app in TypeScript. For styling I used emotion, because paired with a component-based approach and a properly executed UI library it makes meaningful visual regression testing possible (components in this app will render exactly as in the test, if the same default fonts are provided).

### Testing

There's not much functionality to test, so I picked one component, the CurrencyCard. I'm checking how it handles incomplete data, and did some visual regression testing - which I find very useful for front ends of real-world applications, especially when introducing major changes. They also give developers really useful input about *how* components failed.

### Conventions

I threw in a `.prettierrc` for basic indentation and style rules, and went with defaults for the rest. I don't like making formatting decisions, but I love consistency, so I love a good opinionated linter/formatter.
