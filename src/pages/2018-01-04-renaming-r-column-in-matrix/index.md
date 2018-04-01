---
path: "/renaming-matrix-column-in-r"
date: "2018-04-01"
title: "Naming Matrix Rows and Columns in R"
tags: ['R', 'matrix', 'programming', 'kathmandu valley', 'ranipokhari', 'gahanapokhari']
excerpt: "I'm brand new to R. In my quest to become fluent in the statistics aspect of Machine Learning this year, I've ventured toward learning R in all its glory. As a part of that venture, I bumped into how one could actually give names to rows and columns in R's matrix."
---

## Naming Matrix Rows and Columns in R

I'm brand new to R. In my quest to become fluent in the statistics aspect of Machine Learning this year, I've ventured toward learning R in all its glory. As a part of that venture, I bumped into how one could actually give names to rows and columns in R's matrix.

Here's how to do so:

First, you get your column and row names defined:

`localities <- c('Koteshwore', 'Battisputali', 'Chakrapath', 'Kalanki')`

The vector `localities` above stores some localities in the Kathmandu Valley. We will have this vector as our row of the matrix we will define shortly. Before that, let's get t defining our column as another vector:

`ponds <- c('Ranipokhari', 'Khhichapokhari', 'Panipokhari', 'Gahanapokhari')`

The `ponds` vector stores some *pokharis* (पोखरी, in Nepali) around the Kathmandu Valley. A *pokhari* in Nepali, as you might have guessed by now, means a *pond*, in English.

Moving on ... so how far are the ponds from the localities we defined above? Let's create more vectors, shall we?

`distance_from_koteshore <- c("8.5", "7.5", "4", "9")`

`distance_from_battisputali <- c("4", "5", "5.5", "3.5")`

`distance_from_chakrapath <- c("5", "6", "2", "5")`

`distance_from_kalanki <- c("9", "8", "12", "11")`

Those distance are in kilometers (My approximations).

Can we create the matrix already? 

`distance_matrix <- matrix(c(distance_from_koteshwore, distance_from_battisputali, distance_from_chakrapath, distance_from_kalanki), nrow=4, byrow = TRUE)`

Finally, right? Alright, printing out our `distance_matrix` in RStudio gives us the following:

`             [,1]  [,2]  [,3]  [,4]` 

`[1,] "8.5" "7.5" "10"  "7" `

`[2,] "4"   "5"   "5.5" "3.5"`

`[3,] "5"   "6"   "2"   "5"  `

`[4,] "9"   "8"   "12"  "11" `

Cool! Well, almost ... would be way cooler if we could just name the rows and columns too. And we can. Remember our `localities` and `ponds` vectors above? Let's put them to good use:

`colnames(distance_matrix) <- ponds`

`rownames(distance_matrix) <- rows`

Wooohooo!!

Look what we've got! A readable, understandable matrix (Why didn't I learn R before?):

`Ranipokhari Khichapokhari Panipokhari Gahanapokhari`

`Koteshwore   "8.5"       "7.5"         "10"        "7"         `

`Battisputali "4"         "5"           "5.5"       "3.5"        `

`Chakrapath   "5"         "6"           "2"         "5"          `

`Kalanki      "9"         "8"           "12"        "11"         `



