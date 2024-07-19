Vue.component("blog-card-component", {
  template: `
    <div>
    <div class="blog-details-cards" v-for="card in filteredCards" :key="card.id">
    <p class="blog-details-card-title">{{card.title}}</p>
    <img :src="card.imgsrc" alt="" class="blog-details-card-img">
    <div class="blog-details-card-description">
        <p class="blog-description-date">{{card.date}}</p>
        <p class="blog-details-description-text">{{card.description}}</p>
    </div>
    <p class="blog-details-card-article">{{card.article}}</p>
    <img :src="card.qouter" alt="" class="blog-details-card-quote">
</div>
</div>
    `,

  data() {
    return {
      cards: [
        {
          id: 1,
          teg: "kitchen",
          title: "Создадим лучший макет кухни",
          imgsrc: "./images/blog-detail-card.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },

        {
          id: 2,
          teg: "kitchen",
          title: "Создадим лучший макет кухни",
          imgsrc: "./images/Image20.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },

        {
          id: 3,
          teg: "bedroom",
          title: "Создадим лучший макет спальни",
          imgsrc: "./images/blog-detail-card.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },

        {
          id: 4,
          teg: "bedroom",
          title: "Создадим лучший макет спальни",
          imgsrc: "./images/Image20.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },

        {
          id: 5,
          teg: "building",
          title: "Создадим лучший макет здания",
          imgsrc: "./images/Image20.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },

        {
          id: 6,
          teg: "building",
          title: "Создадим лучший макет здания",
          imgsrc: "./images/blog-detail-card.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },

        {
          id: 7,
          teg: "building",
          title: "Создадим лучший макет здания",
          imgsrc: "./images/blog-detail-card.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },

        {
          id: 8,
          teg: "architecture",
          title: "Архитектура",
          imgsrc: "./images/Image20.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },

        {
          id: 9,
          teg: "architecture",
          title: "Архитектура",
          imgsrc: "./images/blog-detail-card.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },

        {
          id: 10,
          teg: "layout",
          title: "Планировка",
          imgsrc: "./images/Image20.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },

        {
          id: 11,
          teg: "layout",
          title: "Планировка",
          imgsrc: "./images/blog-detail-card.png",
          date: "26 Декабрь,2022",
          description: "Интерьер / Домой / Декор",
          article:
            "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»",
          qouter: "./images/Quotes.png",
        },
      ],

       selectedTeg: null,
    };
  },

  computed: {
    filteredCards() {
      if (!this.selectedTeg) {
        return this.cards;
      }
      return this.cards.filter(card => card.teg === this.selectedTeg);
    }
  },

  methods: {
    filterCards(teg) {
      this.selectedTeg = teg;
    },
  },

 
});

new Vue({
  el: "#app",
  methods: {
    filterCards(teg) {
      this.$children[0].filterCards(teg);
    },
  },
});
