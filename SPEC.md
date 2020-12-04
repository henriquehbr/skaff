# scaffolding-prototype specification

> This specification aims to describe the inner workings of `scaffolding-project` every single feature, step-by-step, in high detail

## Summary

1. [Introduction](#Introduction)
2. [Concepts](#Concepts)
   1. [Prompts](#Prompts)
   2. [Actions](#Actions)
   3. [Templates](#Templates)
3. [Usage](#Usage)

## Introduction

`scaffolding-prototype` is a CLI scaffolding tool aimed to setup a project architecture in a matter of seconds, regardless of the language, tools or environment, the way it works is relatively simple and mainly composed by three major pieces below

## Concepts

- ### Prompts

These are the initial stage of the application, where the user is asked questions about it's preferences on how the project should be structured or whether not to support a specific feature, like i18n, routing, test and etc

Example:

```json
{
  "prompts": [
    {
      "type": "input",
      "name": "name",
      "message": "What is the name of this package?"
    },
    {
      "type": "input",
      "name": "description",
      "message": "How would you describe this package?"
    }
  ]
}
```

- ### Actions

After the user replied to all it's preferences, these answers will be analyzed, and passed to actions, which in turn, will send this data to the [`ejs`](https://github.com/mde/ejs) templates

```json
{
  "actions": [
    {
      "type": "add",
      "files": "**"
    }
  ]
}
```

- ### Templates

These are the files to be generated, but with a extra syntax, that will dynamically replace some portions of the file content, depending on the data received from the prompts

```json
{
  "name": "<%= name %>",
  "description": "<%= description %>",
  "version": "0.0.0"
}
```

## Usage

The example below contain details about the parameters needed for executing `scaffolding-prototype`:

```
$ scaffolding-prototype <generator> [outdir] [parameters]
```

- `generator`: name of the directory (or npm module) containing the `generator.js`, needed for prompting the questions and generating the files (required)
- `outdir`: path to where the project is going to be generated
- `parameters`: other flags and answers to the generator prompt
