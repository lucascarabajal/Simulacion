
const domManagement = (function(){

    const domButton = function(nameID, className, innerHtml){

        const button = document.createElement('button');
        button.id = nameID;
        button.className = className
        button.innerHTML = innerHtml;

        return button;
    }

    const domParagraph = function(nameID, content){
        const paragraph = document.createElement('p');
        paragraph.id = nameID;
        paragraph.innerHTML = content;

        return paragraph;
    }

    const domH1 = function(nameID, content){
        const heading1 = document.createElement('h1');
        heading1.id = nameID;
        heading1.innerHTML = content;

        return heading1;
    }

    const domH2 = function(nameID, content){
        const heading2 = document.createElement('h2');
        heading2.id = nameID;
        heading2.innerHTML = content;

        return heading2;
    }

    const domH3 = function(nameID, content){
        const heading3 = document.createElement('h3');
        heading3.id = nameID;
        heading3.innerHTML = content;

        return heading3;
    }

    const domImage = function(nameID, srcImage){
        const img = document.createElement('img');

        img.id = nameID;
        img.src = srcImage;

        return img;
    }

    const domAnchor = function(nameID, content, hrefPage){
        const anchor = document.createElement('a');

        anchor.id = nameID;
        anchor.href = hrefPage;
        anchor.innerHTML = content;

        return anchor;
    }

    const domInput = function(nameID, type, placeholderContent, checkValue){
        const input = document.createElement('input');
        input.type = `${type}`;
        input.id = nameID;
        if(checkValue != undefined){
            input.value = checkValue;
        }
        input.placeholder = placeholderContent;

        return input;
    }

    const domSelect = function(name, nameID, ...options ){
        const select = document.createElement('select');
        select.name = name;
        select.id = nameID;
        options.forEach(element => {
            const option = new Option(element, element);
            select.add(option, undefined);
        });

        return select;
    }

    return{
        domButton,
        domImage,
        domParagraph,
        domH1,
        domH2,
        domH3,
        domAnchor,
        domInput,
        domSelect,
        domInput
    }
})();






export  {domManagement};