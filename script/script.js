function insetHeaderAndFooter(){
    //get the body element from the document;
    var body = document.getElementsByTagName('body')[0];
    
    //generate the elements
    var nav = createNavigation();
    var footer = createFooter();

    //place the element
    body.insertBefore(nav, body.childNodes[0]);
    body.appendChild(footer)
}

function createNavigation(){
    //setting size for easier scaling
    var size = 180;

    //creating elements
    var nav = document.createElement('nav');
    var logo = createNavLogo(size);
    var links = createNavLinks(size);

    //setting navigation bar
    nav.style.height = `${size / 3.75}px`;
    nav.style.position = 'relative';
    nav.style.top = `${size / 2}px`;
    nav.style.width = '100%';
    nav.style.display = 'flex';
    nav.style.flexDirection = 'row';
    nav.style.backgroundColor = 'var(--HSV-COLOR-DARKBLUE)';

    //merging elements
    nav.appendChild(logo);
    nav.appendChild(links)

    return nav
}

function createNavLogo(size){
    //creating wrapper
    var logo = document.createElement('div');
    logo.style.height = `${size}px`;
    logo.style.position = 'relative';
    logo.style.top = `-${size/450*165}px`;
    logo.style.display = 'flex';
    logo.style.alignItems = 'center';

    //create Text;
    var txt = document.createElement('div');
    txt.innerHTML = 'HSV Nederwijk'
    txt.style.height = `${size /3.75}px`;
    txt.style.width = `${size}px`;
    txt.style.fontSize = `${size / 8}px`;
    txt.style.display = 'flex';
    txt.style.justifyContent = 'center';
    txt.style.alignItems = 'center';
    txt.style.color = 'var(--HSV-COLOR-YELLOW)';

    //creating image
    var img = document.createElement('img');
    img.setAttribute('src','./images/logo.png');
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;

    //merging elements
    logo.appendChild(txt);
    logo.appendChild(img);

    //after creations it return the element
    return logo
}

function createNavLinks(size){
    //hardcode; txt is for txt in de navbar; href is for the anchor link
    const links = [
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
            href: 'loterij.html'
        },
        {
            txt: 'loterij',
            href: 'loterij.html'
        },
        {
            txt: 'contact',
            href: 'contact.html'
        }
    ];

    //creates a wrapper for all the anchors;
    var wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.display = 'flex';

    //function to insert all available links
    links.forEach(link=>{
        let anchor = document.createElement('a');
        anchor.innerHTML = link.txt;
        anchor.setAttribute('href', link.href);
        anchor.style.height = `${size /3.75}px`;
        anchor.style.width = `${size / 1.5}px`;
        anchor.style.fontSize = `${size / 8}px`
        anchor.style.display = 'flex';
        anchor.style.justifyContent = 'center';
        anchor.style.alignItems = 'center';
        anchor.style.textTransform = 'uppercase';
        anchor.style.color = 'var(--HSV-COLOR-YELLOW)';
        anchor.style.textDecoration = 'none';

        wrapper.appendChild(anchor);
    })

    return wrapper;
}

function createFooter(){
    //setting size for easier scaling
    var size = 180;

    //creating elements
    var footer = document.createElement('footer');

    //setting footer css
    footer.style.height = `300px`;
    footer.style.position = 'relative';
    footer.style.top = `${size / 2}px`;
    footer.style.width = '100%';
    footer.style.display = 'flex';
    footer.style.flexDirection = 'row';
    footer.style.backgroundColor = 'var(--HSV-COLOR-DARKBLUE)';

    return footer
}

insetHeaderAndFooter();