# Learn French with Me website Read Me
Version 1 | 22 March 2023

## Description
A website with multiple pages for English speakers interested in accessing French learning tools. The aim of this website is to showcase HTML, JS, CSS, and JSON skills across multiple webpages in a single website. The key features of this project include a dropdown navigation bar using jQuery, a CSS image carousel, and a functional comments section and bookmarks page. 
![LearnFrenchWithMe Homepage](/learn-french-image.png).
This project is a work in progress and full-functionality has not yet been accomplished. I look forward to sharing my progress in the versions that follow. 
### Table of Contents 
1. Contents
2. New Features
3. Installation
4. Collaborator Notes

## 1. CONTENTS
The functional html webpages are the **Homepage** (index.html); **Vocabulary > Verbs** (vocabulary-verbs.html); **Phrasebooks > Bonjour!** (phrasebooks-bonjour.html); and **Bookmarks** (bookmarks.html). 
More pages are expected to go live in April 2023. 
JavaScript functionality across all pages is due to js/index.js and styling is linked to main.css for all pages. bookmarks.css is the stylesheet for a few elements on bookmarks.html . 

## 2. NEW FEATURES
### All Pages 
* Dropdown navigation bar using jQuery 
* Full-width search bar styled and positioned (however functionality expected in April 2023)
* Footer with sitemap for existing pages and expected pages 

### Homepage 
* Carousel of images using CSS
* Image animations and chained effects 
* Checkbox that dynamically changes according to selection
* Custom tooltips using CSS 
* Functional bookmark buttons add/remove homepage articles from bookmarks webpage using local storage
* Newsletter subscription form *without* form handling (however functionality expected in April 2023)
* Functional comments section with comment form using local storage 

### Bookmarks 
* Saved bookmarked articles displayed on bookmarks page
* Remove bookmarked articles from page view using local storage 

### Vocabulary > Verbs 
* Table of present tense commonly used verbs 

### Phrasebooks > Bonjour 
* Table of commonly used greetings and phrases 

## 3. INSTALLATION
* Download all files
* Ensure all files are in a single directory referred to as the main directory.
* Ensure all js files are enclosed in a subfolder in the main directory called js.
* Ensure all css and scss files are enclosed in a subfolder in the main directory called scss.
  * Site users require files that end in .css, specifically main.css and bookmarks.css, in the scss subfolder. 
  * All .scss files (and associated .map files) are available for developer use.
* In the subfolder scss, ensure that a subsubfolder called css-images encloses 7 image files:
   carousel-image-1.jpg, carousel-image-2.jpg, carousel-image-3.jpg, carousel-image-4.jpg, carousel-image-5.jpg, french-bullet-pint.png, and 
   french-flag-bullet.png. 
   These image files are used to make the Homepage css carousel and for bullet point images on the Homepage.
   
* Ensure all remaining image files are enclosed in a subfolder called images.
  * In the images subfolder, ensure language-graph.jpg is enclosed in a subsubfolder called why-french. This image is used in an artical on       the Homepage titled *Why Learn French*.

If installation is completed successfully the main directory should contain the following:
* The .html files: index.html; bookmarks.html; phrase-books.html; vocabulary-verbs.html
* The favicon file: favicon.ico
* This file: README.md
* The js folder. This js folder should contain: 
  * 1 javascript file: index.js 
* The scss folder. This scss folder should contain:
  * 2 css files: main.css; bookmarks.css
  * 2 scss files: main.scss; bookmarks.scss
  * The folder css-images containing: carousel-image-1.jpg; carousel-image-2.jpg; carousel-image-3.jpg; carousel-image-4.jpg; carousel-image-5.jpg; french-bullet-pint.png; french-flag-bullet.png
* The images folder. This images folder should contain: 
   * 9 image files: context-photo-1.jpg; context-photo-2.jpg; context-photo-3.jpg; context-photo-4.jpg; context-photo-5.jpg; context-photo-6.jpg; french-bunding.png; site-users-loading.jpg; site-users-success.jpg
   * The folder why-french containing: language-graph.jpg

## 4. COLLABORATORS
This website uses the wonderful [Flag Icon Repository](https://flagicons.lipis.dev) created by @koppi and @lupis. 
All images are credited on the website and are from sources like Unsplash and Statista. 
This project uses jQuery, Font Awesome Icon Library and Google Fonts. 

