---
path: "/naming-vectors-in-r-part-2"
date: "2018-04-29"
title: "Naming vectors in R - Part 2"
tags: ['R', 'lists', 'vectors', 'matrices', 'kathmandu valley', 'hills']
excerpt: "What happens when you try and learn a new programming languages by only following half-baked tutorials, random YT videos, glossing over documentation, well ... doing almost everything but reading a book about the said programming language? You think you know how to solve a problem, albeit a simple one ... but you might not know (until some time has passed) how to solve that simple problem *the right way*."
---

## Naming Vectors in R, Part 2

What happens when you try and learn a new programming languages by only following half-baked tutorials, random YT videos, glossing over documentation, well ... doing almost everything but reading a book about the said programming language? You think you know how to solve a problem, albeit a simple one ... but you might not know (until some time has passed) how to solve that simple problem *the right way*.

Case in point, please see my blog [Naming Vectors in R] (https://www.gauravinthevalley.com/naming-vectors-in-r/ "Naming Vectors in R"). Yes you can name Vectors in the manner I have described in that blog. But now that I'm taking [Data Science: R Basics] (https://courses.edx.org/courses/course-v1:HarvardX+PH125.1x+1T2018/course/ "this course") (highly recommended), I know that there's a super easy way to get the same result. 

How? 

Here's how:

Instead of the paintaking process I've outlined just to print the following out:

![alt text](https://res.cloudinary.com/dwstpvoqc/image/upload/v1523201740/named-vectors-elements-in-r.png "Vector with named elements in RStudio")

You could type the following simple one-liner and get the same result:

`
hills_vector <- c("shivapuri"="north", "nagarjun"="north-west", "phulchowki"="south", "chandragiri"="south-west", "champadevi"="west")`

Type that out in RStudio and see the following get printed out to the console:

![alt text](https://res.cloudinary.com/dwstpvoqc/image/upload/v1523201740/named-vectors-elements-in-r.png "Vector with named elements in RStudio")