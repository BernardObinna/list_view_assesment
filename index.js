new Vue({
  el: "#app",
  // define data - initial display text
  data: {
    message: "You got to let me know",
    images: [],
    displayedItems: [],
    opened: false,
    selected: {},
    search: "",
    searchResult: []
  },

  methods: {
    fetchPics: function() {
      // this.message = e;
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(json => {
          const first10 = json.slice(0, 10);
          this.images = first10;
          this.displayedItems = first10;
        });

      console.log(this.images);
    },

    open: function(item) {
      this.opened = !this.opened;
      this.selected = item;
      console.log(item);
    },

    performSearch: function() {
      this.displayedItems = this.images.filter(item => {
        const result = item.title.includes(this.search);
        if (result) {
          return item;
        }
        // console.log(this.displayedItems);
        // return (this.displayedItems = result);
      });
      console.log(this.displayedItems);
    }
  },
  mounted: function() {
    this.fetchPics();
  }
});
