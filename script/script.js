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
            txt: 'facebook',
            href: 'http://www.facebook.nl'
        },
        {
            txt: 'twitter',
            href: 'http://www.twitter.nl'
        },
        {
            txt: 'instagram',
            href: 'http://www.instagram.nl'
        },
        {
            txt: 'youtube',
            href: 'http://www.youtube.nl'
        },
        {
            txt: 'tiktok',
            href: 'http://www.tiktok.nl'
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
    //setting size for easier scaling
    var size = 180;

    //creating elements
    var nav = document.createElement('nav');
    var logo = createNavLogo(size);
    var links = createNavLinks(size);

    //setting navigation bar
    nav.style.height = `${size / 3.75}px`;

    //merging elements
    nav.appendChild(logo);
    nav.appendChild(links)

    return nav
}

function createNavLogo(size) {
    //creating wrapper
    var logo = document.createElement('div');
    logo.id = "navLogo"
    logo.style.height = `${size}px`;
    logo.style.top = `-${size / 450 * 165}px`;

    //create Text;
    var txt = document.createElement('span');
    txt.innerHTML = 'HSV Nederwijk'
    txt.id = "navLogoTxt"
    txt.style.height = `${size / 3.75}px`;
    txt.style.width = `${size}px`;
    txt.style.fontSize = `${size / 8}px`;

    //creating image
    var img = document.createElement('img');
    img.setAttribute('src', './images/logo.png');
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;

    //merging elements
    logo.appendChild(txt);
    logo.appendChild(img);

    //after creations it return the element
    return logo
}

function createNavLinks(size) {
    //creates a wrapper for all the anchors;
    var wrapper = document.createElement('div');
    wrapper.id = "navLinks"

    //function to insert all available links
    navMenu.links.forEach(link => {
        let anchor = document.createElement('a');
        anchor.innerHTML = link.txt;
        anchor.setAttribute('href', link.href);
        anchor.style.height = `${size / 3.75}px`;
        anchor.style.width = `${size / 1.5}px`;
        anchor.style.fontSize = `${size / 8}px`

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
    title.style.color = 'var(--HSV-COLOR-YELLOW)';
    title.style.fontSize = '30px';

    design.appendChild(title);

    //function to insert all available names
    ['Mark Sloesen','Miquel de Wit','Yusuf Sirin'].forEach(name => {
        let span = document.createElement('span');
        span.innerHTML = name;
        span.style.display = 'block';
        span.style.color = 'var(--HSV-COLOR-YELLOW)';
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