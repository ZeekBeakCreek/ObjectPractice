var recipes = {
  name: "Monstat Sandwich",
  serving: "2",
  steps: "10",
  ingredients: [
    "bread",
    "ham",
    "cheese",
    "butter",
    "salt & pepper to taste",
    "tomatoes",
    "more cheese",
  ],
  writeRecipe: function () {
    console.log("The Name of this Recipe is " + this.name);
    console.log("the yeaild is " + this.serving);
    console.log("This recipe has " + this.steps + " steps");
    console.log("The ingredeints are " + this.ingredients);
  },
};
recipes.writeRecipe();

var students = {
  studentID: "1072302",
  name: "zeek p.",
  grade: "11",
  homeschool: "valley vista",
  writeInfo: function () {
    console.log("Students ID: " + this.studentID);
    console.log("Student name: " + this.name);
    console.log("Grade: " + this.grade);
    console.log("Homeschool: " + this.homeschool);
  },
};
students.writeInfo();

var books = {
  book1: ["To Kill a Mockingbird", "Harper Lee", "true"],
  book2: ["Green Eggs and Ham", "Dr. Seuss", "false"],
  bookInfo: function () {
    for (let i = 0; i < this.book1.length; i++) {
      console.log(this.book1[i]);
    }
  },
};
books.bookInfo();

var wishlist = {
    vacation: "puerto rico",
    gift1: "car",
    gift2: "cat",
    gift3: "dog",
    wishlistInfo: function () {
      console.log("I want to go to " + this.vacation);
      console.log("I want a" + this.gift1);
      console.log("I also want a " + this.gift2);
      console.log("I really want a " + this.gift3);
    },
  };
  wishlist.wishlistInfo();

// var books = [
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     level: "5.6",
//     genre: "novel, thriller, domestic fiction",
//     alreadyRead: true,
//   },
//   {
//     title: "Green Eggs and Ham",
//     author: "Dr. Seuss",
//     level: "1.5",
//     genre: "fiction, comedy",
//     alreadyRead: false,
//   },
// ];
// console.log(books[0]);
