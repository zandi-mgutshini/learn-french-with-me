/* L1T20 Capstone Project Learn French with Me 
Website for learning the french language to showcase HTML, CSS, JS and jQuery skills
Zandi Mgutshini
31 January 2023 */ 
"use strict";

$(document).ready(function(){
    // Carousel images slide down
    $("article.carousel-of-images").stop().slideDown('slow');

    // Function to make the dropdown menu in the navbar slide down smoothly on hover of dropdown button. 
    $('#main-menu-home-button, #main-menu-phrasebooks-button, #main-menu-vocabulary-button, #main-menu-grammar-button, #main-menu-immersive-french-button, #main-menu-about-me-button, #main-menu-bookmarks-button').hover(
        function () {
            $( this ).children(".dropdown-content").stop().slideDown('medium');
         },
         function () {
            $( this).children(".dropdown-content").stop().slideUp('medium');
         }
    )

    // Bookmark Button Changes Classes from unsaved-article to saved-article
    const articleIdMap = new Map([
        ["#homepageArticle1", "#savedArticle1"],
        ["#homepageArticle2", "#savedArticle2"],
        ["#homepageArticle3", "#savedArticle3"],
        ["#homepageArticle4", "#savedArticle4"],
        ["#homepageArticle5", "#savedArticle5"],
        ["#homepageArticle6", "#savedArticle6"],
        ["#savedArticle1", "#homepageArticle1"],
        ["#savedArticle2", "#homepageArticle2"],
        ["#savedArticle3", "#homepageArticle3"],
        ["#savedArticle4", "#homepageArticle4"],
        ["#savedArticle5", "#homepageArticle5"],
        ["#savedArticle6", "#homepageArticle6"],
    ]) 
    let savedArticleIdListHomepage = [];
    let savedArticleIdListBookmarks = [];
    $(".bookmark-button").click( function() {
            savedArticleIdListHomepage = JSON.parse(sessionStorage.getItem("savedArticles"));//Get the array of saved article classes from sessionStorage and assign it to the array 'savedArticleClassList'
            let  bookmarkButtonClicked= $(this).children(".fa-bookmark"); // Selecting i.fa-bookmark 
            bookmarkButtonClicked.toggleClass("unsaved-article saved-article");
            if (bookmarkButtonClicked.hasClass("unsaved-article") === true) {
                bookmarkButtonClicked.attr("title","Add bookmark");
                console.log("Article Removed!");
                let articleRemovedHTML = bookmarkButtonClicked.parent().parent();
                console.log(articleRemovedHTML);
                let articleRemovedHTMLId = articleRemovedHTML.attr("id");
                articleRemovedHTMLId = "#" + articleRemovedHTMLId;
                console.log(`The removed article id is :${articleRemovedHTMLId}`);
                let indexToRemove = savedArticleIdListHomepage.indexOf(String(articleRemovedHTMLId));
                let splicedListElements = savedArticleIdListHomepage.splice(indexToRemove, 1);
                console.log(`We removed article${splicedListElements} from the bookmarked articles
                The new savedArticleIdList is ${savedArticleIdListHomepage}`);
                // savedArticleIdListHomepage = [new Set(savedArticleIdListHomepage)]; // Making sure the array has no duplicates
                sessionStorage.setItem("savedArticles", JSON.stringify(savedArticleIdListHomepage));

            }
            else if (bookmarkButtonClicked.hasClass("saved-article") === true) {
                bookmarkButtonClicked.attr("title","Remove bookmark");
                console.log("Article Saved!");
                let articleAddedHTML = bookmarkButtonClicked.parent().parent();
                let articleAddedHTMLId = articleAddedHTML.attr("id");
                articleAddedHTMLId =  "#" + articleAddedHTMLId;
                console.log(`The saved article class is :${articleAddedHTMLId}`);
                savedArticleIdListHomepage.push(String(articleAddedHTMLId));
                console.log(`We added article${articleAddedHTMLId} to the bookmarked articles
                The new savedArticleClassList is ${savedArticleIdListHomepage}`); 
                // savedArticleIdListHomepage = [new Set(savedArticleIdListHomepage)]; // Making sure the array has no duplicates
                sessionStorage.setItem("savedArticles", JSON.stringify(savedArticleIdListHomepage));
                alert(`You have ${savedArticleIdListHomepage.length} articles saved in bookmarks`);
            }
            else {
                console.log(`Something went wrong when you clicked on this button : ${bookmarkButtonClicked}`);
            }
    })
    // Function called on load to display saved articles on bookmarks.html
    $("body").ready(myBookmarksLoaded)
    function myBookmarksLoaded() {
        if (sessionStorage.getItem("hasCodeRunBeforeBookmarks") === null) {
            let savedArticleIdList = [];
            sessionStorage.setItem("savedArticles", JSON.stringify(savedArticleIdList));
            sessionStorage.setItem("hasCodeRunBeforeBookmarks", true);
        } else {
            savedArticleIdListHomepage = JSON.parse(sessionStorage.getItem("savedArticles"));//Get the array of saved article classes from sessionStorage and assign it to the array 'savedArticleClassList'
            // savedArticleIdListHomepage = [new Set(savedArticleIdListHomepage)]; // Making sure the array has no duplicates
            console.log(savedArticleIdListHomepage);
            // Set savedArticleIdList[i]  > div > i of all saved articles to have the class="saved-article fa-bookmark fa-solid"
            for (let i = 0; i < savedArticleIdListHomepage.length; i++) {
                // Set savedArticleIdListHomepage[i] > div > i of all saved articles to have the class="saved-article fa-bookmark fa-solid"
                let homepageBookmarkIcon = $(savedArticleIdListHomepage[i]).children().children("i");
                homepageBookmarkIcon.attr("class", "saved-article fa-bookmark fa-solid");
                // Create an array of article ids for bookmarks.html 
                let articleMapValue = articleIdMap.get(savedArticleIdListHomepage[i]);
                savedArticleIdListBookmarks.push(articleMapValue);
            }
            for (let k = 0; k < savedArticleIdListBookmarks.length; k++) {
                let bookmarkedArticle = $(savedArticleIdListBookmarks[k]);
                bookmarkedArticle.css("display", "block") ;
                let bookmarksRemoveIcon = $(savedArticleIdListBookmarks[k]).children().children("i");
                bookmarksRemoveIcon.click(function() {
                    savedArticleIdListHomepage = JSON.parse(sessionStorage.getItem("savedArticles"));//Get the array of saved article classes from sessionStorage and assign it to the array 'savedArticleClassList'
                    let idOfArticleRemoved = "#" + bookmarkedArticle.attr('id');
                    bookmarkedArticle.slideUp('slow');
                    let homepageIdOfArticleRemoved = articleIdMap.get(String(idOfArticleRemoved));
                    let homepageIdOfArticleRemovedIndex = savedArticleIdListHomepage.indexOf(String(homepageIdOfArticleRemoved));
                    let splicedListElements = savedArticleIdListHomepage.splice(homepageIdOfArticleRemovedIndex, 1);
                    console.log(`We removed article${splicedListElements} from the bookmarked articles
                    The new savedArticleIdList is ${savedArticleIdListHomepage}`);
                    sessionStorage.setItem("savedArticles", JSON.stringify(savedArticleIdListHomepage));
                });
            }
        }
    }

    // Function to enlarge or reduce the Statista Graph on click of the maximise/minimise button 
    $(".minimiser-maximiser-button").click(
        function () {
            $(".minimiser-maximiser-button").children("i").toggleClass("fa-up-right-and-down-left-from-center fa-down-left-and-up-right-to-center");
            $("#statistaGraph").toggleClass("minimised maximised");
        }
    )
    // Function to fade in images in box 3 In what context is french useful
    function MyContextPhotosAnimator() {
        $("#contextPhoto1Travel, #contextPhoto2Friends, #contextPhoto3Love, #contextPhoto4Study, #contextPhoto5Diplomacy, #contextPhoto6Business").slideDown("slow").slideUp("slow").fadeOut("slow").fadeIn("slow");
    }
    setTimeout(MyContextPhotosAnimator, 1000);
    
    // Checkbox event listener using jQuery for box-7 .who-is this website for article
    $('input:checkbox').change(
        function() {
            if ($('input:checkbox:checked').length > 0) {
                $('img.site-users-loading').hide().stop();
                $('img.site-users-success').stop().fadeIn('5000');
            }
            else if ($('input:checkbox:checked').length === 0) {
                $('img.site-users-success').hide().stop();
                $('img.site-users-loading').stop().fadeIn('5000');
            }
        }
    )
    // Comments Section 
    // Create a comment object array 
    let publishedCommentsObjArray = [];
    // Create comment constructor function
    function userComment(author, comment, location , date) {
        this.author = author;
        this.comment = comment;
        this.location= location;
        this.date = date;
    }
    // Prevent the page from reloading on click of post comment button
    $("#comment-form").submit(function(e) {
        e.preventDefault();
    });
    // Adding post comment event on click of post comment button
    $("#post-comment-button").click(PostComment)
    // Post comment function
    function PostComment() {
        // Fetching data from form and JSON
        publishedCommentsObjArray = JSON.parse(sessionStorage.getItem("publishedComments"));//Get the array of comments objects from sessionStorage and assign it to the array 'publishedCommentsObjArray'
        let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let currentDateTime = new Date();
        let userCommentAuthor = $('#user-comment-author').val();
        let userCommentLocation =$('#user-comment-location').val();
        let userCommentComment = $('#user-comment-comment').val();
        let userCommentDate = String( currentDateTime.getDate() + " " +  monthArray[currentDateTime.getMonth()] + " " + currentDateTime.getFullYear());

        // If else statement acts as form validator. Form submission cannot occur without all comment fields completed.
        if ((userCommentAuthor | userCommentComment | userCommentLocation) == null ) {
            alert(`You need to complete all the fields to post a comment`);
            console.log(`Author:${userCommentAuthor}
            Location: ${userCommentLocation}
            Comment: ${userCommentComment}
            Date: ${userCommentDate}`);
        } else { 
            // Selecting all published comments article to append new elements.
            let htmlSelect = $("#all-published-comments");
            let userCommentObject = new userComment(userCommentAuthor, userCommentComment, userCommentLocation, userCommentDate);
            publishedCommentsObjArray.push(userCommentObject); 
            console.log(userCommentObject);
            console.log(publishedCommentsObjArray);

            // Store updated array using JSON stringify
            sessionStorage.setItem("publishedComments", JSON.stringify(publishedCommentsObjArray));
            
            // Creating individual comment container
            let commentContainer = $("<div>");
            commentContainer.attr("id", `comment-${publishedCommentsObjArray.length - 1}`)
            commentContainer.addClass("published-comment-container");
            // Creating comment author elements
            let authorItem = $("<p>");
            authorItem.addClass("published-comment-author");
            let authorIconItem= $("<i>");
            authorIconItem.addClass("fa-solid fa-circle-user");
            authorItem.text(userCommentObject.author);
            authorItem.prepend(authorIconItem);
            // Creating comment comment elements
            let commentItem = $("<p>")
            commentItem.text(userCommentObject.comment);
            commentItem.addClass("published-comment-comment")
            // Creating comment location elements
            let locationItem = $("<p>");
            locationItem.text(userCommentObject.location);
            let locationItemIcon = $("<i>");
            locationItemIcon.addClass("fa-solid fa-location-dot");
            locationItem.prepend(locationItemIcon);
            locationItem.addClass("published-comment-location");
            //Creating comment date elements
            let dateItem = $("<p>")
            dateItem.text(userCommentObject.date);
            dateItem.addClass("published-comment-date");
            let dateItemIcon = $("<i>");
            dateItemIcon.addClass("fa-solid fa-calendar-day")
            dateItem.prepend(dateItemIcon);
            // Appending each item to the article with id= "all-published-comments"
            commentContainer.append(authorItem);
            commentContainer.append(commentItem);
            commentContainer.append(locationItem);
            commentContainer.append(dateItem);
            htmlSelect.append(commentContainer);
            // Reseting form input values to "" after posting comment
            $('#user-comment-author').val("");
            $('#user-comment-location').val("");
            $('#user-comment-comment').val("");
        }
    }
    // Function to display all published comments on the page when the body has loaded
    $("body").ready(myLoad); 
    function myLoad() {
        let htmlSelect = $('#all-published-comments');
        if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        // let publishedCommentsObjArray = [];
            sessionStorage.setItem("publishedComments", JSON.stringify(publishedCommentsObjArray));
            sessionStorage.setItem("hasCodeRunBefore", true);
        } else {
            publishedCommentsObjArray = JSON.parse(sessionStorage.getItem("publishedComments"));//Get the array of comments objects from sessionStorage and assign it to the array 'publishedCommentsObjArray'
            let i = 0;
            //Loop through each comment (c) in the publishedCommentsObjArray and display them in HTML
            publishedCommentsObjArray.forEach(function(c) {
                //For each comment in the array create a div element that contains 4 p elements for the comment author, comment, location and date.  
                let commentContainer = $("<div>");
                commentContainer.attr("id", `comment-${String(i)}`)
                commentContainer.addClass("published-comment-container");
                // Comment Author
                let authorItem = $("<p>");
                authorItem.addClass("published-comment-author");
                let authorIconItem= $("<i>");
                authorIconItem.addClass("fa-solid fa-circle-user")
                authorItem.text(c.author);
                authorItem.prepend(authorIconItem)
                // Comment comment
                let commentItem = $("<p>")
                commentItem.text(c.comment);
                commentItem.addClass("published-comment-comment")
                // Comment location: 
                let locationItem = $("<p>");
                locationItem.text(c.location);
                let locationItemIcon = $("<i>");
                locationItemIcon.addClass("fa-solid fa-location-dot");
                locationItem.prepend(locationItemIcon);
                locationItem.addClass("published-comment-location");
                //Comment Date:
                let dateItem = $("<p>")
                dateItem.text(c.date);
                dateItem.addClass("published-comment-date");
                let dateItemIcon = $("<i>");
                dateItemIcon.addClass("fa-solid fa-calendar-day")
                dateItem.prepend(dateItemIcon);
                // Appending all comments to the page
                commentContainer.append(authorItem);
                commentContainer.append(commentItem);
                commentContainer.append(locationItem);
                commentContainer.append(dateItem);
                htmlSelect.append(commentContainer);
                i = i + 1;
            });
        }
    }
    
    
});