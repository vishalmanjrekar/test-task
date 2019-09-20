export const serialize = (htmlArray) => {
    if(htmlArray !== null && htmlArray !== undefined && htmlArray.length > 0){
        if(typeof(htmlArray[0]) === "string") {
            var rootElement = document.createElement(htmlArray[0]);
            if (htmlArray[1] !== undefined) {
                for (let i = 1; i < htmlArray.length; i++) {
                    if (typeof (htmlArray[i]) === "string") {
                        rootElement.innerHTML += htmlArray[i];
                    } else if (htmlArray[i].length > 0) {
                        rootElement.innerHTML += serialize(htmlArray[i]);
                    }
                }
            }
        } else {
            return 0;
        }
        return rootElement.outerHTML;
    } else {
        return null;
    }
}
export const deserialize = (html) => {
    var arr = [];
    var div = document.createElement("div");
    div.innerHTML = html;
    if(div.children !== null && div.children.length > 0) {
        div = div.children[0];
        arr.push(div.tagName.toLowerCase());
        if (div.children.length > 0) {
            let a = [];
            for (let obj of div.children) {
                arr = [...arr, deserialize(obj.outerHTML)];
            }
        } else if(div.innerHTML !== "" && div.innerHTML !== undefined) {
            arr.push(div.innerHTML);
        }
        return arr;
    } else {
        return null;
    }
}