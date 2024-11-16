---
key: patterns_high_perf_json_schema
title: Patterns for high perf, low alloc JSON Schema validation in .NET
id: patterns_high_perf_json_schema
format: talk
duration: 25
tags:
  - talk
speakers:
  - matthew
presentation: null
draft: false
---

We want to make JSON Schema validation a default procedure for any API. To do that we need to make it a negligible part of the request handling budget, and low-overhead for the developer in the inner dev loop. In this talk, we look at how Corvus.JsonSchema addresses this for .NET, with a schema-first approach, and SourceGenerator support for a seamless developer experience.

---


