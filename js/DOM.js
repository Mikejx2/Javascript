function createDivision(css, id, text){

    var division = document.createElement('div');
    division.setAttribute("class",css);
    division.setAttribute("id", id);
    division.textContent = text;
    
    return division
    
}

function createNav(css){

    var nav = document.createElement('nav');
    nav.setAttribute('class', css);
    return nav
    
}
function createAnchor(url, text, css){

    var anchor = document.createElement('a');
    anchor.setAttribute('class', css);
    anchor.setAttribute('href', url);
    anchor.textContent = text;

    return anchor
    
}

function createButton(css, type, databstoggle, databstarget, ariacontrols, ariaexpanded, arialabel ){

    var button = document.createElement('button');
    button.setAttribute('class', css);
    button.setAttribute('type', type);
    button.setAttribute('data-bs-toggle', data-bs-toggle);
    button.setAttribute('data-bs-target', data-bs-target);
    button.setAttribute('aria-controls', aria-controls);
    button.setAttribute('aria-expanded', aria-expanded);
    button.setAttribute('aria-label', aria-label);
    return button
    
}

function createSpan(css){

    var span = document.createElement('span');
    span.setAttribute('class', css);
    return span
    
}

function createUl(css, id){

    var ul = document.createElement('ul');
    ul.setAttribute('class', css);
    ul.setAttribute('id', id);
    return ul
    
}
function createLi(css, id, text){

    var li = document.createElement('li');
    li.setAttribute('class', css);
    li.setAttribute('id', id);
    li.textContent = text;
    return li
    
}


// container



var container = document.querySelector('.container');

// nav tag

var nav = document.createNav("navbar navbar-expand-lg navbar-dark bg-blue h1");


// anchor tags 

var navbarAnchor = createAnchor("#", "High On Coding", "navbar-brand");
var homeAnchor = createAnchor("#", "Home", "nav-link active");
var categoriesAnchor = createAnchor("#", "Categories", "nav-link");


// div tags

var d1 = createDivision("container-fluid", "d1", "")
var navbarNav = createDivision("collapse  navbar-collapse", "navbarNav", "")
var d2 = createDivision("container1  gx-5", "d2", "")
var d3 = createDivision("row mt-3 bg-gray px-5 pt-3 pb-3", "d3", "")
var d4 = createDivision("row h1 text-gray mb-0", "d4", "Curse of the Current Reviews")
var d5 = createDivision("row h4", "d5", "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.")
var d6 = createDivision("row bg-lgray mt-3", "d6", "row bg-lgray mt-3")
var d7 = createDivision("row h2 text-blue", "d7","Hello WatchKit")
var d8 = createDivision("row h4", "d8", "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch." )
var d9 = createDivision("", "d9","" )
var d10 = createDivision("row h150 bg-lgray mt-3", "d10", )
var d11 = createDivision("row h2 text-blue", "d11", "Introduction to Swift" )
var d12 = createDivision("row h4", "d12", "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started." )
var d13 = createDivision("row h4", "d13", )


// button tag
var button1 = createButton("navbar-toggler","button","collapse", "#navbarNav", "navbarNav", "false", "Toggle navigation" )

// span tag
var span1 = createSpan("navbar-toggler-icon")

// ul tags
var ul1 = createul("navbar-nav ms-auto", "ul1")
var ul2 = createul("yellow-strip p-2 text-white","ul2")
var ul3 = createul("comments ms-auto yellow-strip p-2 text-white", "ul3")

// li tags
var li1 = createul("nav-item", "li1", "")
var li2 = createul("nav-item","li2", "")
var li3 = createul("comment-item d-inline", "li3", "12 Comments")
var li4 = createul("nav-item d-inline ms-5 ", "li4", "124 likes")
var li5 = createul("comment-item d-inline ", "li5", "15 Comments")
var li6 = createul("nav-item d-inline ms-5 ", "li6", "45 likes")






// create nav bar


container.append(nav);
    nav.append(d1);
        d1.append(navbarAnchor);
        d1.append(button1);
            button1.append(span1);
        d1.append(navbarNav);
            navbarNav.append(ul1);
                ul1.append(li1);
                ul1.append(li2);
container.append(d2);
    d2.append(d3);
        d3.append(d4);
        d3.append(d5);
    d2.append(d6);
        d6.append(d7);
        d6.append(d8);
        d6.append(d9);
            d9.append(ul2);
                ul2.append(li3);
                ul2.append(li4);
    d2.append(d10);
        d10.append(d11);
        d10.append(d12);
        d10.append(d13);
            d13.append(ul3)
                ul3.append(li5);
                ul3.append(li6);






























