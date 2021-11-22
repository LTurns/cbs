<template>
  <section id="hero">
    <!-- <hero-alt :hero-alt="heroAlt" class="white" /> -->
    <div v-if="blogData.heading.length !== 0">
      <v-row>
        <v-col cols="12" md="12">
          <div>
            <div
              class="fonttitle black--text text--lighten-4 font-weight-black"
              align="center"
              style="
                border-bottom: 2px solid #fde36d;
                box-shadow: 0 4px 6px -6px #222;
                line-height: 1;
                padding: 2%;
                margin-top: 20px;
                margin-bottom: 10px;
              "
            >
              {{ blogData.heading.toUpperCase() }}
            </div>
            <div class="white">
              <h3
                class="text-h5 text-uppercase text-center black--text"
                style="padding: 5%"
              >
                {{ blogData.subheading }}
              </h3>
              <v-col cols="12" md="12">
                <v-carousel hide-delimiter-background height="100%">
                  <v-carousel-item
                    v-for="image in blogData.img"
                    :key="image.id"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  >
                    <a
                      target="_blank"
                      :href="
                        'https://cbs-images.s3.amazonaws.com/blog/' +
                        image.image
                      "
                    >
                      <v-img
                        class="imagewidth"
                        :src="
                          'https://cbs-images.s3.amazonaws.com/blog/' +
                          image.image
                        "
                        :lazy-src="
                          'https://cbs-images.s3.amazonaws.com/blog/' +
                          image.image
                        "
                        style="
                          display: block;
                          margin-left: auto;
                          margin-right: auto;
                        "
                      />
                    </a>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
            </div>
            <div
              v-for="paragraph in blogData.description"
              :key="paragraph.id"
              class="blue-grey darken-4"
            >
              <block-quote text="white--text">
                {{ paragraph.paragraph }}
              </block-quote>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-progress-circular
        class="text-center"
        indeterminate
        color="amber"
      ></v-progress-circular>
    </div>
  </section>
</template>

<script>
import BlockQuote from './BlockQuote.vue'
// import HeroAlt from './HeroAlt.vue'
export default {
  components: {
    // HeroAlt,
    BlockQuote,
  },
  props: {
    id: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: 'BLOG',
          icon: 'mdi-message-text',
        },
      ],
      blogData: {
        heading: '',
        subheading: '',
        info: [],
        categories: [],
        description: [],
        img: [],
      },
    }
  },
  created() {
    this.getBlog()
  },
  methods: {
    async getBlog() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const { data } = await this.$axios.get(
          `https://cbsbackend.herokuapp.com/api/blogs/${this.id}`,
          config
        )

        this.blogData = {
          ...data,
        }
        // this.blog.push(response.data)
        // console.log(this.blog)
      } catch (err) {
        throw new Error('Error Fetching Blogs')
      }
    },
  },
}
</script>

<style>
div.gallery {
  /* margin: 3%; */
  width: 300px;
  display: 'inline-block';
  margin-left: auto;
  margin-right: auto;
}

div.gallery img {
  width: 100%;
  height: auto;
}

.imagewidth {
  width: 50%;
  margin-bottom: 10%;
}

@media screen and (max-width: 658px) {
  .imagewidth {
    width: 75%;
    margin-bottom: 2%;
  }
}
</style>
