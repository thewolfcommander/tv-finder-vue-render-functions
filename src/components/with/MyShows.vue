<script>
import { h, ref } from "vue";
import axios from "axios";
export default {
  setup() {
    let search = "";
    let shows = ref(null);
    let error = ref(null);

    function getShows(search) {
      let url = `https://api.tvmaze.com/search/shows?q=${search}`;
      axios({
        url: url,
        method: "GET",
      })
        .then((resp) => {
          shows.value = resp.data;
          console.log(shows);
        })
        .catch((err) => {
          error.value = err;
          console.log(error);
        });
    }

    return () =>
      h("div", [
        h(
          "form",
          {
            style: "color: red;",
            onSubmit: (e) => e.preventDefault(),
          },
          [
            h("input", {
              onInput: (e) => {
                search = e.target.value;
              },
              placeholder: "Start typing and see what happens",
            }),
            h(
              "button",
              {
                onClick: () => getShows(search),
              },
              "Press me"
            ),
          ]
        ),
        h("div", { class: "shows-list" }, [
          h(
            "p",
            `Showing results for ${search}`
          ),
          shows.value?.map((show) =>
            h(
              "div",
              {
                class: "show-single",
              },
              [h("h3", show.show.name)]
            )
          ),
        ]),
      ]);
  },
};
</script>

<style scoped>
.shows-list {
  width: 100vw;
  display: flex;
  margin-top: 50px;
  align-items: center;
  flex-direction: column;
}
.show-single {
  width: 200px;
  border: 1px solid black;
  border-radius: 12px;
  margin-top: 10px;
}
</style>
