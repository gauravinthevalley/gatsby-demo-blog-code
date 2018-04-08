---
path: "/naming-vectors-in-r"
date: "2018-04-07"
title: "Naming vectors in R"
tags: ['R', 'lists', 'vectors', 'matrices', 'kathmandu valley', 'hills']
excerpt: "You see, I thought that the fact that you could give nice names to all columns and rows of a R Matrix was kind of a big deal (for some context, please refer to my first ever blog post). I mean, you just don't go around naming rows and columns of a 2-D array in many programming languages, right? I mean you might, but the majority of mainstream programming languages, I would assume, wouldn't make it so trivial"
---

## Naming Vectors in R

You see, I thought that the fact that you could give nice names to all columns and rows of a R Matrix was kind of a big deal (for some context, please refer to [my first ever blog post] (https://www.gauravinthevalley.com/naming-matrix-rows-and-columns-in-r/ "Naming Matrix Rows and Columns in R")). I mean, you just don't go around naming rows and columns of a 2-D array in many programming languages, right? I mean you might, but the majority of mainstream programming languages, I would assume, wouldn't make it so trivial; R does.

Forget 2-D arrays for a sec! How about a simple 1-D array? Can we also provide names to their elements in R? You bet! R calls 1-D arrays Vectors. Here's a way to declare a Vector in R:

`hills_vector <- ("north", "west", "south", "south-west")`

Print out the `hills_vector` in RStudio. Here's what you get:

![alt text](http://res.cloudinary.com/dwstpvoqc/image/upload/v1523128228/vectors-elements-in-r.png "Vector (elements not named) in RStudio")

Like 1-D arrays in many modern day mainstream programming languages, Vectors in R hold values of the same data type. Matrices, that I talked about in my first blog post, also hold values of the same data type. Lists and Data Frames (both of which I will talk about in detail in a future post), can hold values of different data types. 

So how do we actually provide names to our individual elements in a R vector? 

Here's how (and you will notice that the syntax of doing so is the similar to that of naming elements of a R Matrix):

`names(hills_vetor) <- c("shivapuri", "nagarjun", "chobhar", "chandragiri")`

These names are of actual hills that surround the Kathmandu Valley. I have yet to go to [Chandragiri] (https://www.chandragirihills.com/ "Chandagiri Hills"). They now have cable cars that take you up there. The wife and I did plan to go there some months ago and had even purcahsed tickets to that end. Something came up at her work, and we ended up giving the tickets to my parents who were visiting. They took some nice pictures. Since I don't have a FB account, and I'm not about to post pics of my parents visiting Chandragiri hills on my LinkedIn, I will post it here. (Has to be on an update now because I can't seem to find any on my machine right now.)

Moving on ... If you print out `hills_vector` now in RStudio, here's what you get: 

![alt text](https://res.cloudinary.com/dwstpvoqc/image/upload/v1523127786/named-vectors-elements-in-r.png "Vector with named elements in RStudio")

Look that them names for those elements. Isn't that just lovely? 


 

