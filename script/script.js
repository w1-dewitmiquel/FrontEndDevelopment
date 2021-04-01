//hardcode; txt is for txt in de navbar; href is for the anchor link
const navMenu = 
{
    title: 'Ga naar',
    links:[
        {
            txt: 'home',
            href: 'index.html'
        },
        {
            txt: 'team',
            href: 'team.html'
        },
        {
            txt: 'nieuws',
            href: 'nieuws.html'
        },
        {
            txt: 'loterij',
            href: 'loterij.html'
        },
        {
            txt: 'contact',
            href: 'contact.html'
        }
    ]
};

const mediaLinks = {
    title: 'Social',
    links:[
        {
            txt: '<i style="font-size:24px" class="fa">&#xf230;</i>',
            href: 'http://www.facebook.nl'
        },
        {
            txt: '<i style="font-size:24px" class="fa">&#xf081;</i>',
            href: 'http://www.twitter.nl'
        },
        {
            txt: '<i style="font-size:24px" class="fa">&#xf16d;</i>',
            href: 'http://www.instagram.nl'
        },
        {
            txt: '<i style="font-size:24px" class="fa">&#xf16a;</i>',
            href: 'http://www.youtube.nl'
        }
    ]
};

function insetHeaderAndFooter() {
    //get the body element from the document;
    var body = document.getElementsByTagName('body')[0];

    //generate the elements
    var header = createHeader();
    var footer = createFooter();

    //place the element
    body.insertBefore(header, body.childNodes[0]);
    body.appendChild(footer)
}

function createNavigation() {
    //creating elements
    var nav = document.createElement('nav');
    var logo = createNavLogo();
    var links = createNavLinks();
    var pagetitle = createNavPageTitle();
    var menu = createNavMenu(links);

    //merging elements
    nav.appendChild(logo);
    nav.appendChild(links);
    nav.appendChild(pagetitle);
    nav.appendChild(menu);

    return nav
}

function createNavPageTitle(){
    const title = document.createElement('div');
    title.id = 'pageTitle';
    
    title.innerHTML = document.title;

    return title;
}

function createNavMenu(links){
    const menu = document.createElement('div');
    
    menu.id = 'hamburger';
    menu.innerHTML = '&#9776;'
    
    menu.addEventListener('click',()=>{
        if(links.style.visibility == 'visible')
        {
            links.style.visibility = 'hidden';
        }
        else
        {
            links.style.visibility = 'visible';
        }
    })
    
    return menu;
}

function createNavLogo() {
    //creating wrapper
    var logo = document.createElement('div');
    logo.id = "navLogo"

    //create Text;
    var txt = document.createElement('span');
    txt.innerHTML = 'HSV Nederwijk'

    //creating image
    var img = document.createElement('img');
    img.setAttribute('src', './images/logo.png');

    //merging elements
    logo.appendChild(txt);
    logo.appendChild(img);

    //setting function to go to home
    logo.addEventListener("click",()=>{
        window.location.href = "index.html";
    })

    //after creations it return the element
    return logo
}

function createNavLinks() {
    //creates a wrapper for all the anchors;
    var wrapper = document.createElement('div');
    wrapper.id = "navLinks"

    //function to insert all available links
    navMenu.links.forEach(link => {
        let anchor = document.createElement('a');
        anchor.innerHTML = link.txt;
        anchor.setAttribute('href', link.href);
        if(link.href == window.location.pathname.split("/").pop()){
            anchor.className = "selected";
        }
        wrapper.appendChild(anchor);
    })

    return wrapper;
}

function createFooter() {
    //creating elements
    var nav = createFooterSection(navMenu);
    var media = createFooterSection(mediaLinks);
    var design = createFooterDesign();
    var copyright = createCopyright();
    var footer = document.createElement('footer');

    //setting footer content
    footer.appendChild(nav);
    footer.appendChild(media);
    footer.appendChild(design);
    footer.appendChild(copyright);

    return footer
}

function createFooterSection(section){
    //creating element
    var wrapper = document.createElement('section');
    var title = document.createElement('h3');

    //settings content
    title.innerHTML = section.title;

    wrapper.appendChild(title);

    //function to insert all available links
    section.links.forEach(link => {
        let anchor = document.createElement('a');
        anchor.innerHTML = link.txt;
        anchor.setAttribute('href', link.href);
        wrapper.appendChild(anchor);
    })

    return wrapper;
}

function createFooterDesign(){
    //creating element
    var design = document.createElement('div');
    var title = document.createElement('div');

    //settings css
    title.innerHTML = 'Design:';
    title.style.fontSize = '30px';

    design.appendChild(title);

    //function to insert all available names
    ['Mark Sloesen','Miquel de Wit','Yusuf Sirin'].forEach(name => {
        let span = document.createElement('span');
        span.innerHTML = name;
        span.style.display = 'block';
        span.style.textDecoration = 'none';

        design.appendChild(span);
    })

    return design;
}

function createCopyright(){
    //creating element
    var small = document.createElement('small');

    //setting content
    small.innerHTML = '&copy;2021 HVS Nederwijk';

    return small;
}

function createBanner() {
    //creating elements
    var wrapper = document.createElement('div');
    var banner = document.createElement('img');
    banner.setAttribute('src', './images/banner.jpg');

    //setting id
    wrapper.id = "bannerWrapper";
    banner.id = "banner";

    wrapper.appendChild(banner);

    return wrapper
}

function createHeader(){
    var header = document.createElement('header');
    var banner = createBanner();
    var nav = createNavigation();

    header.appendChild(banner);
    header.appendChild(nav);

    return header;
}

insetHeaderAndFooter();