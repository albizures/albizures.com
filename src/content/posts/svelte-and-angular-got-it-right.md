---
author: Jose Albizures
publicatedAt: 2025-02-27T19:22:00Z
title: Svelte and Angular Got It Right (In My Opinion)
slug: svelte-and-angular-got-it-right
featured: false
draft: false
tags:
  - svelte
  - angular
  - webdev
  - javascript
description:
  Thoughts on why Svelte and Angular's templating syntax makes sense.
---

A couple of weeks ago, I got to work on a small project with Angular v19 after stepping away since the v2 debacle, And I was pleasantly surprised. The introduction of Signals, docs, and overall changes made for a genuinely enjoyable experience. I can see why many developers and companies prefer it over React.

On a seemingly unrelated note, I've been exploring Svelte. While it hasn't fully clicked with me, with runes or without them, I do appreciate how it works, even if the feel isn't quite right for me. But that’s a side note 😅

The real point is that Angular and Svelte nailed it with their templating syntax—at least in some important ways. This ties into the not-so-latest JavaScript community drama:

<blockquote class="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/BBFepDe0Hq">https://t.co/BBFepDe0Hq</a> <a href="https://t.co/H6T3GSBClC">pic.twitter.com/H6T3GSBClC</a></p>&mdash; jordwalke (@jordwalke) <a href="https://twitter.com/jordwalke/status/1875336115009573268?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Jordan Walke, React’s creator, argues that Svelte and Vue’s templating approaches aren't the way forward. I disagree—especially regarding Svelte. I think Svelte's approach to conditional rendering, in particular, is spot on.

### Why I Disagree with React’s Approach
React doesn’t have a template syntax—it has JSX. JSX isn’t a template language but a way to write HTML in JavaScript, which is fine. It leverages the virtual DOM to describe the UI in JavaScript, not HTML.

React's "It's just JavaScript" mantra is both its strength and weakness. While I love React (since the `React.createClass` days!), its approach to templating, particularly conditional rendering, feels lacking, because --- drumroll --- it's just JavaScript. 😜

Critics often call Svelte and Angular’s syntax a "hacky" extension of HTML. I can see this with Vue (which is why I’m not a fan), but not with Svelte or Angular. They offer a true templating syntax—one that goes beyond just extending HTML.

In the end, comparing Svelte or Angular to React feels like comparing apples to oranges. Each has its strengths, but they’re not the same.
