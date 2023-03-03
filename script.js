/*
    Assignment 05
	Yash Kheni
	0816059
*/

$(document).ready(function () {
class ContentItem {
  constructor(id, name, description, genre) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.genre = genre;
  }

  updateContentItem(id, name, description, genre) {
    if (id === this.id) {
      if (name !== null) {
        this.name = name;
      }
      if (description !== null) {
        this.description = description;
      }
      if (genre !== null) {
        this.genre = genre;
      }
    }
  }

  toString() {
    return `<div class="content-item-wrapper" id="contentitem-${this.id}">
              <h2>${this.name}</h2>
              <p>${this.description}</p>
              <div>${this.genre}</div>
            </div>`;
  }
}

const contentItems = [
  new ContentItem(0, "Justice League", "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", "Action/Adventure"),
  new ContentItem(1, "Wonder Woman", "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", "Action"),
  new ContentItem(2, "Forrest Gump", "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.", "Comedy"),
  new ContentItem(3, "The Matrix", "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", "Sci-Fi"),
  new ContentItem(4, "Inception", "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", "Thriller")
];

const $contentList = $('#content-item-list');

contentItems.forEach(item => {
  const $item = $(item.toString());
  $item.css({
    border: '1px solid black',
    width: '400px',
    padding: '10px',
    margin: '20px auto'
  });
  $contentList.append($item);
});

$('#content-theme').text("Best movies of all time");

});


