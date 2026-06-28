let arr = [];
const body_color_array = [ 'E63946','1D3557','457B9D','F1FAEE'];
// const container_color_array = ['457B9D', 'A8DADC'];

const input = document.getElementById("userInput");
const lengthDisplay = document.getElementById("lengthDisplay");
const search_input = document.getElementById("search-input");
const search_idx_display = document.getElementById("display_search");
const display_st_element = document.getElementById("st-element");
const display_end_element = document.getElementById("end-element");
const container = document.getElementById("container");
const operation_text = document.getElementById("operations");
const sum_text = document.getElementById("sum");

document.getElementById("pushBtn").addEventListener("click", pushElement);
document.getElementById("popBtn").addEventListener("click", popElement);
document.getElementById("clearBtn").addEventListener("click", clearArray);
document.getElementById("search-element-btn").addEventListener("click", searchElement);

document.getElementById("theme_btn").addEventListener("click", function() {
    apply_theme(body_color_array);
});


function pushElement() {

    const value = input.value.trim();

    if(value === "")
        return;

    if( isNaN(value) ) {
        alert("The array accepts numerical values only!");
        operation_text.innerText = `ERROR! Invalid Input`;
        return;
    }

    arr.push(Number(value)); //if Number is not used then it is stored as string as it is coming from placeholder input
    operation_text.innerText = `Operation Performed-> (push): ${value} inserted at the back of the array`;
    input.value = "";

    renderArray();

    getFirstElement();
    getLastElement();
    resetSearchResult();
    getSum();
    
}

function popElement() {

    if(arr.length === 0)
        return;

    let el = arr[arr.length-1];
    arr.pop();
    operation_text.innerText = `Operation Performed-> (pop): ${el} removed from the array`;
    renderArray();

    getFirstElement();
    getLastElement();
    resetSearchResult();
    getSum();
}

function showLength() {

    lengthDisplay.textContent =
        `Length: ${arr.length}`;

}

function clearArray() {

    arr = [];

    renderArray();

    getFirstElement();
    getLastElement();
    resetSearchResult();
    getSum();

    operation_text.innerText = `Operation Performed-> (clear): all elements removed from the array`;
}

function renderArray() {

    const container =
        document.getElementById("arrayContainer");

    container.innerHTML = "";

    for(let i = 0; i < arr.length; i++) {

       
        const box = document.createElement("div");

        if( i == arr.length-1 ) box.style.backgroundColor = "#FF0000";

        box.classList.add("array-element");

        box.textContent = arr[i];

        container.appendChild(box);
    }

    lengthDisplay.textContent =
        `Length: ${arr.length}`;
}

function searchElement() {   //imp-learning: Use getElementById for Single Elements: If you expect to manipulate a single element, use document.getElementById instead of getElementsByClassName or querySelectorAll.

    const val = search_input.value.trim();

    if( val === "" ) return;

    const idx = arr.indexOf(Number(val));

    if( idx!==-1 ) search_idx_display.textContent = `Search Result:- Element found at index: ${idx}`;
    
    else search_idx_display.textContent = `Search Result:- Element not found!`;

    search_input.value = "";

    operation_text.innerText = `Operation Performed: search result displayed`;
}

function resetSearchResult() {
    search_idx_display.textContent=`Search Result:-`;
}

function getFirstElement() {

    const first_element = arr[0];

    display_st_element.textContent = `First Element is: ${first_element}`;

}

function getLastElement() {

    const last_element = arr[arr.length-1];

    display_end_element.textContent = `Last Element is: ${last_element}`;

}

function apply_theme(body_color_array) {
    const body_theme = body_color_array[Math.floor(Math.random() * body_color_array.length)];
    // const container_theme = container_color_array[Math.floor(Math.random()*container_color_array.length)];

    document.body.style.backgroundColor = `#${body_theme}`; //'#' for valid hex color
    // document.body.container.style.backgroundColor = `#${container_theme}`;

}

function getSum() {

    let sum = 0;

    arr.forEach( (val) =>  {
        sum += val;
    })

    sum_text.innerText = `Sum of the elements is: ${Number(sum)}`;

}