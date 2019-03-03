function comment (commentSection) { 
  var textBoxId = "commentPost"+commentSection+"TextBox";
  console.log(textBoxId)
  var commentNameBoxId = "commentPost"+commentSection+"NameTextBox"
  var commentText = document.getElementById(textBoxId).value;
  var commentName = document.getElementById(commentNameBoxId).value;
  console.log(commentText)
  // and give it some content 
  // add the text node to the newly created div
  var newDiv = document.createElement("div"); 
  // Set it to the bootstrap container class
  newDiv.className = "container"
  document.getElementById(textBoxId).value="";
  document.getElementById(commentNameBoxId).value="";
  testNode = document.createTextNode(commentName + " says: " + commentText)
  newDiv.appendChild(testNode)
  //post1CommentSection
  commentSectionToUpdate = document.getElementById("post"+commentSection+"CommentSection");
  // add the newly created element and its content into the DOM 
  commentSectionToUpdate.appendChild(newDiv)
}