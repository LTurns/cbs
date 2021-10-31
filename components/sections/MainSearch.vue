<template>
  <section>
    <div class="search yellow darken-1">
      <input
        v-model="search"
        type="text"
        class="search__input"
        aria-label="search"
        placeholder="enter your search"
      />
      <button class="search__btn" aria-label="submit search">
        <img src="/loupe.png" alt="" />
      </button>
    </div>
    <SectionsFeaturedProducts :data="list" />
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    list() {
      if (this.search !== '') {
        return this.data.filter((box) => {
          return box.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped>
$backgroundColor: rgb(14, 12, 24);
$brandColor: #fde36d;
.search {
  // margin-left: 20%;
  // margin-right: 20%;
  display: flex;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
  background-color: white;
  // border-radius: 100vh;
  // heigth: 60px;
  margin-top: 3%;
  margin-bottom: 3%;
  width: 50%;
  position: relative;
  transition: width 450ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  overflow: hidden;

  &__input {
    flex-grow: 1;
    border: none;
    // background: transparent;
    padding: 0 0.5rem;
    // font-size: 1.6rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    opacity: 0;
    width: calc(100% - 60px);
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  &__btn {
    // font-size: 1.3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 100vh;
    height: 50px;
    width: 50px;
    margin-left: auto;
    transition: background 150ms ease-in-out;

    &:focus {
      outline: none;
    }

    img {
      width: 20px;
    }
  }

  &:focus-within {
    width: 80%;

    .search__input {
      opacity: 1;
      cursor: initial;
    }

    .search__btn {
      background: $brandColor;
      color: black;

      &:hover,
      &:focus {
        outline: 0;
        // transform: rotate(1turn);
        // box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
      }
    }
  }
}
</style>
