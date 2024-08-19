---
author: Jose Albizures
publicatedAt: 2024-08-16T19:22:00Z
title: I'm building my own ECS engine
slug: im-building-my-own-ecs-engine
featured: false
draft: false
tags:
  - projects
  - ecs
  - game-dev
  - javascript
description:
  Recently I've been insterested in game development and in the internals of ECS/Game engines. So I decided to build my own from scratch in JavaScript.
---

Recently I've been insterested in game development and in the internals of ECS/Game engines. So I decided to build my own from scratch in JavaScript.

> Before we start, I want to mention that I'm not a Game Engine developer, nor I have experience in building one, I'm not even a game developer. So take this post as a learning journey and not as a guide to build a game engine.

## Table of contents

## Yes, another library in JavaScript
Like there aren't enough libraries in JavaScript already right? 😅 but let me explain the whys. There are two main reasons to build it actually, and they are:

### 1. To learn how ECS and Game engines work internally.
At the core of my interests is to understand black boxes, this means learning the internals of a system. And the way I like the most to do it is by building my own.

### 2. I enjoy building API with great DX.
I enjoy building APIs that are easy to use and have a great developer experience. Or at least I try to make them that way. I like to give a shot at building APIs and see my take on them. This, some times, is a slow process but enjoyable once I reach a nice abstraction.

## So what's an ECS engine anyway?
Okay, so let's define what an ECS engine is. ECS stands for Entity-Component-System. It's a design pattern that's (mostly but, not only) used in game development to separate the data from the logic. The idea is to have entities which hold the data through components, and systems which do hold the logic to manipulate the data from the entities.

So the engine is the one responsible to manage the entities, components, and systems. It's the one that will update the systems, and the systems will update the entities. All these manipulations are handle (usually) using queries to filter the entities that the system will update using the components (and maybe the values) they have. For more information about ECS, I recommend reading [Entity Component System FAQ](https://github.com/SanderMertens/ecs-faq).

## What's the state of ECS engines in JavaScript?
There are already several ECS engines in JavaScript, some of them are using so sort of class based implementation, others are using a more functional approach which is the one I'm more interested in and Typescript support. The most popular ones are:

- [miniplex](https://github.com/hmans/miniplex)
- [arancini](https://github.com/isaac-mason/arancini)

Both of them have a similar API and they are mostly type friendly. They are actually very similar.

## What I'm planning to do
I have been talking about building my own ECS engine however I did metion game engines as well. So I'm planning to build a simple game engine on top of my ECS engine. Simple but flexible enough to be extended by plugins or something like that. I'm not sure yet.
But what does that mean? Well, let's list some of the features I'm planning to have in my game engine:

- Load assets (images, sounds, etc)
- Rendering (just canvas for now)
- Game Loop
- Handle input (just keyboard and mouse)

And what I'm not planning to have:
- Physics
- Networking
- 3D support

For now, I'm just planning to render games in 2D, but I want to make it flexible enough engine to be extended to 3D if I want to. Same for physics and networking

## Closing thoughts
I'm excited to start this project, I'm not sure how long it will take me to build it, but I'm planning to write about the process and the decisions I make along the way. And the most important thing, the name of the engine! I called it `torao` (an One Piece reference) under my `vyke` namespace.
