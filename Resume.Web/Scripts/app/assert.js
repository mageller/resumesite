function assert(value, desc) {
    // Get the results element
    var resultsList = document.getElementById("results");
    // if results element doesn't exist, create it and add it to the page
    if (!resultsList) {
        resultsList = document.createElement('ul');
        document.getElementsByTagName('body')[0].appendChild(resultsList);
        resultsList.setAttribute('id', 'results');
    }
    // create a list item to display the result of the test
    var li = document.createElement('li');
    // evaluate the test and assign the appropriate class
    li.className = value ? "pass" : "fail";
    // add the description to the list item
    li.appendChild(document.createTextNode(desc));
    // append the list item to the resultList
    resultsList.appendChild(li);
}