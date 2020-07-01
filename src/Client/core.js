function ElementBuilder(e){
    let self = this;
    this.element = document.createElement(e);
    this.text = function (input) {
        return self.element.textContent = input, self;
    };
    this.type = function (input) {
        return self.element.type = input, self;
    };
    this.appendTo = function (input) {
        return input instanceof ElementBuilder ? input.build().appendChild(self.element) : input.appendChild(self.element), self;
    };
    this.placeholder = function (input) {
        return self.element.placeholder = input, self;
    };
    this.hide = function () {
        return self.element.style.display = "none", this;
    };
    this.show = function () {
        return self.element.style.display = "block", this;
    };
    this.className = function (input) {
        return self.element.className = input, self;
    };
    this.onClick = function (input) {
        return self.element.onClick = input, self;
    };
    this.html = function (input) {
        return self.element.innerHTML = input, self;
    };
    this.value = function (input) {
        return self.element.value = input, self;
    };
    this.build = function () {
        return self.element;
    };
    this.width = function () {
        return self.element.width = input, self;
    };
    this.on = function (input, t) {
        return self.element.addEventListener(input, t), self;
    };
    this.getValue = function () {
        return self.element.value;
    };
    this.src = function (input) {
        return self.element.src = input, self;
    };
    this.dataset = function (input) {
        return self.element.dataset = input, self;
    };
}

  class Gallery {
    constructor({ id, title, likeCounts, image }) {
        this.id = id; 
        this.title = title; 
        this.likeCounts = likeCounts;
        this.image = image;
    }

    render() {
        const e = new ElementBuilder("article").className("product").dataset({keyword : this.title}),
              t = new ElementBuilder("div").className("img-container").appendTo(e);
              new ElementBuilder("img").className("product-img").src(this.image).appendTo(t);
        const n = new ElementBuilder("button")
            .dataset({ id: this.id })
            .html(`<span id="${this.id}">${this.likeCounts}</span>`)
            .className("bag-btn")
            .appendTo(t)
            .on("click", () => {
              manager.updateLike(this.id);
            });
        return new ElementBuilder("i").className("fas fa-thumbs-up").appendTo(n), new ElementBuilder("h3").text(this.title).appendTo(e), e.build();
    }
}

class GalleryManager {
    constructor() {
      let self = this;
      this.raw = "";
      this.list = null;
    }
    getData(){
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "https://localhost:44395/api/gallery/getdata",false); 
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
              self.raw = xhr.responseText;
          }
      };
       xhr.send(null);
  
      if(self.raw){
        let data = JSON.parse(self.raw); 
        self.list = data.items.map((row) => new Gallery({ id: row.sys.id, title: row.fields.title, likeCounts: row.fields.likeCounts, image: row.fields.image.file.url }));
      }

    }
    filter(){
      let searchbox, searchKeyword, container, containerKeyword,txtValue;
  
      searchbox = document.getElementById('search-box'); 
      searchKeyword = searchbox.value.toLowerCase();
      container = document.getElementsByTagName('article');
  
      for (let index = 0; index < container.length; index++) {
        containerKeyword = container[index].getElementsByTagName("h3")[0];
        if(containerKeyword){
          txtValue = containerKeyword.textContent || containerKeyword.innerText;
          if(txtValue.toLowerCase().indexOf(searchKeyword) > -1){
            container[index].style.display = "block";
          } else{
            container[index].style.display = "none";
          }
        }
      };
    }
    updateLike(id){
      let obj = self.list.find((row) => row.id == id);
      obj.likeCounts++;
      document.getElementById(id).innerText = obj.likeCounts;
    }
  
    render() {
        const container = document.querySelector(".products-center");
        container.innerHTML = ""; 
        let sortedList = self.list.sort(function(a,b) {
            return parseInt(b.likeCounts) - parseInt(a.likeCounts); 
        });
        sortedList.forEach((row) => {
            container.appendChild(row.render());
        });
    }
    init(){
      this.getData();
      this.render();
      document.getElementById("btnSort").addEventListener('click',() => this.render());
      document.getElementById("search-box").addEventListener('keyup',() => this.filter()); 
    }
}
const manager = new GalleryManager();
manager.init(); 
