---
layout: index
lang: en
title: Sapphire Docs Home
indicator_type: notice
indicator_class: notice-danger
indicator_text: Experimental
indicator_text_onpage: CAUTION! The project is in very early development
description: Sapphire is Vanta Interactive's internal engine designed to replace Unreal Engine, as much as possible.
image_banner_link: https://i.ibb.co/vd8D2yv/Sapphire-Banner.png
image_banner_alt: A banner showing the Sapphire engine logo, which is a pink hexagon with rounded corners, thick black borders and a big black letter S in the middle, and some screenshots of the engine, on a dark gray grid background all laid out at a 15 degree angle towards the left.
metadata_proglang: C++ * Rust * Python * JavaScript * Kotlin |
metadata_platforms: PC * Console * Mobile |
metadata_timespan: 2024-Present
sidebar_topic: Sapphire
toc: <a class="header-button monospace semibold" href="#the-what">The What</a><br><a class="header-button monospace semibold" href="#the-why">The Why</a><br><a class="header-button monospace semibold" href="#the-how">The How</a><br><a class="header-button monospace semibold" href="#the-when">The When</a>
---

# The What
Sapphire is Vanta Interactive's game engine equivalent to Unreal Engine, in order to reduce our dependencies on other projects, and to better suit the studio's needs. The interface [WIP], along with the engine's functionality is purposefully designed to be as close as possible to Unreal, in order to ensure a smooth transition for both the projects and the workflow.

Currently, Sapphire is being written using C++, but in later stages of development it will also use and/or implement support for Rust, JavaScript, Python3, Kotlin and Java.

The rendering APIs Sapphire is currently targeting to implement are OpenGL, OpenGL ES and Vulkan, with DirectX support to be implemented when Windows support is developed.

The engine is designed from the ground up to allow modifications and plugins, and will provide many helper functions and macros to aid in the development process.

The user interface framework used is Qt6, not only because it's cross-platform, and could allow Sapphire to work out of the box on platforms different from Linux, such as Windows and Android, but because it also fits the square design that is close to the design of Vanta Interactive websites, based on our in-house Obsidian design guidelines.

Additionally, Sapphire will come with some tasteful features such as Vertical Tabs that may help your workflow.

At this time, Sapphire will be a closed-source game engine, but as further development takes place, betas and alphas may be released, and the code will eventually be published to the organization's GitHub repository.

**Why did you choose the name Sapphire?**

Sapphire is a gem. I like gems. It also makes sense to use Sapphire as the name for the engine, while names of parts that make up a Sapphire to be used for engine sections. Here are a few:
- **Corundum** is the name of the engine's renderer
- **Aura** is the name of the lightning management and optimization tools section of Corundum, it would handle path/ray tracing, Volumetrics, basic lightning and similar related features
- **Nimble** is the name of the engine's performance management and optimization tools
- **Spark** is the name of the engine and project-aware helper that may help fix issues in the code, offer code suggestions in order to improve code clarity or documentation in a similar fashion to Visual Studio's IntelliCode feature, and perhaps in the far future, might also have LLM (Large Language Model) functionality similar to GitHub Copilot, trained exclusively on the engine's source code. If, at some point in the future, hardware reaches a level where training and running LLMs is a trivial matter, Spark may also have the option to be trained on the project's code, in order to help on specific tasks and functionality that is used in the project. Spark's engine training data would be open-source, and any training data related to projects would be stored locally, but could be shared or stored on other machines, or the cloud, if the user so prefers.

# The Why
This studio was built on my knowledge of Unreal Engine, but I have always been a harsh critic of Epic Games, both as a company, their current CEO, Tim Sweeney and their storefront, the Epic Games Store.

Furthermore, Unreal Engine is quite limited when it comes to my specific use case:
- Android support is lacking outside of a few basic configuration options.
- If older versions of Unreal Engine are used, such as 4.27.2, they will, by default, use old or unsupported, out-of-date libraries and APIs that will prevent the built Android application from being published to Google Play Store, and other Android platforms that enforce specific versions of APIs.
- Unreal's support for OpenGL ES 3.1 features is disappointing and quite lacking.OpenGL ES 3.2 is available starting from Unreal 5, but this would limit the device support for published Android applications. If an Android game is not graphically intensive, or does not need to use GLES 3.2, there is no need to use Unreal 5.
- Not just that, but Unreal feels quite bloated, and a performance hog. Unreal 5 is, by default, much more resource-intensive compared to Unreal 4.
- The support for Paper2D is thoroughly disappointing and saddening. Paper2D was introduced in Unreal almost a decade ago, and it is still in Beta, with no significant ongoing development to fully release it into a stable feature. To date, there are no upcoming plans on the public Unreal Engine roadmap to complete Paper2D.

# The How
Following documentation, industry standards and guidelines, I hope, in the long term, to create a game engine that fits the studio's needs.

Sapphire will implement support for some of Unreal's file formats, such as .uproject, .uasset, .umap, and will have an official plugin, 'Unreal Importer', that will handle importing entire Unreal Engine projects from 4.27.2, and potentially, 5.X projects in future releases. The visual code equivalent for Unreal's Blueprints will be Schema, but at this time, there are no plans to virtualize it, as is the case with Blueprints. Schema will, quite literally, be just a visual representation of actual code in a friendly interface that would encourage beginners to begin coding their own games through Sapphire.

Additional importers for other engines and programs is also planned. 'Source Importer' will handle importing assets from Valve's Source engine (with additional support for Source 2 in future releases).

# The When
As of February 27, 2024, Sapphire is currently ON HOLD, to allow development and release of other game projects, one which is planned to release in late April. Further updates to games, support windows and other projects in the internal roadmap are purposefully spaced out, in order to allow for the development of Sapphire to steadily continue.

There is no estimated release window for public engine releases in any of the Beta, Alpha or Release stages. The current priority is to have some 2D-specific features ready by Autumn or Winter 2024, with further development to continue in parallel, while one of the projects that heavily uses 2D in Unreal, to be ported and to continue development in Sapphire.
